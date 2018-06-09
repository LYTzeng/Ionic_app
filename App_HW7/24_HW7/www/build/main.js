webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MessageService = /** @class */ (function () {
    function MessageService(database, http /*, private sqlite: SQLite*/) {
        this.database = database;
        this.http = http; /*, private sqlite: SQLite*/
        this.url = "http://us-central1-midterm-104820003.cloudfunctions.net/";
        this.adminCollection = database.collection("Admin");
        //this.getSQLiteDB()
    }
    MessageService.prototype.getLatestPost = function () {
        var postCollection = this.database.collection("Post", function (ref) { return ref.orderBy("timestamp", "desc").limit(1); });
        return postCollection.valueChanges().map(function (messages) { return messages[0]; });
    };
    /*
    getChatMessageByAccount(account: string): Observable<ChatMessage[]> {
        return this.adminCollection.doc(account).collection<ChatMessage>("chatMessages").valueChanges() //valueChanges(["added"])
    }

    deleteChatMessage(account: string, messageId: string): Promise<void> {
        return this.adminCollection.doc(account).collection<ChatMessage>("chatMessages").doc(messageId).delete()
    }

    async publishChatMessage(chatMessage: ChatMessage): Promise<any> {
        return this.http.post(this.url + "/publishChatTopic", chatMessage).toPromise()
    }
    */
    MessageService.prototype.publishPostMessage = function (chatMessage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.http.post(this.url + "/publishPostTopic", chatMessage).toPromise();
                return [2 /*return*/];
            });
        });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] /*, private sqlite: SQLite*/])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=messageService.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_memberList__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__performance_performanceList__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_contactList__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsController = /** @class */ (function () {
    function TabsController() {
        this.memberListPage = __WEBPACK_IMPORTED_MODULE_1__member_memberList__["a" /* MemberListController */];
        this.performanceListPage = __WEBPACK_IMPORTED_MODULE_2__performance_performanceList__["a" /* PerformanceListController */];
        this.contactListPage = __WEBPACK_IMPORTED_MODULE_3__message_contactList__["a" /* ContactListController */];
        this.settingPage = __WEBPACK_IMPORTED_MODULE_4__setting_setting__["a" /* SettingController */];
    }
    TabsController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="memberListPage" tabTitle="成員" tabIcon="ios-contacts"></ion-tab>\n  <ion-tab [root]="performanceListPage" tabTitle="績效" tabIcon="ios-pulse"></ion-tab>\n  <ion-tab [root]="contactListPage" tabTitle="公告" tabIcon="ios-megaphone"></ion-tab>\n  <ion-tab [root]="settingPage" tabTitle="設定" tabIcon="ios-settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsController);
    return TabsController;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_memberDetail__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberListController = /** @class */ (function () {
    function MemberListController(firestoreService, angularfireAuth) {
        var _this = this;
        this.firestoreService = firestoreService;
        this.angularfireAuth = angularfireAuth;
        this.memberDetailPage = __WEBPACK_IMPORTED_MODULE_2__member_memberDetail__["a" /* MemberDetailController */];
        this.logged = false;
        this.users = new Array();
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged)
                _this.usersSubscription = firestoreService.getUsers().subscribe(function (users) { return _this.users = users; });
            else
                _this.ngOnDestroy();
        });
    }
    MemberListController.prototype.ngOnDestroy = function () {
        if (this.usersSubscription)
            this.usersSubscription.unsubscribe();
        this.users = [];
    };
    MemberListController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memberList',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberList.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>成員管理</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list inset *ngIf="logged">\n        <ion-item *ngFor="let user of users" [navPush]="memberDetailPage" [navParams]="user.lineId">\n            <ion-avatar item-start>\n                <ion-icon name="contact" color="primary"></ion-icon>\n            </ion-avatar>\n            <h2>{{user.member.name}}</h2>\n            <p>{{user.member.email}}</p>\n            <p>{{user.lineId}}</p>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf="!logged" id="hint" text-center>\n        <ion-card>\n            <ion-card-header>\n                <img src="assets/imgs/icon.png" style="width: 50%; display: block; margin-left: auto; margin-right: auto"/>\n                <h1>Welcome</h1>\n            </ion-card-header>\n            <ion-card-content>\n                <p>智能跑步幫手 管理App</p>\n                <p>請點擊【設定】選單</p>\n                <p>完成登入手續</p>\n                <p>以開啟管理功能</p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MemberListController);
    return MemberListController;
}());

