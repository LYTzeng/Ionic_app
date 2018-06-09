import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import {Client, Message, TextMessage} from '@line/bot-sdk'
import * as PubSub from "@google-cloud/pubsub"
import * as uuid from 'uuid'

import * as sheetService from './sheetService'

import { linePushList, appIdList, student, member } from './sheetColumns'
import { lineConfig } from './sheetConfig'
import { Admin, AppMessage, ChatMessage, Student } from './firestoreModel'


const cors = require("cors")({ origin: true })

const lineClient = new Client({
    channelSecret: lineConfig.channelSecret,
    channelAccessToken: lineConfig.channelAccessToken
})
const messaging = admin.messaging()
const pubsub = PubSub()

const firestore = admin.firestore()
const adminCollection = firestore.collection("Admin")
const postCollection = firestore.collection("Post")


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


export const postLinePushSubscriber = functions.pubsub.topic("postTopic").onPublish(async (data, context) => {
    const chatMessage: ChatMessage = data.json

    const auth = await sheetService.authorize()

    /* 推到LINE群組的部分 */
    // 從appIdList sheet抓資料
    /*
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
        
    }*/
    /* 讀firestore
    const allMembers = studentCollection.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                console.log(doc.id, "=>", doc.data)
            })
        })
        .catch(err => {
            console.log('Error getting document from collection "Student" Damn!', err)
        })
    */

    const memberQueryString = `Select ${member.lineId}`
    const memberQueryResult = await sheetService.querySheet(auth, memberQueryString, member.spreadsheetId, member.gid) as Array<any>
    console.log(memberQueryResult)    
    for(let i = 0; memberQueryResult[i] != null;i++){
        let lineId = memberQueryResult[i][0]
        const lineMessage: TextMessage = {
            type: "text",
            text: chatMessage.message
        }
        pushMessage(lineId, lineMessage)
        console.log(chatMessage.message, "已推送給使用者", lineId)
    }
})

const pushMessage = (userId: string, lineMessage: Message | Array<Message>): Promise<any> => {
    return lineClient.pushMessage(userId, lineMessage)
}

