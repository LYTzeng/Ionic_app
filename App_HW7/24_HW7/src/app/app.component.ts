import { Component, OnDestroy } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { TabsController } from '../pages/tabs/tabs'

import { AngularFireAuth } from 'angularfire2/auth'
//import { FCM } from '@ionic-native/fcm'

import { FirestoreService } from '../services/firestoreService'
import { Subscription } from 'rxjs'


@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnDestroy{
    rootPage: any = TabsController

    adminSubscription: Subscription

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private firestoreService: FirestoreService, private angularfireAuth: AngularFireAuth) {
        platform.ready().then(() => {
            statusBar.styleDefault()
            splashScreen.hide()
        });
    }

    ngOnDestroy() {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe()
    }
}
