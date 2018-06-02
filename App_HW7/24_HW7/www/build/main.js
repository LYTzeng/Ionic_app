webpackJsonp([0],{

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/message/contactChat.module": [
		171
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 170;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContacthatModule", function() { return ContacthatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactChat__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContacthatModule = /** @class */ (function () {
    function ContacthatModule() {
    }
    ContacthatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactChat__["a" /* ContactChatController */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactChat__["a" /* ContactChatController */]),
            ],
        })
    ], ContacthatModule);
    return ContacthatModule;
}());

//# sourceMappingURL=contactChat.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactChatController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messageService__ = __webpack_require__(53);
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





var ContactChatController = /** @class */ (function () {
    function ContactChatController(navParams, firestoreService, messageService, angularfireAuth) {
        var _this = this;
        this.navParams = navParams;
        this.firestoreService = firestoreService;
        this.messageService = messageService;
        this.angularfireAuth = angularfireAuth;
        this.chatMessage = "";
        this.chatMessages = [];
        angularfireAuth.authState.subscribe(function (firebaseUser) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (firebaseUser) {
                    this.myAccount = firebaseUser.uid;
                    this.getChatMessages();
                    this.messageSubscription = messageService.getChatMessageByAccount(this.myAccount).subscribe(function (chatMessages) { return __awaiter(_this, void 0, void 0, function () {
                        var _i, chatMessages_1, chatMessage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(chatMessages);
                                    _i = 0, chatMessages_1 = chatMessages;
                                    _a.label = 1;
                                case 1:
                                    if (!(_i < chatMessages_1.length)) return [3 /*break*/, 4];
                                    chatMessage = chatMessages_1[_i];
                                    return [4 /*yield*/, messageService.insertChatMessageToSQLiteDB(chatMessage)];
                                case 2:
                                    _a.sent();
                                    messageService.deleteChatMessage(this.myAccount, chatMessage.id);
                                    _a.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    this.getChatMessages();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    this.senderAccount = this.myAccount;
                }
                return [2 /*return*/];
            });
        }); });
        this.receiverAccount = navParams.data;
        this.chatAdminSubscription = firestoreService.getAdminByAccount(this.receiverAccount).subscribe(function (admin) { return _this.chatAdmin = admin; });
    }
    ContactChatController.prototype.getChatMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.messageService.getChatMessageFromSQLiteDB(this.myAccount, this.receiverAccount)];
                    case 1:
                        _a.chatMessages = _b.sent();
                        this.content.scrollToBottom(500);
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactChatController.prototype.sendChatMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chatMessage;
            return __generator(this, function (_a) {
                if (this.chatMessage !== "") {
                    chatMessage = {
                        sender: this.senderAccount,
                        receiver: this.receiverAccount,
                        message: this.chatMessage
                    };
                    this.chatMessages.push(chatMessage);
                    this.chatMessage = "";
                    this.messageService.publishChatMessage(chatMessage);
                }
                return [2 /*return*/];
            });
        });
    };
    ContactChatController.prototype.ngOnDestroy = function () {
        if (this.chatAdminSubscription)
            this.chatAdminSubscription.unsubscribe();
        if (this.messageSubscription)
            this.messageSubscription.unsubscribe();
        this.chatAdmin = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ContactChatController.prototype, "content", void 0);
    ContactChatController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contactChat',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\message\contactChat.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{chatAdmin?.member.name}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ng-container *ngFor="let chatMessage of chatMessages">\n        <div [align]="(chatMessage.receiver == myAccount)? \'left\' : \'right\'">\n            <div class="message">\n                <div class="content">{{chatMessage.message}}</div>\n                <div class="timestamp">{{chatMessage.timestamp | date:\'yyyy-MM-dd HH:mm\':\'+0800\'}}</div>\n            </div>\n        </div>\n    </ng-container>\n</ion-content>\n\n<ion-footer>\n    <ion-textarea [(ngModel)]="chatMessage" [ngModelOptions]="{standalone: true}" rows="1" maxLength="500" placeholder="請輸入訊息"\n        class="userMessage"></ion-textarea>\n    <ion-icon name="send" class="sendIcon" (click)="sendChatMessage()"></ion-icon>\n</ion-footer>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\message\contactChat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_4__services_messageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ContactChatController);
    return ContactChatController;
}());

