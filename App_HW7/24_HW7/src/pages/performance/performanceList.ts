import { Component, OnDestroy } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { PerformanceDetailController } from './performanceDetail'

import { FirestoreService } from '../../services/firestoreService'
import { Student } from '../../angularModel'

import { Subscription } from 'rxjs'

@Component({
    selector: 'page-performanceList',
    templateUrl: 'performanceList.html',
})
export class PerformanceListController implements OnDestroy{
    performanceDetailPage: any = PerformanceDetailController

    logged: Boolean = false
    studentsSubscription: Subscription
    students = new Array<Student>()

    constructor(private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged)
                this.studentsSubscription = this.firestoreService.getStudents().subscribe(students => this.students = students)
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
