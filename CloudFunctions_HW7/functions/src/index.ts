import * as functions from "firebase-functions"
import * as admin from "firebase-admin"

admin.initializeApp(functions.config().firebase)

import * as SheetToFirestoreService from "./sheetToFirestoreService"
import * as FirestoreToSheetService from "./firestoreToSheetService"
import * as AuthenticationService from "./authenticationService"
import * as MessageService from './topicSubscriber'

export const sheetToFirestoreStudent = SheetToFirestoreService.sheetToFirestoreStudent
export const sheetToFirestoreMember = SheetToFirestoreService.sheetToFirestoreMember
export const sheetToFirestorePerformance = SheetToFirestoreService.sheetToFirestorePerformance

export const firestoreToSheetStudent = FirestoreToSheetService.firestoreToSheetStudent

export const sheetToFirestoreAdmin = SheetToFirestoreService.sheetToFirestoreAdmin

export const firestoreToAuthentication = AuthenticationService.firestoreToAuthentication
export const authenticationToFirestore = AuthenticationService.authenticationToFirestore
export const firestoreToAuthenticationDelete = AuthenticationService.firestoreToAuthenticationDelete

export const publishChatTopic = MessageService.publishChatTopic
export const chatMessageSubscriber = MessageService.chatMessageSubscriber
export const chatFCMSubscriber = MessageService.chatFCMSubscriber

export const publishPostTopic = MessageService.publishPostTopic
export const postMessageSubscriber = MessageService.postMessageSubscriber
export const postFCMSubscriber = MessageService.postFCMSubscriber
export const postLinePushSubscriber = MessageService.postLinePushSubscriber