//# sourceMappingURL=contactChat.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_memberList__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__performance_performanceList__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_contactList__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(230);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="memberListPage" tabTitle="成員" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="performanceListPage" tabTitle="績效" tabIcon="compass"></ion-tab>\n  <ion-tab [root]="contactListPage" tabTitle="訊息" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="settingPage" tabTitle="設定" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsController);
    return TabsController;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member_memberDetail__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(24);
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
        this.students = new Array();
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged)
                _this.studentsSubscription = firestoreService.getStudents().subscribe(function (students) { return _this.students = students; });
            else
                _this.ngOnDestroy();
        });
    }
    MemberListController.prototype.ngOnDestroy = function () {
        if (this.studentsSubscription)
            this.studentsSubscription.unsubscribe();
        this.students = [];
    };
    MemberListController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memberList',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberList.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>成員管理</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-list inset *ngIf="logged">\n        <ion-item *ngFor="let student of students" [navPush]="memberDetailPage" [navParams]="student.studentId">\n            <ion-avatar item-start>\n                <ion-icon name="contact" color="primary"></ion-icon>\n            </ion-avatar>\n            <h2>{{student.member.name}}</h2>\n            <p>{{student.studentId}}</p>\n            <p>{{student.department}}</p>\n            <ion-note item-end>{{(student.performance.actionState == 1) ? "實習中" : "離線"}}</ion-note>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf="!logged" id="hint">\n        <ion-card>\n            <ion-card-header>\n                <h1>歡迎使用</h1>\n            </ion-card-header>\n            <ion-card-content>\n                <p>《智能學堂》課程管理App</p>\n                <p>請點擊【設定】選單</p>\n                <p>完成登入手續</p>\n                <p>以開啟管理功能</p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberList.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MemberListController);
    return MemberListController;
}());

//# sourceMappingURL=memberList.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(24);
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
    function MemberDetailController(navCtrl, navParams, firestoreService, angularfireAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firestoreService = firestoreService;
        this.angularfireAuth = angularfireAuth;
        this.logged = false;
        this.student = null;
        var studentId = navParams.data;
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged)
                _this.studentSubscription = firestoreService.getStudentByStudentId(studentId).subscribe(function (student) { return _this.student = student; });
            else {
                _this.ngOnDestroy();
                navCtrl.pop();
            }
        });
    }
    MemberDetailController.prototype.ngOnDestroy = function () {
        if (this.studentSubscription)
            this.studentSubscription.unsubscribe();
        this.student = null;
    };
    MemberDetailController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-member-detail',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberDetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>智能學堂</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ng-container *ngIf="student; else loading">\n        <ion-item text-center>\n            <img src="assets/imgs/icon.png">\n        </ion-item>\n        <ion-grid class="profile">\n            <ion-row>\n                <ion-col col-3>姓名</ion-col>\n                <ion-col col-9>{{student.member.name}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-3>學號</ion-col>\n                <ion-col col-9>{{student.studentId}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-3>系級</ion-col>\n                <ion-col col-9>{{student.department}}</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-3>手機</ion-col>\n                <ion-col col-9>\n                    <a [href]="\'tel:\' + student.member.phone">{{student.member.phone}}</a>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-3>Email</ion-col>\n                <ion-col col-9>\n                    <a [href]="\'mailto:\' + student.member.email">{{student.member.email}}</a>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-3>Line</ion-col>\n                <ion-col col-9>{{student.member.lineId}}</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-3>狀態</ion-col>\n                <ion-col col-9 item-end>{{(student.performance.actionState == 1) ? "實習中" : "離線"}}</ion-col>\n            </ion-row>\n        </ion-grid>\n    </ng-container>\n    <ng-template #loading>\n        Loading...\n    </ng-template>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\member\memberDetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MemberDetailController);
    return MemberDetailController;
}());

