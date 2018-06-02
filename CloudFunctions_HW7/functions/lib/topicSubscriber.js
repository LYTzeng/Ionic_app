"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const line = require("@line/bot-sdk");
const PubSub = require("@google-cloud/pubsub");
const uuid = require("uuid");
const sheetService = require("./services/sheetService");
const sheetColumns_1 = require("./sheetColumns");
const sheetConfig_1 = require("./sheetConfig");
const cors = require("cors")({ origin: true });
const lineClient = new line.Client(sheetConfig_1.lineConfig);
const messaging = admin.messaging();
const pubsub = PubSub();
const firestore = admin.firestore();
const adminCollection = firestore.collection("Admin");
const postCollection = firestore.collection("Post");
exports.publishChatTopic = functions.https.onRequest((req, res) => {
    cors(req, res, () => __awaiter(this, void 0, void 0, function* () {
        const chatMessage = req.body;
        yield pubsub.topic("chatTopic").publisher().publish(Buffer.from(JSON.stringify(chatMessage)));
        res.sendStatus(200);
    }));
});
exports.chatMessageSubscriber = functions.pubsub.topic("chatTopic").onPublish((data, context) => __awaiter(this, void 0, void 0, function* () {
    const chatMessage = Object.assign({ id: uuid.v4() }, data.json, { timestamp: new Date().getTime() });
    const senderReference = adminCollection.doc(chatMessage.sender);
    const receiverReference = adminCollection.doc(chatMessage.receiver);
    yield Promise.all([
        senderReference.collection("chatMessages").doc(chatMessage.id).create(chatMessage),
        receiverReference.collection("chatMessages").doc(chatMessage.id).create(chatMessage),
        firestore.runTransaction((transaction) => __awaiter(this, void 0, void 0, function* () {
            const senderDocument = yield transaction.get(senderReference);
            const sender = senderDocument.data();
            const senderChatCount = sender.chatCount || { postCount: 0, sendCount: 0, receiveCount: 0 };
            return transaction.update(senderReference, { chatCount: Object.assign({}, senderChatCount, { sendCount: senderChatCount.sendCount + 1 }) });
        })),
        firestore.runTransaction((transaction) => __awaiter(this, void 0, void 0, function* () {
            const receiverDocument = yield transaction.get(receiverReference);
            const receiver = receiverDocument.data();
            const receiverChatCount = receiver.chatCount || { postCount: 0, sendCount: 0, receiveCount: 0 };
            return transaction.update(receiverReference, { chatCount: Object.assign({}, receiverChatCount, { receiveCount: receiverChatCount.receiveCount + 1 }) });
        }))
    ]);
}));
exports.chatFCMSubscriber = functions.pubsub.topic("chatTopic").onPublish((data, context) => __awaiter(this, void 0, void 0, function* () {
    const chatMessage = data.json;
    const receiverDocument = yield adminCollection.doc(chatMessage.receiver).get();
    const senderDocument = yield adminCollection.doc(chatMessage.sender).get();
    const receiver = receiverDocument.data();
    const sender = senderDocument.data();
    const notificationPayload = {
        notification: {
            title: sender.member.name,
            body: chatMessage.message,
            sound: "default"
        }
    };
    return messaging.sendToDevice(receiver.member.fcmToken, notificationPayload);
}));
exports.publishPostTopic = functions.https.onRequest((req, res) => {
    cors(req, res, () => __awaiter(this, void 0, void 0, function* () {
        const postMessage = req.body;
        yield pubsub.topic("postTopic").publisher().publish(Buffer.from(JSON.stringify(postMessage)));
        res.sendStatus(200);
    }));
});
exports.postMessageSubscriber = functions.pubsub.topic("postTopic").onPublish((data, context) => __awaiter(this, void 0, void 0, function* () {
    const message = Object.assign({ id: uuid.v4() }, data.json, { timestamp: new Date().getTime() });
    const senderReference = yield adminCollection.doc(message.sender);
    return Promise.all([
        postCollection.doc(message.id).create(message),
        firestore.runTransaction((transaction) => __awaiter(this, void 0, void 0, function* () {
            const senderDocument = yield transaction.get(senderReference);
            const sender = senderDocument.data();
            const senderChatCount = sender.chatCount || { postCount: 0, sendCount: 0, receiveCount: 0 };
            return transaction.update(senderReference, { chatCount: Object.assign({}, senderChatCount, { postCount: senderChatCount.postCount + 1 }) });
        }))
    ]);
}));
exports.postFCMSubscriber = functions.pubsub.topic("postTopic").onPublish((data, context) => __awaiter(this, void 0, void 0, function* () {
    const message = data.json;
    const notificationPayload = {
        notification: {
            title: "《智能學堂》公告",
            body: message.message,
            sound: "default"
        }
    };
    return messaging.sendToTopic("postTopic", notificationPayload);
}));
exports.postLinePushSubscriber = functions.pubsub.topic("postTopic").onPublish((data, context) => __awaiter(this, void 0, void 0, function* () {
    const chatMessage = data.json;
    const auth = yield sheetService.authorize();
    const appIdListQueryString = `Select ${sheetColumns_1.appIdList.id}, ${sheetColumns_1.appIdList.name}, ${sheetColumns_1.appIdList.organization} where ${sheetColumns_1.appIdList.id} = '1'`;
    const appIdListResult = yield sheetService.querySheet(auth, appIdListQueryString, sheetColumns_1.appIdList.spreadsheetId, sheetColumns_1.appIdList.gid);
    if (appIdListResult.length > 0) {
        const appId = appIdListResult[0][0];
        const appName = appIdListResult[0][1];
        const appOrganization = appIdListResult[0][2];
        const appMessage = {
            id: "1",
            appId: {
                id: appId,
                name: appName,
                organization: appOrganization
            },
            message: chatMessage
        };
        const linePushListQueryString = `Select ${sheetColumns_1.linePushList.id}, ${sheetColumns_1.linePushList.messageTopic}, ${sheetColumns_1.linePushList.appId}, ${sheetColumns_1.linePushList.lineGroupId}, ${sheetColumns_1.linePushList.groupName} where ${sheetColumns_1.linePushList.appId} = '${appMessage.appId.id}'`;
        const linePushListQueryResult = yield sheetService.querySheet(auth, linePushListQueryString, sheetColumns_1.linePushList.spreadsheetId, sheetColumns_1.linePushList.gid);
        if (linePushListQueryResult.length > 0) {
            const lineGroupId = linePushListQueryResult[0][3];
            yield lineClient.pushMessage(lineGroupId, {
                type: "text",
                text: appMessage.message.message
            });
        }
    }
}));
//# sourceMappingURL=topicSubscriber.js.map