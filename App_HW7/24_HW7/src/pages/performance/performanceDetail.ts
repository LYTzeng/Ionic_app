import { Component, OnDestroy } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { Subscription } from 'rxjs'
import { AngularFireAuth } from 'angularfire2/auth'

import { FirestoreService } from '../../services/firestoreService'
import { User, Admin } from '../../angularModel'

@Component({
    selector: 'page-performance-detail',
    templateUrl: 'performanceDetail.html',
})
export class PerformanceDetailController implements OnDestroy{
    logged: Boolean = false

    adminSubscription: Subscription
    userSubscription: Subscription
    admin: Admin = null
    user: User = null

    constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        const lineId = navParams.data as string
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged) {
                this.adminSubscription = firestoreService.getAdminByAccount(firebaseUser.uid).subscribe(admin => this.admin = admin)
                this.userSubscription = this.firestoreService.getUserByLineId(lineId).subscribe(user => this.user = user)
            } else {
                this.ngOnDestroy()
                navCtrl.pop()
            }
        })
    }

    isValid(value: string): Boolean {
        const regx = /^[0-9]*$/
        return regx.test(value)
    }

    ngOnDestroy() {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe()
        if (this.userSubscription)
            this.userSubscription.unsubscribe()
        this.admin = null
        this.user = null
    }
}