//# sourceMappingURL=memberDetail.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceListController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__performanceDetail__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(24);
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
        this.students = new Array();
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged)
                _this.studentsSubscription = _this.firestoreService.getStudents().subscribe(function (students) { return _this.students = students; });
            else
                _this.ngOnDestroy();
        });
    }
    PerformanceListController.prototype.ngOnDestroy = function () {
        if (this.studentsSubscription)
            this.studentsSubscription.unsubscribe();
        this.students = [];
    };
    PerformanceListController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-performanceList',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceList.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>績效統計</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n    <ion-list-header *ngIf="logged">\n        <h2 class="left">點閱率</h2>\n        <h2 class="right">排名</h2>\n    </ion-list-header>\n    <ion-list *ngIf="logged">\n        <ion-item *ngFor="let student of students; let index = index" [navPush]="performanceDetailPage" [navParams]="student.studentId">\n            <ion-badge color="danger" item-start>{{index + 1}}</ion-badge>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <h2>{{student.member.name}}</h2>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-7>\n                        <p>出席次數：{{student.performance.attendCount}}</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-7>\n                        <p>繳交次數：{{student.performance.submitCount}}</p>\n                    </ion-col>\n                    <ion-col col-5>\n                        <p>成績：{{student.performance.grade || "尚未評量"}}</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-7>\n                        <p>實習率：{{student.performance.practiceRate}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <ion-note item-end>{{student.performance.practiceRank}}</ion-note>\n        </ion-item>\n    </ion-list>\n    <div *ngIf="!logged" id="hint">\n        <ion-card text-left>\n            <ion-card-header>\n                <h1>歡迎使用</h1>\n            </ion-card-header>\n            <ion-card-content>\n                <p>《智能學堂》課程管理App</p>\n                <p>請點擊【設定】選單</p>\n                <p>完成登入手續</p>\n                <p>以開啟管理功能</p>\n            </ion-card-content>\n        </ion-card>\n\n    </div>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceList.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PerformanceListController);
    return PerformanceListController;
}());