//# sourceMappingURL=memberList.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberDetailController = /** @class */ (function () {
    function MemberDetailController(navCtrl, navParams, alertCtrl, firestoreService, angularfireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.firestoreService = firestoreService;
        this.angularfireAuth = angularfireAuth;
        this.logged = false;
        this.admin = null;
        this.user = null;
        this.mode = "view"; // 一般模式view或是更改模式modify
        var lineId = navParams.data;
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged) {
                _this.adminSubscription = firestoreService.getAdminByAccount(firebaseUser.uid).subscribe(function (admin) { return _this.admin = admin; });
                _this.userSubscription = firestoreService.getUserByLineId(lineId).subscribe(function (user) { return _this.user = user; });
            }
            else {
                _this.ngOnDestroy();
                navCtrl.pop();
            }
        });
    }
    MemberDetailController.prototype.changeProfile = function (user, name, email) {
        var _this = this;
        this.alertCtrl.create({
            title: "變更資料",
            message: "確認送出？",
            buttons: [
                {
                    text: "送出",
                    handler: function () {
                        if (name != undefined)
                            user.member.name = name;
                        if (email != undefined)
                            user.member.email = email;
                        _this.firestoreService.changeProfile(user);
                        _this.toggleMode("view");
                    }
                },
                {
                    text: "取消",
                    role: "cancel",
                    handler: function () {
                        _this.toggleMode("view");
                    }
                }
            ]
        }).present();
    };
    MemberDetailController.prototype.toggleMode = function (mode) {
        this.mode = mode;
    };
    MemberDetailController.prototype.ngOnDestroy = function () {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe();
        if (this.userSubscription)
            this.userSubscription.unsubscribe();
        this.admin = null;
        this.user = null;
    };
    MemberDetailController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-detail',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberDetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>智能學堂</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ng-container *ngIf="user; else loading">\n        <ion-item text-center>\n            <img src="assets/imgs/icon.png">\n        </ion-item>\n        <ion-grid class="profile">\n            <ion-row *ngIf="mode == \'view\'">\n                <ion-col col-3>姓名</ion-col>\n                <ion-col col-9>{{user.member.name}}</ion-col>\n            </ion-row>\n            \n            <ion-item text-left *ngIf="mode == \'modify\'">\n                <ion-label color="primary">姓名</ion-label>\n                <ion-input type="string" [(ngModel)]="name" [placeholder]="user.member.name"></ion-input>\n            </ion-item>\n           \n\n            <ion-row *ngIf="mode == \'view\'">\n                <ion-col col-3>Email</ion-col>\n                <ion-col col-9>\n                    <a [href]="\'mailto:\' + user.member.email">{{user.member.email}}</a>\n                </ion-col>\n            </ion-row>\n\n            <ion-item text-left *ngIf="mode == \'modify\'">\n                    <ion-label color="primary">Email</ion-label>\n                    <ion-input type="string" [(ngModel)]="email" [placeholder]="user.member.email"></ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-col col-3>Line</ion-col>\n                <ion-col col-9>{{user.member.lineId}}</ion-col>\n            </ion-row>\n            <br />\n        </ion-grid>\n\n        <button ion-button round *ngIf="mode == \'view\' && (admin)?.role == \'manager\'" (click)="toggleMode(\'modify\')">更改資料</button>\n        <button ion-button round *ngIf="mode == \'modify\'" (click)="changeProfile(user, name, email)">更改</button>\n        <button ion-button round outline color="dark" *ngIf="mode == \'modify\'" (click)="toggleMode(\'view\')">取消</button>\n    </ng-container>\n\n    <ng-template #loading>\n        Loading...\n    </ng-template>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberDetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MemberDetailController);
    return MemberDetailController;
}());

