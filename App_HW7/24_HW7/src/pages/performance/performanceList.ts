import { Component, OnDestroy } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { PerformanceDetailController } from './performanceDetail'

import { FirestoreService } from '../../services/firestoreService'
import { User } from '../../angularModel'

import { Subscription } from 'rxjs'

@Component({
    selector: 'page-performanceList',
    templateUrl: 'performanceList.html',
})
export class PerformanceListController implements OnDestroy{
    performanceDetailPage: any = PerformanceDetailController

    logged: Boolean = false
    usersSubscription: Subscription
    users = new Array<User>()

    constructor(private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged)
                this.usersSubscription = this.firestoreService.getUsers().subscribe(users => this.users = users)
            else
                this.ngOnDestroy()
        })
    }

    ngOnDestroy() {
        if (this.usersSubscription)
            this.usersSubscription.unsubscribe()
        this.users = []
    }

}
