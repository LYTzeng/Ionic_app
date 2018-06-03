import * as functions from "firebase-functions"
import * as admin from "firebase-admin"

import * as sheetService from "./sheetService"
import { Student, Member, Performance } from "./firestoreModel"
import * as sheetColumns from "./sheetColumns"

export const firestoreToSheetStudent = functions.firestore.document("Student/{studentId}").onUpdate(async (change, context) => {
    const oldStudent = change.before.data() as Student
    const newStudent = change.after.data() as Student

    if (oldStudent.performance.grade != newStudent.performance.grade) {
        console.log(JSON.stringify(newStudent, null, 4))

        const auth = await sheetService.authorize()
        const queryString = `select ${sheetColumns.performance.id} where ${sheetColumns.performance.studentId} = '${newStudent.studentId}'`
        const queryResult = await sheetService.querySheet(auth, queryString, sheetColumns.performance.spreadsheetId, sheetColumns.performance.gid) as Array<any>
        if (queryResult.length > 0) {
            const performanceId = queryResult[0][0]
            const range = encodeURI(`${sheetColumns.performance.sheetName}!${sheetColumns.performance.grade}${performanceId}`)
            await sheetService.writeSheet(auth, sheetColumns.performance.spreadsheetId, range, [[newStudent.performance.grade]])
        }
    }
})