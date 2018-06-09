import { Component, OnDestroy } from '@angular/core'
import { AlertController } from 'ionic-angular'
import { App } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'
import * as uuid from 'uuid'

import { FirestoreService } from '../../services/firestoreService'
import { MessageService } from '../../services/messageService'

import { Admin, ChatMessage } from '../../angularModel'
import { Subscription } from 'rxjs'

@Component({
    selector: 'page-contactList',
    templateUrl: 'contactList.html',
})
export class ContactListController implements OnDestroy {
    logged: Boolean = false
    adminSubscription: Subscription
    admin: Admin = null

    adminsSubscription: Subscription
    admins: Admin[] = []

    postMessage: string = "您好！"

    constructor(private appCtrl: App, private firebaseService: FirestoreService, private messageService: MessageService, private angularfireAuth: AngularFireAuth, private alertCtrl: AlertController) {
        angularfireAuth.authState.subscribe(firebaseUser => {
            this.logged = !!firebaseUser
            if (this.logged) {
                this.adminSubscription = firebaseService.getAdminByAccount(firebaseUser.uid).subscribe(admin => this.admin = admin)
                this.adminsSubscription = firebaseService.getAdmins().subscribe(admins => {
                    this.admins = admins.filter(admin => {
                        return admin.account !== firebaseUser.uid //&& admin.member.fcmToken
                    })
                })
            } else
                this.ngOnDestroy()
        })
    }

    async sendPostMessage() {
        if (this.postMessage !== "") {
            const postMessage = {
                sender: this.admin.account,
                message: this.postMessage
            }
            this.messageService.publishPostMessage(postMessage)
            this.postMessage = ""
            this.alertCtrl.create({
                title: "公告",
                message: "公告已發送",
                buttons: [{ text: "確認" }]
            }).present()
        }
    }

    ngOnDestroy() {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe()
        this.admin = null
    }

}
