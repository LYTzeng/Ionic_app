import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/toPromise'

import { User, Admin } from '../angularModel'

@Injectable()
export class FirestoreService {
    private userCollection: AngularFirestoreCollection<User>
    private adminCollection: AngularFirestoreCollection<Admin>

    constructor(private database: AngularFirestore) {
        this.userCollection = this.database.collection<User>("User", ref => ref.orderBy("performance.rank", "asc"))
        this.adminCollection = database.collection<Admin>("Admin")
    }

    getUsers(): Observable<User[]> {
        return this.userCollection.valueChanges()
    }

    getUserByLineId(lineId: string): Observable<User> {
        return this.userCollection.doc<User>(lineId).valueChanges()
    }

    changeProfile(user: User): Promise<void> {
        return this.userCollection.doc<User>(user.lineId).update({
            member: user.member
        })
    }
    
    /*
    setFcmToken(admin: Admin): Promise<void> {
        return this.adminCollection.doc<Admin>(admin.account).update({
            member: admin.member
        })
    }*/

    getAdmins(): Observable<Admin[]> {
        return this.adminCollection.valueChanges()
    }

    getAdminByAccount(account: string): Observable<Admin> {
        return this.adminCollection.doc<Admin>(account).valueChanges()
    }

}