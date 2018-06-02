import { Component, OnDestroy } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { MemberDetailController } from '../member/memberDetail'

import { FirestoreService } from '../../services/firestoreService'
import { Student } from '../../angularModel'
import { Subscription } from 'rxjs'

@Component({
    selector: 'page-memberList',
    templateUrl: 'memberList.html'
})
export class MemberListController implements OnDestroy{
    memberDetailPage: any = MemberDetailController

    logged: Boolean = false
    studentsSubscription: Subscription
    students = new Array<Student>()

    constructor(private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged)
                this.studentsSubscription = firestoreService.getStudents().subscribe(students => this.students = students)
            else
                this.ngOnDestroy()
        })
    }

    ngOnDestroy() {
        if (this.studentsSubscription)
            this.studentsSubscription.unsubscribe()
        this.students = []
    }
}
