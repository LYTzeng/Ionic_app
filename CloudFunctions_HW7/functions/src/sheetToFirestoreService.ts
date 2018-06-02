import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import axios from "axios"
const cors = require("cors")({ origin: true })

import { Member, Performance, Student, Admin } from "./firestoreModel"

const firestore = admin.firestore()
const adminCollection = firestore.collection("Admin")
const studentCollection = firestore.collection("Student")

export const sheetToFirestoreStudent = functions.https.onRequest(async (req, res) => {
    console.log(JSON.stringify(req.body, null, 4))
    const studentId = req.body.studentId as string
    const student = req.body.student as Student
    await studentCollection.doc(studentId).update({ ...student })
        .catch(() => studentCollection.doc(studentId).set({ ...student }))
    res.sendStatus(200)
})

export const sheetToFirestoreMember = functions.https.onRequest(async (req, res) => {
    console.log(JSON.stringify(req.body, null, 4))
    const studentId = req.body.studentId as string
    const member = req.body.member as Member
    await studentCollection.doc(studentId).update({ member })
        .catch(() => studentCollection.doc(studentId).set({ member }))
    res.sendStatus(200)
})

export const sheetToFirestorePerformance = functions.https.onRequest(async (req, res) => {
    console.log(JSON.stringify(req.body, null, 4))
    const studentId = req.body.studentId as string
    const performance = req.body.performance as Performance
    await studentCollection.doc(studentId).update({ performance })
        .catch(() => studentCollection.doc(studentId).set({ performance }))
    res.sendStatus(200)
})

export const sheetToFirestoreAdmin = functions.https.onRequest(async (req, res) => {
    const admin = req.body as Admin
    console.log(JSON.stringify(admin, null, 4))

    const adminSnapshot = await adminCollection.where("member.email", "==", admin.member.email).get()
    if (!adminSnapshot.empty) {
        const adminReference = adminSnapshot.docs[0].ref
        await adminReference.update(admin)
    } else {
        await adminCollection.doc(admin.account).set(admin)
    }
    res.sendStatus(200)

})