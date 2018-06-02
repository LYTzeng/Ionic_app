import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/toPromise'

import { Student, Admin } from '../angularModel'

@Injectable()
export class FirestoreService {
    private studentCollection: AngularFirestoreCollection<Student>
    private adminCollection: AngularFirestoreCollection<Admin>

    constructor(private database: AngularFirestore) {
        this.studentCollection = database.collection<Student>("Student", ref => ref.orderBy("performance.practiceRank", "asc"))
        this.adminCollection = database.collection<Admin>("Admin")
    }

    getStudents(): Observable<Student[]> {
        return this.studentCollection.valueChanges()
    }

    getStudentByStudentId(studentId: string): Observable<Student> {
        return this.studentCollection.doc<Student>(studentId).valueChanges()
    }

    setGrade(student: Student): Promise<void> {
        return this.studentCollection.doc(student.studentId).update({
            performance: student.performance
        })
    }

    setFcmToken(admin: Admin): Promise<void> {
        return this.adminCollection.doc<Admin>(admin.account).update({
            member: admin.member
        })
    }

    getAdmins(): Observable<Admin[]> {
        return this.adminCollection.valueChanges()
    }

    getAdminByAccount(account: string): Observable<Admin> {
        return this.adminCollection.doc<Admin>(account).valueChanges()
    }

}