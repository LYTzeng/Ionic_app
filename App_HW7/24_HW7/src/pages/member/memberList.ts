import { Component, OnDestroy } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { MemberDetailController } from '../member/memberDetail'

import { FirestoreService } from '../../services/firestoreService'
import { User } from '../../angularModel'
import { Subscription } from 'rxjs'

@Component({
    selector: 'page-memberList',
    templateUrl: 'memberList.html'
})
export class MemberListController {
    memberDetailPage: any = MemberDetailController

    logged: Boolean = false
    usersSubscription: Subscription
    users = new Array<User>()

    constructor(private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged)
                this.usersSubscription = firestoreService.getUsers().subscribe(users => this.users = users)
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