//# sourceMappingURL=memberDetail.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceListController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__performanceDetail__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerformanceListController = /** @class */ (function () {
    function PerformanceListController(firestoreService, angularfireAuth) {
        var _this = this;
        this.firestoreService = firestoreService;
        this.angularfireAuth = angularfireAuth;
        this.performanceDetailPage = __WEBPACK_IMPORTED_MODULE_2__performanceDetail__["a" /* PerformanceDetailController */];
        this.logged = false;
        this.users = new Array();
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged)
                _this.usersSubscription = _this.firestoreService.getUsers().subscribe(function (users) { return _this.users = users; });
            else
                _this.ngOnDestroy();
        });
    }
    PerformanceListController.prototype.ngOnDestroy = function () {
        if (this.usersSubscription)
            this.usersSubscription.unsubscribe();
        this.users = [];
    };
    PerformanceListController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-performanceList',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceList.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>績效統計</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n    <ion-list-header *ngIf="logged">\n        <h2 class="left">排名</h2>\n    </ion-list-header>\n    <ion-list *ngIf="logged">\n        <ion-item *ngFor="let user of users" [navPush]="performanceDetailPage" [navParams]="user.lineId">\n            <ion-badge color="danger" item-start>{{user.performance.rank}}</ion-badge>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <h2>{{user.member.name}}</h2>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-7>\n                        <p>跑步次數：{{user.performance.runningCount}} 次</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-7>\n                        <p>里程：{{user.performance.totalRunningDist/1000}} km</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n    </ion-list>\n    <div *ngIf="!logged" id="hint" text-center>\n            <ion-card>\n                <ion-card-header>\n                    <img src="assets/imgs/icon.png" style="width: 50%; display: block; margin-left: auto; margin-right: auto"/>\n                    <h1>Welcome</h1>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>智能跑步幫手 管理App</p>\n                    <p>請點擊【設定】選單</p>\n                    <p>完成登入手續</p>\n                    <p>以開啟管理功能</p>\n                </ion-card-content>\n            </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceList.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PerformanceListController);
    return PerformanceListController;
}());

//# sourceMappingURL=performanceList.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceDetailController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerformanceDetailController = /** @class */ (function () {
    function PerformanceDetailController(navCtrl, navParams, alertCtrl, firestoreService, angularfireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.firestoreService = firestoreService;
        this.angularfireAuth = angularfireAuth;
        this.logged = false;
        this.admin = null;
        this.user = null;
        var lineId = navParams.data;
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged) {
                _this.adminSubscription = firestoreService.getAdminByAccount(firebaseUser.uid).subscribe(function (admin) { return _this.admin = admin; });
                _this.userSubscription = _this.firestoreService.getUserByLineId(lineId).subscribe(function (user) { return _this.user = user; });
            }
            else {
                _this.ngOnDestroy();
                navCtrl.pop();
            }
        });
    }
    PerformanceDetailController.prototype.isValid = function (value) {
        var regx = /^[0-9]*$/;
        return regx.test(value);
    };
    PerformanceDetailController.prototype.ngOnDestroy = function () {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe();
        if (this.userSubscription)
            this.userSubscription.unsubscribe();
        this.admin = null;
        this.user = null;
    };
    PerformanceDetailController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-performance-detail',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceDetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>智能學堂</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n    <ng-container *ngIf="user; else loading">\n        <ion-item text-center>\n            <img src="assets/imgs/icon.png">\n        </ion-item>\n        <ion-grid text-left class="performance">\n            <ion-row>\n                <ion-col col-4>姓名</ion-col>\n                <ion-col col-8>{{user.member.name}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>信箱</ion-col>\n                <ion-col col-8>{{user.member.email}}</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-4>跑步次數</ion-col>\n                <ion-col col-8>{{user.performance.runningCount}}次</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-4>總跑步時數</ion-col>\n                <ion-col col-8>{{user.performance.totalRunningTime}}</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-4>總跑步里程</ion-col>\n                <ion-col col-8>{{user.performance.totalRunningDist}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>排名</ion-col>\n                <ion-col col-8>{{user.performance.rank}}</ion-col>\n            </ion-row>\n            <br />\n        </ion-grid>\n        \n    </ng-container>\n    <ng-template #loading>\n        Loading...\n    </ng-template>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceDetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PerformanceDetailController);
    return PerformanceDetailController;
}());

