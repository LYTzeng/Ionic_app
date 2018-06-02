import { Component, OnDestroy } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { Subscription } from 'rxjs'
import { AngularFireAuth } from 'angularfire2/auth'

import { FirestoreService } from '../../services/firestoreService'
import { Student, Admin } from '../../angularModel'

@Component({
    selector: 'page-performance-detail',
    templateUrl: 'performanceDetail.html',
})
export class PerformanceDetailController implements OnDestroy{
    logged: Boolean = false

    adminSubscription: Subscription
    studentSubscription: Subscription
    admin: Admin = null
    student: Student = null

    mode: string = "view"

    constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        const studentId = navParams.data as string
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged) {
                this.adminSubscription = firestoreService.getAdminByAccount(firebaseUser.uid).subscribe(admin => this.admin = admin)
                this.studentSubscription = this.firestoreService.getStudentByStudentId(studentId).subscribe(student => this.student = student)
            } else {
                this.ngOnDestroy()
                navCtrl.pop()
            }
        })
    }

    setGrade(student: Student, grade: string) {
        this.alertCtrl.create({
            title: "評量",
            message: "確認送出成績？",
            buttons: [
                {
                    text: "送出",
                    handler: () => {
                        student.performance.grade = parseInt(grade)
                        this.firestoreService.setGrade(student)
                        this.toggleMode("view")
                    }
                },
                {
                    text: "取消",
                    role: "cancel",
                    handler: () => {
                        this.toggleMode("view")
                    }
                }
            ]
        }).present()
    }

    toggleMode(mode: string) {
        this.mode = mode
    }

    isValid(value: string): Boolean {
        const regx = /^[0-9]*$/
        return regx.test(value)
    }

    ngOnDestroy() {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe()
        if (this.studentSubscription)
            this.studentSubscription.unsubscribe()
        this.admin = null
        this.student = null
    }
}
