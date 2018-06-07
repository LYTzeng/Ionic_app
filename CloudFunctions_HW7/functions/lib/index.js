"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const SheetToFirestoreService = require("./sheetToFirestoreService");
const FirestoreToSheetService = require("./firestoreToSheetService");
const AuthenticationService = require("./authenticationService");
exports.sheetToFirestoreStudent = SheetToFirestoreService.sheetToFirestoreStudent;
exports.sheetToFirestoreMember = SheetToFirestoreService.sheetToFirestoreMember;
exports.sheetToFirestorePerformance = SheetToFirestoreService.sheetToFirestorePerformance;
exports.firestoreToSheetStudent = FirestoreToSheetService.firestoreToSheetStudent;
exports.sheetToFirestoreAdmin = SheetToFirestoreService.sheetToFirestoreAdmin;
exports.firestoreToAuthentication = AuthenticationService.firestoreToAuthentication;
exports.authenticationToFirestore = AuthenticationService.authenticationToFirestore;
exports.firestoreToAuthenticationDelete = AuthenticationService.firestoreToAuthenticationDelete;
/*
export const publishChatTopic = MessageService.publishChatTopic
export const chatMessageSubscriber = MessageService.chatMessageSubscriber
export const chatFCMSubscriber = MessageService.chatFCMSubscriber

export const publishPostTopic = MessageService.publishPostTopic
export const postMessageSubscriber = MessageService.postMessageSubscriber
export const postFCMSubscriber = MessageService.postFCMSubscriber
export const postLinePushSubscriber = MessageService.postLinePushSubscriber
*/
//# sourceMappingURL=index.js.map