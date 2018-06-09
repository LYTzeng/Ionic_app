import { Component, OnDestroy } from '@angular/core'
import { NavController, NavParams, AlertController } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'

import { FirestoreService } from '../../services/firestoreService'
import { User, Admin } from '../../angularModel'
import { Subscription } from 'rxjs'

@Component({
    selector: 'page-member-detail',
    templateUrl: 'memberDetail.html',
})
export class MemberDetailController implements OnDestroy{
    logged: Boolean = false
    adminSubscription: Subscription
    userSubscription: Subscription
    admin: Admin = null
    user: User = null

    mode: string = "view" // 一般模式view或是更改模式modify

    constructor(private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        const lineId = navParams.data as string
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged) {
                this.adminSubscription = firestoreService.getAdminByAccount(firebaseUser.uid).subscribe(admin => this.admin = admin)
                this.userSubscription = firestoreService.getUserByLineId(lineId).subscribe(user => this.user = user)
            }
            else {
                this.ngOnDestroy()
                navCtrl.pop()
            }
        })
    }

    changeProfile(user: User, name: string, email: string) {
        this.alertCtrl.create({
            title: "變更資料",
            message: "確認送出？",
            buttons: [
                {
                    text: "送出",
                    handler: () => {
                        if (name != undefined)
                            user.member.name = name
                        if (email != undefined)
                            user.member.email = email
                        this.firestoreService.changeProfile(user)
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

    ngOnDestroy() {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe()
        if (this.userSubscription)
            this.userSubscription.unsubscribe()
        this.admin = null
        this.user = null
    }
}