//# sourceMappingURL=performanceDetail.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messageService__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ContactListController = /** @class */ (function () {
    function ContactListController(appCtrl, firebaseService, messageService, angularfireAuth, alertCtrl) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.firebaseService = firebaseService;
        this.messageService = messageService;
        this.angularfireAuth = angularfireAuth;
        this.alertCtrl = alertCtrl;
        this.logged = false;
        this.admin = null;
        this.admins = [];
        this.postMessage = "您好！";
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged) {
                _this.adminSubscription = firebaseService.getAdminByAccount(firebaseUser.uid).subscribe(function (admin) { return _this.admin = admin; });
                _this.adminsSubscription = firebaseService.getAdmins().subscribe(function (admins) {
                    _this.admins = admins.filter(function (admin) {
                        return admin.account !== firebaseUser.uid; //&& admin.member.fcmToken
                    });
                });
            }
            else
                _this.ngOnDestroy();
        });
    }
    ContactListController.prototype.sendPostMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var postMessage_1;
            return __generator(this, function (_a) {
                if (this.postMessage !== "") {
                    postMessage_1 = {
                        sender: this.admin.account,
                        message: this.postMessage
                    };
                    this.messageService.publishPostMessage(postMessage_1);
                    this.postMessage = "";
                    this.alertCtrl.create({
                        title: "公告",
                        message: "公告已發送",
                        buttons: [{ text: "確認" }]
                    }).present();
                }
                return [2 /*return*/];
            });
        });
    };
    ContactListController.prototype.ngOnDestroy = function () {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe();
        this.admin = null;
    };
    ContactListController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactList',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\message\contactList.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>發送公告</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n    <ion-list *ngIf="logged">\n        <ion-item *ngFor="let admin of admins">\n            <ion-avatar item-start>\n                <ion-icon name="contact" color="primary"></ion-icon>\n            </ion-avatar>\n            <h2>{{admin.member.name}}</h2>\n            <p>公告次數：{{admin.chatCount?.postCount || 0}}</p>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf="logged && (admin)?.role == \'manager\'">\n        <ion-textarea rows="2" [(ngModel)]="postMessage" [ngModelOptions]="{standalone: true}" placeholder="請輸入訊息"></ion-textarea>\n        <ion-icon name="send" (click)="sendPostMessage()" style="color:firebrick"></ion-icon>\n    </div>\n\n    <div *ngIf="logged && (admin)?.role == \'staff\'" text-left>\n                    <ion-card>\n                        <ion-card-header>\n                            <ion-icon name="warning" (click)="sendPostMessage()" style="color:firebrick"><h2 style="color:firebrick">權限不足</h2></ion-icon>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <p>您目前只是staff</p>\n                            <p>要升值/加薪</p>\n                            <p>請找manager</p>\n                        </ion-card-content>\n                    </ion-card>\n    </div>\n\n    <div *ngIf="!logged" id="hint" text-center>\n            <ion-card>\n                <ion-card-header>\n                    <img src="assets/imgs/icon.png" style="width: 50%; display: block; margin-left: auto; margin-right: auto"/>\n                    <h1>Welcome</h1>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>智能跑步幫手 管理App</p>\n                    <p>請點擊【設定】選單</p>\n                    <p>完成登入手續</p>\n                    <p>以開啟管理功能</p>\n                </ion-card-content>\n            </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\message\contactList.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_4__services_messageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactListController);
    return ContactListController;
}());

