webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Portfolio" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Portfolio\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-item>\n          <h2>NATIVE APP</h2>\n          <p>Sep 11, 2018</p>\n        </ion-item>      \n        <img src="./assets/imgs/pkrishi.png">      \n        <ion-card-content>\n          <p>Local application for organic farming all over the state currently opens. Big thing is that they are huge massive group of people.</p>\n        </ion-card-content>      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>45 Likes</div>\n            </button>\n          </ion-col>\n        </ion-row>          \n      </ion-card>\n      \n    <ion-card>\n        <ion-item>\n          <h2>Illustration</h2>\n          <p>November 5, 2017</p>\n        </ion-item>      \n        <img src="./assets/imgs/leo2x.jpg">      \n        <ion-card-content>\n          <p>A quick illustration of Leonardo Wilhelm DiCaprio, who is an American actor, film producer, and environmental activist only using Illustrator pencil and pen tool.</p>\n        </ion-card-content>      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>9 Likes</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n      <ion-card>\n          <ion-item>\n            <h2>LOGO</h2>\n            <p>April 7, 2016</p>\n          </ion-item>      \n          <img src="./assets/imgs/cccoffee.svg">      \n          <ion-card-content>\n            <p>The name of the company CC COFFEE where CC represent one + one person, may be male or female. The logo should be good for embroidery in the uniform used by cafe staff. This is the theme actually, a theme restaurant of South Africa, where friends/love couple meet. People love their touchy-ness like very smooth flavour of coffee mixed with daily life.</p>\n          </ion-card-content>      \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-start clear small>\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>97 Likes</div>\n              </button>\n            </ion-col>\n          </ion-row>\n        \n        </ion-card>\n\n        <ion-card>\n            <ion-item>\n              <h2>CARTOON</h2>\n              <p>Jan 2, 2012</p>\n            </ion-item>      \n            <img src="./assets/imgs/cartoons.jpg">      \n            <ion-card-content>\n              <p>Every industries have own pros cons. Once people were must passionate to join for IT, so how IT people react on this is common.</p>\n            </ion-card-content>      \n            <ion-row>\n              <ion-col>\n                <button ion-button icon-start clear small>\n                  <ion-icon name="thumbs-up"></ion-icon>\n                  <div>26Likes</div>\n                </button>\n              </ion-col>\n            </ion-row>          \n          </ion-card>\n\n          <ion-card>\n              <ion-item>\n                <h2>T-SHIRT DESIGN</h2>\n                <p>Oct 5, 2010</p>\n              </ion-item>      \n              <img src="./assets/imgs/mtshirt.jpg">      \n              <ion-card-content>\n                <p>An Indian client wants to greet her four years cousin the best way as can. Personalised service for your own brand.</p>\n              </ion-card-content>      \n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>18 Likes</div>\n                  </button>\n                </ion-col>\n              </ion-row>          \n            </ion-card>\n\n            <ion-card>\n              <ion-item>\n                <h2>WEBSITE</h2>\n                <p>May 5, 2008</p>\n              </ion-item>      \n              <img src="./assets/imgs/chocolate.jpg">      \n              <ion-card-content>\n                <p>Corne Port Royal is a name of a choclate business start from Paris. They have 9 stores in Europe and very famous for their delicious product.</p>\n              </ion-card-content>      \n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>18 Likes</div>\n                  </button>\n                </ion-col>\n              </ion-row>          \n            </ion-card>\n\n            \n\n</ion-content>\n'/*ion-inline-end:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, sms) {
        this.navCtrl = navCtrl;
        this.sms = sms;
    }
    ContactPage.prototype.senSMS = function (x, y) {
        var options;
        this.objValue = {
            email: x.value,
            message: y.value
        };
        console.log(this.objValue);
		var str = "Message received from - " + x.value + " & message is - " + y.value;
        this.sms.send('919875570749', str, options);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar><ion-title>Contact</ion-title></ion-navbar>\n</ion-header>\n<ion-content class="customlist">\n    <ion-card>\n        <img src="./assets/imgs/contact.jpg" alt="Rgcreativelab" />\n        <ion-card-content padding>\n              <ion-list>\n\n                <ion-item>\n                  <ion-input type="email" name="email" ngModel #email="ngModel" placeholder="Enter your email" required></ion-input>\n                </ion-item>\n              \n                <ion-item>\n                  <ion-textarea name="message" ngModel #message="ngModel" placeholder="Enter your message" required></ion-textarea>\n                </ion-item>\n              \n              </ion-list>\n              \n              <div padding>\n                <button block color="primary" (click)="senSMS(email, message)" ion-button>Send SMS for help!</button>\n              </div>\n          </ion-card-content>\n      </ion-card>\n\n    <ion-list>\n      <ion-list-header>WEBSITE</ion-list-header>\n        <ion-item>https://rgcreativelab.com/</ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>OLD MANS WALL</ion-list-header>\n          <ion-item>https://www.coroflot.com/w3earth</ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>DESIGNER CHOICE</ion-list-header>\n          <ion-item>https://www.behance.net/gallery/51320227/Dashboard-page</ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>PROFESSIONAL DESTINATION</ion-list-header>\n          <ion-item>https://www.linkedin.com/in/rajib-ganguly-0a3031a/</ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>SOCIAL MEDIA</ion-list-header>\n          <ion-item>https://www.facebook.com/Designer.RajibGanguly</ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>MY BLOG</ion-list-header>\n          <ion-item>https://w3earth.wordpress.com/</ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header>FOUNDER</ion-list-header>\n          <ion-item>https://www.linkedin.com/company/w3earth/</ion-item>\n    </ion-list>   \n</ion-content>\n'/*ion-inline-end:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>HOME</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <img src="./assets/imgs/logo.png" alt="Rgcreativelab" />\n        <ion-card-content>\n          <ion-card-title class="heading">RGE</ion-card-title>\n          <p text-center>RGE is a UX &amp; UI Designer and Front End Developer with Art Collage Background. Main focus is working for different verity of customers for their business or personal. I belief my dedication, honesty and creative approach - out of box thinking add a glory feather to my clients. I have almost 16+ years of experience in arts, sketching and paintings along with.</p>\n</ion-card-content>\n      </ion-card>\n\n\n      <ion-card>\n          <img src="./assets/imgs/beleif.jpg" alt="Rgcreative lab" />\n          <ion-card-content>\n            <ion-card-title class="heading">MY BELIEF</ion-card-title>\n            <p text-center>As per me, design is the continuous approach with data driven process. <strong>DESIGN = VISUAL + FUNCTIONAL</strong>. I found it is \n              difficult to explained, but requirement gives me the scope to think maximum times. You may good developer if you design it - I belief. \n              Because when you design, you know every pros and cons of the application.</p>            \n            \n          </ion-card-content>\n        </ion-card>\n\n\n\n    <ion-card>\n        <img src="./assets/imgs/project.jpg" alt="Rgcreative lab" />\n        <ion-card-content>\n          <ion-card-title class="heading">PROJECTS</ion-card-title>            \n            <p text-center>I got a chance to work on their project and learn with many blue chip corporates over last 12years, like Microsoft, Cisco, Pearson, \n              McGrawHill, Coldwell banker, NAAM, Hilton Hotels, inkling, Deloitte, American Express, IEEE, Wolters Kluwer, Integrys, Liguori, \n              Blue Cross Blue Shield, ELSEVIER, HSBC, BCA research, Barclays, RWA and many more. Some Indian clients also added in the list like, \n              RWtake, Chetty`s Corner, iCare Intelligence, Brainwizz and many. Lucky to get a chance to be a part of winning team who holds \n              Brandon Hall Group Excellence in Learning Awards, EContent 100, Top Training Companies etc.</p>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n          <img src="./assets/imgs/technology.jpg" alt="Rgcreativelab" />\n          <ion-card-content>\n            <ion-card-title class="heading">TECHNOLOGY</ion-card-title>\n            <p text-center>We deal with UI/UX/CX verticals, Journey, Wireframes, Mocks, Content, HTML5/CSS3/Jquery, Angular, Mobile Application and more.</p>\n            \n        \n            </ion-card-content>\n        </ion-card>\n\n  \n</ion-content>\n'/*ion-inline-end:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_sms__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_sms__["a" /* SMS */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\test\project\rg\angular2\mobile-rgcreativelab\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map