//# sourceMappingURL=performanceList.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceDetailController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(24);
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
        this.student = null;
        this.mode = "view";
        var studentId = navParams.data;
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged) {
                _this.adminSubscription = firestoreService.getAdminByAccount(firebaseUser.uid).subscribe(function (admin) { return _this.admin = admin; });
                _this.studentSubscription = _this.firestoreService.getStudentByStudentId(studentId).subscribe(function (student) { return _this.student = student; });
            }
            else {
                _this.ngOnDestroy();
                navCtrl.pop();
            }
        });
    }
    PerformanceDetailController.prototype.setGrade = function (student, grade) {
        var _this = this;
        this.alertCtrl.create({
            title: "評量",
            message: "確認送出成績？",
            buttons: [
                {
                    text: "送出",
                    handler: function () {
                        student.performance.grade = parseInt(grade);
                        _this.firestoreService.setGrade(student);
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
    PerformanceDetailController.prototype.toggleMode = function (mode) {
        this.mode = mode;
    };
    PerformanceDetailController.prototype.isValid = function (value) {
        var regx = /^[0-9]*$/;
        return regx.test(value);
    };
    PerformanceDetailController.prototype.ngOnDestroy = function () {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe();
        if (this.studentSubscription)
            this.studentSubscription.unsubscribe();
        this.admin = null;
        this.student = null;
    };
    PerformanceDetailController = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-performance-detail',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceDetail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>智能學堂</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n    <ng-container *ngIf="student; else loading">\n        <ion-item text-center>\n            <img src="assets/imgs/icon.png">\n        </ion-item>\n        <ion-grid text-left class="performance">\n            <ion-row>\n                <ion-col col-4>姓名</ion-col>\n                <ion-col col-8>{{student.member.name}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>學號</ion-col>\n                <ion-col col-8>{{student.studentId}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>系級</ion-col>\n                <ion-col col-8>{{student.department}}</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-4>上課次數</ion-col>\n                <ion-col col-8>{{student.performance.attendCount}}次</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-4>報告次數</ion-col>\n                <ion-col col-8>{{student.performance.submitCount}}次</ion-col>\n            </ion-row>\n            <br />\n            <ion-row>\n                <ion-col col-4>實習時數</ion-col>\n                <ion-col col-8>{{student.performance.practiceTotal}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>實習次數</ion-col>\n                <ion-col col-8>{{student.performance.practiceCount}}次</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>實習比例</ion-col>\n                <ion-col col-8>{{student.performance.practiceRate}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-4>實習排名</ion-col>\n                <ion-col col-8>{{student.performance.practiceRank}}</ion-col>\n            </ion-row>\n            <ion-row *ngIf="mode == \'view\'">\n                <ion-col col-4>學期成績</ion-col>\n                <ion-col col-8>{{student.performance.grade || "尚未評量"}}</ion-col>\n            </ion-row>\n            <br />\n        </ion-grid>\n        <button ion-button round *ngIf="mode == \'view\' && (admin)?.role == \'manager\'" (click)="toggleMode(\'modify\')">評量</button>\n\n        <ion-item text-center *ngIf="mode == \'modify\'">\n            <ion-label color="primary">學期成績</ion-label>\n            <ion-input type="number" [(ngModel)]="grade"></ion-input>\n        </ion-item>\n        <button ion-button round *ngIf="mode == \'modify\'" [disabled]="!grade || grade < 0 || grade > 100 || !isValid(grade)" (click)="setGrade(student, grade)">評量</button>\n        <button ion-button round color="danger" *ngIf="mode == \'modify\'" (click)="toggleMode(\'view\')">取消</button>\n    </ng-container>\n    <ng-template #loading>\n        Loading...\n    </ng-template>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\performance\performanceDetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], PerformanceDetailController);
    return PerformanceDetailController;
}());

//# sourceMappingURL=performanceDetail.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactChat__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firestoreService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_messageService__ = __webpack_require__(53);
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
        this.postMessage = "《智能學堂》關心您！";
        angularfireAuth.authState.subscribe(function (firebaseUser) {
            _this.logged = !!firebaseUser;
            if (_this.logged) {
                _this.adminSubscription = firebaseService.getAdminByAccount(firebaseUser.uid).subscribe(function (admin) { return _this.admin = admin; });
                _this.adminsSubscription = firebaseService.getAdmins().subscribe(function (admins) {
                    _this.admins = admins.filter(function (admin) {
                        return admin.account !== firebaseUser.uid && admin.member.fcmToken;
                    });
                });
            }
            else
                _this.ngOnDestroy();
        });
    }
    ContactListController.prototype.contactChat = function (account) {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__contactChat__["a" /* ContactChatController */], account);
    };
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
                        title: "學堂公告",
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
            selector: 'page-contactList',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\message\contactList.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>訊息對話</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n    <ion-list *ngIf="logged">\n        <ion-item *ngFor="let admin of admins" (click)="contactChat(admin.account)">\n            <ion-avatar item-start>\n                <ion-icon name="contact" color="primary"></ion-icon>\n            </ion-avatar>\n            <h2>{{admin.member.name}}</h2>\n            <p>公告次數：{{admin.chatCount?.postCount || 0}}</p>\n            <p>發訊次數：{{admin.chatCount?.sendCount || 0}}</p>\n            <p>收訊次數：{{admin.chatCount?.receiveCount || 0}}</p>\n        </ion-item>\n    </ion-list>\n\n    <div *ngIf="logged && (admin)?.role == \'manager\'">\n        <h5>編輯公告</h5>\n        <ion-textarea rows="3" [(ngModel)]="postMessage" [ngModelOptions]="{standalone: true}" placeholder="請輸入訊息"></ion-textarea>\n        <button ion-button color="secondary" round (click)="sendPostMessage()">發送公告</button>\n    </div>\n\n    <div *ngIf="!logged" id="hint">\n        <ion-card text-left>\n            <ion-card-header>\n                <h1>歡迎使用</h1>\n            </ion-card-header>\n            <ion-card-content>\n                <p>《智能學堂》課程管理App</p>\n                <p>請點擊【設定】選單</p>\n                <p>完成登入手續</p>\n                <p>以開啟管理功能</p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\message\contactList.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_5__services_messageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactListController);
    return ContactListController;
}());

