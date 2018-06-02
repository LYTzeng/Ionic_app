import { Component, OnDestroy } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'

import { FirestoreService } from '../../services/firestoreService'
import { Student } from '../../angularModel'
import { Subscription } from 'rxjs'

@Component({
    selector: 'page-member-detail',
    templateUrl: 'memberDetail.html',
})
export class MemberDetailController implements OnDestroy{
    logged: Boolean = false
    studentSubscription: Subscription
    student: Student = null

    constructor(private navCtrl: NavController, private navParams: NavParams, private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        const studentId = navParams.data as string
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged)
                this.studentSubscription = firestoreService.getStudentByStudentId(studentId).subscribe(student => this.student = student)
            else {
                this.ngOnDestroy()
                navCtrl.pop()
            }
        })
    }

    ngOnDestroy() {
        if (this.studentSubscription)
            this.studentSubscription.unsubscribe()
        this.student = null
    }
}