//# sourceMappingURL=contactList.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messageService__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SettingController = /** @class */ (function () {
    function SettingController(firebaseService, messageService, angularfireAuth, toastCtrl, alertCtrl) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.messageService = messageService;
        this.angularfireAuth = angularfireAuth;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.logged = false;
        this.admin = null;
        this.postMessage = null;
        this.errorMessage = "";
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged) {
                _this.adminSubscription = firebaseService.getAdminByAccount(firebaseUser.uid).subscribe(function (admin) { return _this.admin = admin; });
                _this.postSubscription = messageService.getLatestPost().subscribe(function (postMessage) { return _this.postMessage = postMessage; });
            }
            else
                _this.ngOnDestroy();
        });
    }
    SettingController.prototype.signIn = function (account, password) {
        var _this = this;
        this.angularfireAuth.auth.signInWithEmailAndPassword(account, password)
            .then(function () { return _this.errorMessage = ""; })
            .catch(function () {
            _this.errorMessage = "密碼不正確，請重新登入";
        });
    };
    SettingController.prototype.resetPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.angularfireAuth.auth.sendPasswordResetEmail(this.admin.account)];
                    case 1:
                        _a.sent();
                        this.alertCtrl.create({
                            title: "修改密碼",
                            message: "重設密碼信件，已發送至信箱，請查看",
                            buttons: [{ text: "確認" }]
                        }).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingController.prototype.signOut = function () {
        this.angularfireAuth.auth.signOut();
    };
    SettingController.prototype.ngOnDestroy = function () {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe();
        if (this.postSubscription)
            this.postSubscription.unsubscribe();
        this.admin = null;
        this.postMessage = null;
        this.errorMessage = "";
    };
    SettingController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\setting\setting.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>管理員登入</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n    <img src="assets/imgs/icon.png" id="icon" />\n\n    <ion-list no-lines *ngIf="!logged">\n        <ion-item>\n            <ion-label floating>帳號</ion-label>\n            <ion-input type="email" [(ngModel)]="username"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>密碼</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div class="errorMessage" *ngIf="!logged">{{errorMessage}}</div>\n    <div padding *ngIf="!logged">\n        <button ion-button color="primary" block (click)="signIn(username, password)">登入</button>\n    </div>\n\n    <ion-list no-lines *ngIf="logged">\n        <ion-item>\n            <ion-avatar>管理者</ion-avatar>\n            <p>{{(admin)?.member.name}}</p>\n        </ion-item>\n        <ion-item>\n            <ion-avatar>權限</ion-avatar>\n            <p>{{((admin)?.role == "manager") ? "manager" : "staff"}}</p>\n        </ion-item>\n        <ion-item>\n            <ion-avatar>電子郵件</ion-avatar>\n            <p>{{(admin)?.member.email}}</p>\n        </ion-item>\n        <button ion-button round color="danger" block (click)="signOut()">登出</button>\n        <button ion-button round color="secondary" block (click)="resetPassword()">修改密碼</button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_4__services_messageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingController);
    return SettingController;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_member_memberList__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_member_memberDetail__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_performance_performanceList__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_performance_performanceDetail__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_message_contactList__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_firestoreService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_messageService__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__environment__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsController */],
                __WEBPACK_IMPORTED_MODULE_10__pages_member_memberList__["a" /* MemberListController */],
                __WEBPACK_IMPORTED_MODULE_11__pages_member_memberDetail__["a" /* MemberDetailController */],
                __WEBPACK_IMPORTED_MODULE_12__pages_performance_performanceList__["a" /* PerformanceListController */],
                __WEBPACK_IMPORTED_MODULE_13__pages_performance_performanceDetail__["a" /* PerformanceDetailController */],
                __WEBPACK_IMPORTED_MODULE_14__pages_message_contactList__["a" /* ContactListController */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingController */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_20__environment__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsController */],
                __WEBPACK_IMPORTED_MODULE_10__pages_member_memberList__["a" /* MemberListController */],
                __WEBPACK_IMPORTED_MODULE_11__pages_member_memberDetail__["a" /* MemberDetailController */],
                __WEBPACK_IMPORTED_MODULE_12__pages_performance_performanceList__["a" /* PerformanceListController */],
                __WEBPACK_IMPORTED_MODULE_13__pages_performance_performanceDetail__["a" /* PerformanceDetailController */],
                __WEBPACK_IMPORTED_MODULE_14__pages_message_contactList__["a" /* ContactListController */],
                __WEBPACK_IMPORTED_MODULE_15__pages_setting_setting__["a" /* SettingController */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_16__services_firestoreService__["a" /* FirestoreService */],
                __WEBPACK_IMPORTED_MODULE_17__services_messageService__["a" /* MessageService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirestoreService = /** @class */ (function () {
    function FirestoreService(database) {
        this.database = database;
        this.userCollection = this.database.collection("User", function (ref) { return ref.orderBy("performance.rank", "asc"); });
        this.adminCollection = database.collection("Admin");
    }
    FirestoreService.prototype.getUsers = function () {
        return this.userCollection.valueChanges();
    };
    FirestoreService.prototype.getUserByLineId = function (lineId) {
        return this.userCollection.doc(lineId).valueChanges();
    };
    FirestoreService.prototype.changeProfile = function (user) {
        return this.userCollection.doc(user.lineId).update({
            member: user.member
        });
    };
    /*
    setFcmToken(admin: Admin): Promise<void> {
        return this.adminCollection.doc<Admin>(admin.account).update({
            member: admin.member
        })
    }*/
    FirestoreService.prototype.getAdmins = function () {
        return this.adminCollection.valueChanges();
    };
    FirestoreService.prototype.getAdminByAccount = function (account) {
        return this.adminCollection.doc(account).valueChanges();
    };
    FirestoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirestoreService);
    return FirestoreService;
}());

//# sourceMappingURL=firestoreService.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_firestoreService__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { FCM } from '@ionic-native/fcm'

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, firestoreService, angularfireAuth) {
        this.firestoreService = firestoreService;
        this.angularfireAuth = angularfireAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsController */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnDestroy = function () {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/*
export const firebaseConfig = {
    apiKey: "AIzaSyC0WHsCyjBxLPH7-HzCQOVs7KOJUQI8XCo",
    authDomain: "apps2018-104820003.firebaseapp.com",
    databaseURL: "https://apps2018-104820003.firebaseio.com",
    projectId: "apps2018-104820003",
    storageBucket: "apps2018-104820003.appspot.com",
    messagingSenderId: "44272689722"
}
*/
var firebaseConfig = {
    apiKey: "AIzaSyBvAieUv5z-fh6VDVyoT-kCzX3rINBVMEk",
    authDomain: "midterm-104820003.firebaseapp.com",
    databaseURL: "https://midterm-104820003.firebaseio.com",
    projectId: "midterm-104820003",
    storageBucket: "midterm-104820003.appspot.com",
    messagingSenderId: "583555422665"
};
//# sourceMappingURL=environment.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map