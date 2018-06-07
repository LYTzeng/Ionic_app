import { Component, OnDestroy } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'

import { FirestoreService } from '../../services/firestoreService'
import { User } from '../../angularModel'
import { Subscription } from 'rxjs'

@Component({
    selector: 'page-member-detail',
    templateUrl: 'memberDetail.html',
})
export class MemberDetailController implements OnDestroy{
    logged: Boolean = false
    userSubscription: Subscription
    user: User = null

    constructor(private navCtrl: NavController, private navParams: NavParams, private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        const userId = navParams.data as string
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged)
                this.userSubscription = firestoreService.getUserByLineId(userId).subscribe(user => this.user = user)
            else {
                this.ngOnDestroy()
                navCtrl.pop()
            }
        })
    }

    ngOnDestroy() {
        if (this.userSubscription)
            this.userSubscription.unsubscribe()
        this.user = null
    }
}
