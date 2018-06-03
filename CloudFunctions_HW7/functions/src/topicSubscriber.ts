import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as line from '@line/bot-sdk'
import * as PubSub from "@google-cloud/pubsub"
import * as uuid from 'uuid'

import * as sheetService from './sheetService'

import { linePushList, appIdList } from './sheetColumns'
import { lineConfig } from './sheetConfig'
import { Admin, AppMessage, ChatMessage } from './firestoreModel'
import { TextMessage } from '@line/bot-sdk'



const cors = require("cors")({ origin: true })

const lineClient = new line.Client(lineConfig)
const messaging = admin.messaging()
const pubsub = PubSub()

const firestore = admin.firestore()
const adminCollection = firestore.collection("Admin")
const postCollection = firestore.collection("Post")

export const publishChatTopic = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        const chatMessage: ChatMessage = req.body
        await pubsub.topic("chatTopic").publisher().publish(Buffer.from(JSON.stringify(chatMessage)))
        res.sendStatus(200)
    })
})

export const chatMessageSubscriber = functions.pubsub.topic("chatTopic").onPublish(async (data, context) => {
    const chatMessage: ChatMessage = { id: uuid.v4(), ...data.json, timestamp: new Date().getTime() }
    const senderReference = adminCollection.doc(chatMessage.sender)
    const receiverReference = adminCollection.doc(chatMessage.receiver)

    await Promise.all([
        senderReference.collection("chatMessages").doc(chatMessage.id).create(chatMessage),
        receiverReference.collection("chatMessages").doc(chatMessage.id).create(chatMessage),
        firestore.runTransaction(async transaction => {
            const senderDocument = await transaction.get(senderReference)
            const sender = senderDocument.data() as Admin
            const senderChatCount = sender.chatCount || { postCount: 0, sendCount: 0, receiveCount: 0 }
            return transaction.update(senderReference, { chatCount: { ...senderChatCount, sendCount: senderChatCount.sendCount + 1 } })
        }),
        firestore.runTransaction(async transaction => {
            const receiverDocument = await transaction.get(receiverReference)
            const receiver = receiverDocument.data() as Admin
            const receiverChatCount = receiver.chatCount || { postCount: 0, sendCount: 0, receiveCount: 0 }
            return transaction.update(receiverReference, { chatCount: { ...receiverChatCount, receiveCount: receiverChatCount.receiveCount + 1 } })
        })
    ])
})

export const chatFCMSubscriber = functions.pubsub.topic("chatTopic").onPublish(async (data, context) => {
    const chatMessage: ChatMessage = data.json
    const receiverDocument = await adminCollection.doc(chatMessage.receiver).get()
    const senderDocument = await adminCollection.doc(chatMessage.sender).get()
    const receiver = receiverDocument.data() as Admin
    const sender = senderDocument.data() as Admin

    const notificationPayload: admin.messaging.MessagingPayload = {
        notification: {
            title: sender.member.name,
            body: chatMessage.message,
            sound: "default"
        }
    }
    return messaging.sendToDevice(receiver.member.fcmToken, notificationPayload)
})

export const publishPostTopic = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        const postMessage: ChatMessage = req.body
        await pubsub.topic("postTopic").publisher().publish(Buffer.from(JSON.stringify(postMessage)))
        res.sendStatus(200)
    })
})

export const postMessageSubscriber = functions.pubsub.topic("postTopic").onPublish(async (data, context) => {
    const message: ChatMessage = { id: uuid.v4(), ...data.json, timestamp: new Date().getTime() }
    const senderReference = await adminCollection.doc(message.sender)

    return Promise.all([
        postCollection.doc(message.id).create(message),
        firestore.runTransaction(async transaction => {
            const senderDocument = await transaction.get(senderReference)
            const sender = senderDocument.data() as Admin
            const senderChatCount = sender.chatCount || { postCount: 0, sendCount: 0, receiveCount: 0 }
            return transaction.update(senderReference, { chatCount: { ...senderChatCount, postCount: senderChatCount.postCount + 1 } })
        })
    ])
})

export const postFCMSubscriber = functions.pubsub.topic("postTopic").onPublish(async (data, context) => {
    const message: ChatMessage = data.json
    const notificationPayload: admin.messaging.MessagingPayload = {
        notification: {
            title: "《智能學堂》公告",
            body: message.message,
            sound: "default"
        }
    }
    return messaging.sendToTopic("postTopic", notificationPayload)
})

export const postLinePushSubscriber = functions.pubsub.topic("postTopic").onPublish(async (data, context) => {
    const chatMessage: ChatMessage = data.json

    const auth = await sheetService.authorize()
    const appIdListQueryString = `Select ${appIdList.id}, ${appIdList.name}, ${appIdList.organization} where ${appIdList.id} = '1'`
    const appIdListResult = await sheetService.querySheet(auth, appIdListQueryString, appIdList.spreadsheetId, appIdList.gid) as Array<any>
    if (appIdListResult.length > 0) {
        const appId = appIdListResult[0][0]
        const appName = appIdListResult[0][1]
        const appOrganization = appIdListResult[0][2]
        const appMessage: AppMessage = {
            id: "1",
            appId: {
                id: appId,
                name: appName,
                organization: appOrganization
            },
            message: chatMessage
        }


        const linePushListQueryString = `Select ${linePushList.id}, ${linePushList.messageTopic}, ${linePushList.appId}, ${linePushList.lineGroupId}, ${linePushList.groupName} where ${linePushList.appId} = '${appMessage.appId.id}'`
        const linePushListQueryResult = await sheetService.querySheet(auth, linePushListQueryString, linePushList.spreadsheetId, linePushList.gid) as Array<any>
        if (linePushListQueryResult.length > 0) {
            const lineGroupId = linePushListQueryResult[0][3]
            await lineClient.pushMessage(lineGroupId, {
                type: "text",
                text: appMessage.message.message
            })
        }

    }
})