//# sourceMappingURL=contactList.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firestoreService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_messageService__ = __webpack_require__(53);
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
            selector: 'page-setting',template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\pages\setting\setting.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>智能學堂</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding text-center>\n    <img src="assets/imgs/icon.png" id="icon" />\n\n    <ion-list no-lines *ngIf="!logged">\n        <ion-item>\n            <ion-label floating>帳號</ion-label>\n            <ion-input type="email" [(ngModel)]="username"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>密碼</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <div class="errorMessage" *ngIf="!logged">{{errorMessage}}</div>\n    <div padding *ngIf="!logged">\n        <button ion-button color="primary" block (click)="signIn(username, password)">登入</button>\n    </div>\n\n    <ion-list no-lines *ngIf="logged">\n        <ion-item>\n            <ion-avatar>管理者</ion-avatar>\n            <p>{{(admin)?.member.name}}</p>\n        </ion-item>\n        <ion-item>\n            <ion-avatar>權限</ion-avatar>\n            <p>{{((admin)?.role == "manager") ? "經理" : "職員"}}</p>\n        </ion-item>\n        <ion-item>\n            <ion-avatar>電子郵件</ion-avatar>\n            <p>{{(admin)?.member.email}}</p>\n        </ion-item>\n        <ion-item>\n            <ion-avatar>電話</ion-avatar>\n            <p>{{(admin)?.member.phone}}</p>\n        </ion-item>\n        <button ion-button color="danger" block (click)="signOut()">登出</button>\n        <button ion-button color="primary" block (click)="resetPassword()">修改密碼</button>\n        <br />\n\n        <h5>學堂公告</h5>\n        <ion-card>\n            <ion-card-content>{{postMessage?.message}}</ion-card-content>\n        </ion-card>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_4__services_messageService__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingController);
    return SettingController;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirestoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(179);
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
        this.studentCollection = database.collection("Student", function (ref) { return ref.orderBy("performance.practiceRank", "asc"); });
        this.adminCollection = database.collection("Admin");
    }
    FirestoreService.prototype.getStudents = function () {
        return this.studentCollection.valueChanges();
    };
    FirestoreService.prototype.getStudentByStudentId = function (studentId) {
        return this.studentCollection.doc(studentId).valueChanges();
    };
    FirestoreService.prototype.setGrade = function (student) {
        return this.studentCollection.doc(student.studentId).update({
            performance: student.performance
        });
    };
    FirestoreService.prototype.setFcmToken = function (admin) {
        return this.adminCollection.doc(admin.account).update({
            member: admin.member
        });
    };
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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_member_memberList__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_member_memberDetail__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_performance_performanceList__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_performance_performanceDetail__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_message_contactList__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_message_contactChat_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_firestoreService__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_messageService__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__environment__ = __webpack_require__(343);
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
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsController */],
                __WEBPACK_IMPORTED_MODULE_12__pages_member_memberList__["a" /* MemberListController */],
                __WEBPACK_IMPORTED_MODULE_13__pages_member_memberDetail__["a" /* MemberDetailController */],
                __WEBPACK_IMPORTED_MODULE_14__pages_performance_performanceList__["a" /* PerformanceListController */],
                __WEBPACK_IMPORTED_MODULE_15__pages_performance_performanceDetail__["a" /* PerformanceDetailController */],
                __WEBPACK_IMPORTED_MODULE_16__pages_message_contactList__["a" /* ContactListController */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingController */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/message/contactChat.module#ContacthatModule', name: 'ContactChatController', segment: 'contactChat', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_23__environment__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_message_contactChat_module__["ContacthatModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsController */],
                __WEBPACK_IMPORTED_MODULE_12__pages_member_memberList__["a" /* MemberListController */],
                __WEBPACK_IMPORTED_MODULE_13__pages_member_memberDetail__["a" /* MemberDetailController */],
                __WEBPACK_IMPORTED_MODULE_14__pages_performance_performanceList__["a" /* PerformanceListController */],
                __WEBPACK_IMPORTED_MODULE_15__pages_performance_performanceDetail__["a" /* PerformanceDetailController */],
                __WEBPACK_IMPORTED_MODULE_16__pages_message_contactList__["a" /* ContactListController */],
                __WEBPACK_IMPORTED_MODULE_18__pages_setting_setting__["a" /* SettingController */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_19__services_firestoreService__["a" /* FirestoreService */],
                __WEBPACK_IMPORTED_MODULE_20__services_messageService__["a" /* MessageService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_firestoreService__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, firestoreService, angularfireAuth, fcm) {
        var _this = this;
        this.firestoreService = firestoreService;
        this.angularfireAuth = angularfireAuth;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsController */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            angularfireAuth.authState.subscribe(function (firebaseUser) {
                if (firebaseUser) {
                    fcm.subscribeToTopic("postTopic");
                    firestoreService.getAdminByAccount(firebaseUser.uid).subscribe(function (admin) {
                        fcm.getToken().then(function (token) {
                            admin.member.fcmToken = token;
                            firestoreService.setFcmToken(admin);
                        });
                        fcm.onTokenRefresh().subscribe(function (token) {
                            admin.member.fcmToken = token;
                            firestoreService.setFcmToken(admin);
                        });
                    });
                }
                else
                    _this.ngOnDestroy();
            });
        });
    }
    MyApp.prototype.ngOnDestroy = function () {
        if (this.adminSubscription)
            this.adminSubscription.unsubscribe();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\App\HW7\App_HW7\24_HW7\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\App\HW7\App_HW7\24_HW7\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__services_firestoreService__["a" /* FirestoreService */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "<Your Firebase apiKey>",
    authDomain: "<Your Firebase authDomain>",
    databaseURL: "<Your Firebase databaseURL>",
    projectId: "<Your Project ID>",
    storageBucket: "<Your Firebase storageBucket>",
    messagingSenderId: "<YOur Firebase messagingSenderId>"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
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
    function MessageService(database, http, sqlite) {
        this.database = database;
        this.http = http;
        this.sqlite = sqlite;
        this.url = "https://us-central1-apps2018-104820003.cloudfunctions.net";
        this.adminCollection = database.collection("Admin");
        this.getSQLiteDB();
    }
    MessageService.prototype.getLatestPost = function () {
        var postCollection = this.database.collection("Post", function (ref) { return ref.orderBy("timestamp", "desc").limit(1); });
        return postCollection.valueChanges().map(function (messages) { return messages[0]; });
    };
    MessageService.prototype.getChatMessageByAccount = function (account) {
        return this.adminCollection.doc(account).collection("chatMessages").valueChanges(); //valueChanges(["added"])
    };
    MessageService.prototype.deleteChatMessage = function (account, messageId) {
        return this.adminCollection.doc(account).collection("chatMessages").doc(messageId).delete();
    };
    MessageService.prototype.publishChatMessage = function (chatMessage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/publishChatTopic", chatMessage).toPromise()];
            });
        });
    };
    MessageService.prototype.publishPostMessage = function (chatMessage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.http.post(this.url + "/publishPostTopic", chatMessage).toPromise();
                return [2 /*return*/];
            });
        });
    };
    MessageService.prototype.getSQLiteDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sqliteDB;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sqlite.create({
                            name: "MESSAGE.RECORD.db",
                            location: "default"
                        })];
                    case 1:
                        sqliteDB = _a.sent();
                        return [4 /*yield*/, sqliteDB.executeSql("CREATE TABLE IF NOT EXISTS Message (id VARCHAR UNIQUE, sender VARCHAR, receiver VARCHAR, message VARCHAR, timestamp INTEGER)", [])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve(sqliteDB)];
                }
            });
        });
    };
    MessageService.prototype.insertChatMessageToSQLiteDB = function (chatMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var sqliteDB;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSQLiteDB()];
                    case 1:
                        sqliteDB = _a.sent();
                        console.log(JSON.stringify(chatMessage, null, 4));
                        return [2 /*return*/, sqliteDB.executeSql("INSERT OR IGNORE INTO Message(id, sender, receiver, message, timestamp) VALUES(?, ?, ?, ?, ?)", [chatMessage.id, chatMessage.sender, chatMessage.receiver, chatMessage.message, chatMessage.timestamp])];
                }
            });
        });
    };
    MessageService.prototype.getChatMessageFromSQLiteDB = function (myAccount, chatAccount) {
        return __awaiter(this, void 0, void 0, function () {
            var sqliteDB, values, chatMessages, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSQLiteDB()];
                    case 1:
                        sqliteDB = _a.sent();
                        return [4 /*yield*/, sqliteDB.executeSql("SELECT * FROM Message WHERE (sender = ? AND receiver = ?) OR (sender = ? AND receiver = ?) ORDER BY timestamp ASC", [myAccount, chatAccount, chatAccount, myAccount])];
                    case 2:
                        values = _a.sent();
                        chatMessages = new Array();
                        for (index = 0; index < values.rows.length; index++)
                            chatMessages.push(values.rows.item(index));
                        return [2 /*return*/, chatMessages];
                }
            });
        });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=messageService.js.map

/***/ })

},[232]);
//# sourceMappingURL=main.js.map