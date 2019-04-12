(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  account works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recommended/recommended.component */ "./src/app/recommended/recommended.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");












var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"] },
    { path: 'playlist', component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'top-rated', component: _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_10__["TopRatedComponent"] },
    { path: 'recommended', component: _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedComponent"] },
    { path: 'movie/:id', component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_11__["DetailsPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n<router-outlet>\r\n\r\n</router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_movieServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/movieServices */ "./src/app/services/movieServices.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(sharedData, movieService) {
        this.sharedData = sharedData;
        this.movieService = movieService;
        this.title = 'e-commerce';
        // assign currentuserid after login here 
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getAllMovies().subscribe(function (movies) {
            _this.sharedData.setMovies(movies);
        });
        // let movies:Movie[] = []
        // let m1 = new Movie(); m1._id = "movieid1"; m1.Title="Demo Movie 1"; m1.level = 1; movies.push( m1 );
        // let m2 = new Movie(); m2._id = "2"; m2.Title="Demo Movie 2"; m2.level = 1; movies.push( m2 );
        // let m3 = new Movie(); m3._id = "3"; m3.Title="Demo Movie 3"; m2.level = 2; movies.push( m3);
        // let m4 = new Movie(); m4._id = "4"; m4.Title="Demo Movie 4"; m2.level = 3; movies.push( m4);
        // this.sharedData.setMovies(movies);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_movieServices__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/userServices */ "./src/app/services/userServices.ts");
/* harmony import */ var _services_movieServices__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/movieServices */ "./src/app/services/movieServices.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recommended/recommended.component */ "./src/app/recommended/recommended.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_11__["AccountComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"],
                _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_19__["TopRatedComponent"],
                _recommended_recommended_component__WEBPACK_IMPORTED_MODULE_20__["RecommendedComponent"],
                _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_21__["DetailsPageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
            ],
            providers: [
                _data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"],
                _services_userServices__WEBPACK_IMPORTED_MODULE_17__["UserService"],
                _services_movieServices__WEBPACK_IMPORTED_MODULE_18__["MovieService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/user */ "./src/app/models/user.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var DataService = /** @class */ (function () {
    function DataService() {
        this.isAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.currUserIsAdmin = this.isAdmin.asObservable();
        this.currUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]());
        this.currentUser = this.currUser.asObservable();
        this.movies = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.allMovies = this.movies.asObservable();
    }
    DataService.prototype.setUser = function (user) {
        // this.currUser= user;
        // this.currentUser = this.currUser;
        this.currUser.next(user);
    };
    DataService.prototype.setIsAdmin = function (isAdmin) {
        this.isAdmin.next(isAdmin);
    };
    DataService.prototype.setMovies = function (movies) {
        this.movies.next(movies);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/details-page/details-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav>\r\n</app-nav>\r\n<div class=\"page\">\r\n    <!-- <h3 class=\"pageheader text-center\"> {{movie.Title}} </h3> -->\r\n    <div class=\"pagecontent w-100 padding50\">\r\n        <div class=\"movie-tab w-100 row\">\r\n          <div class=\"col\">\r\n            <br>\r\n            <h3 class=\"movie-title\">{{movie.Title}}&nbsp;&nbsp;&nbsp;&nbsp;<small>({{movie.year}})</small></h3>\r\n            <p>&nbsp;&nbsp;\r\n              <span *ngIf=\"movie.rated\" class=\"text-secondary\">{{ movie.rated}} </span> | \r\n              <span *ngIf=\"movie.runtime\" class=\"text-secondary\">{{ movie.runtime}} min </span> </p>\r\n            <br>\r\n            <span *ngIf=\"movie.plot\" ><p>{{movie.plot}}</p></span>\r\n            <span *ngIf=\"movie.imdb\" ><p>\r\n              <i class=\"fas fa-star text-danger\" *ngFor=\"let i of [].constructor(stars)\"></i>\r\n              {{movie.imdb.rating}} ({{movie.imdb.votes}} reviews)\r\n            </p></span>\r\n            <div *ngIf=\"movie.tomato\" class=\"bg-light padding20\">\r\n                <div *ngIf=\" movie.tomato.consensus\" > <em> {{ movie.tomato.consensus}} - <strong>Tomato Consensus</strong> </em> </div>\r\n                <div *ngIf=\"movie.tomato.userMeter\" > <strong>User Meter :</strong> {{ movie.tomato.userMeter}} </div>\r\n                <div *ngIf=\"movie.tomato.userRating\" > <strong>User Rating :</strong> {{ movie.tomato.userRating}} </div>\r\n                <div *ngIf=\"movie.metacritic\" > <strong>Metacritic :</strong> {{movie.metacritic}}</div>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"movie.genres\">\r\n                <span class=\"text-primary\">Genres : </span>\r\n                <span *ngFor=\"let g of movie.genres; last as isLast\">{{g}} <span *ngIf=\"!isLast\">, </span></span>\r\n            </div>\r\n            <div *ngIf=\"movie.actors\">\r\n              <span class=\"text-primary\">Cast : </span>\r\n              <span *ngFor=\"let actor of movie.actors; last as isLast\">{{actor}}<span *ngIf=\"!isLast\">, </span></span>\r\n            </div>\r\n            <div *ngIf=\"movie.director\">\r\n                <span class=\"text-primary\">Directors : </span>\r\n                <span>{{movie.director}}</span>\r\n            </div>\r\n            <div *ngIf=\"movie.writers\">\r\n                <span class=\"text-primary\">Writers : </span>\r\n                <span *ngFor=\"let actor of movie.writers; last as isLast\">{{actor}}<span *ngIf=\"!isLast\">, </span></span>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"movie.awards\">\r\n                <span><i class=\"fas fa-trophy text-secondary\"></i></span>&nbsp;&nbsp;&nbsp;\r\n                <span>{{movie.awards.text}}</span>\r\n            </div>\r\n            <br>\r\n            <button class=\"btn btn-warning \"  *ngIf=\"!canPlay(movie)\" (click)=\"getPremium()\"> Get Premium </button>\r\n            <button class=\"btn btn-info \"  *ngIf=\"canPlay(movie) && !alreadyInCart(movie)\" (click)=\"addToPlayList(movie)\"> Add To Playlist </button>\r\n            <button class=\"btn btn-info \"  *ngIf=\"canPlay(movie) && alreadyInCart(movie)\" (click)=\"play()\"> Play </button>\r\n          </div>\r\n          <div class=\"col col-4\">\r\n              <img class=\"poster\" [src]=\"movie.Poster\"/>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"similar-tab w-100 row\">\r\n            <p class=\"row w-100 text-left\"> Similar movies you might like</p>\r\n            <br>\r\n            <div class=\"sim-div text-left row\">\r\n              <div class=\"poster-div\" *ngFor=\"let simMovie of similar\">\r\n                <img class=\"similar-poster\" [src]=\"simMovie.Poster\" (click)=\"movieDetails(simMovie)\"/>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/details-page/details-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  background-color: #e9ecef;\n  min-height: 1000px; }\n  .page .pageheader {\n    padding-top: 50px;\n    padding-bottom: 30px;\n    color: darkslategrey;\n    font-stretch: expanded;\n    font-variant: small-caps;\n    font-family: Arial, Helvetica, sans-serif; }\n  .page .poster {\n    background: white;\n    margin-left: 45px;\n    height: 500px; }\n  .page .movie-tab {\n    padding: 40px 20px;\n    padding-top: 40px;\n    padding-left: 100px;\n    color: rgba(0, 0, 0, 0.87);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    box-sizing: border-box;\n    background: white;\n    font-size: 14px; }\n  .page .similar-tab {\n    background: white;\n    padding: 20px 10px;\n    color: rgba(0, 0, 0, 0.87); }\n  .page .similar-tab .text-left {\n      margin-left: 30px; }\n  .page .similar-tab .sim-div {\n      max-height: 180px;\n      overflow-x: scroll;\n      overflow-y: hidden;\n      white-space: nowrap;\n      width: 20000px; }\n  .page .similar-tab .sim-div .poster-div {\n        display: inline-block;\n        height: 100%;\n        widows: 100%; }\n  .page .similar-tab .sim-div .poster-div .similar-poster {\n          height: 90%;\n          widows: 80%;\n          margin-left: 10px;\n          cursor: pointer; }\n  .padding50 {\n  padding-left: 50px;\n  padding-right: 50px; }\n  .padding20 {\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy1wYWdlL0Q6XFxteS1hcHAvc3JjXFxhcHBcXGRldGFpbHMtcGFnZVxcZGV0YWlscy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXdCO0VBQ3hCLGtCQUFrQixFQUFBO0VBRnRCO0lBTVEsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix5Q0FBeUMsRUFBQTtFQVhqRDtJQWVRLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYSxFQUFBO0VBakJyQjtJQXFCUSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBL0J2QjtJQW1DUSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDBCQUEwQixFQUFBO0VBckNsQztNQXdDWSxpQkFBaUIsRUFBQTtFQXhDN0I7TUEyQ1ksaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGNBQWMsRUFBQTtFQS9DMUI7UUFrRGdCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osWUFBWSxFQUFBO0VBcEQ1QjtVQXVEb0IsV0FBVztVQUNYLFdBQVc7VUFDWCxpQkFBaUI7VUFDakIsZUFBZSxFQUFBO0VBT25DO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy1wYWdlL2RldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTllY2VmO1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG5cclxuXHJcbiAgICAucGFnZWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IGV4cGFuZGVkO1xyXG4gICAgICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAucG9zdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb3ZpZS10YWIge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2ltaWxhci10YWIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuXHJcbiAgICAgICAgLnRleHQtbGVmdHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaW0tZGl2e1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxODBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDAwMHB4O1xyXG5cclxuICAgICAgICAgICAgLnBvc3Rlci1kaXZ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWRvd3M6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zaW1pbGFyLXBvc3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkb3dzOiA4MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFkZGluZzUwe1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG5cclxuLnBhZGRpbmcyMHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userServices */ "./src/app/services/userServices.ts");
/* harmony import */ var _services_movieServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movieServices */ "./src/app/services/movieServices.ts");
/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/movie */ "./src/app/models/movie.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(sharedData, movieService, userService, route, router) {
        this.sharedData = sharedData;
        this.movieService = movieService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.movieId = "";
        this.movie = new _models_movie__WEBPACK_IMPORTED_MODULE_5__["Movie"]();
        this.similar = [];
        this.stars = 0;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        this.movieId = this.route.snapshot.paramMap.get("id");
        // this.route.paramMap.subscribe(params => {
        //   this.movieId = params.get("id")
        // });
        this.setUser();
        console.log('username', this.user.username);
        this.getDetails(this.movieId);
    };
    DetailsPageComponent.prototype.getDetails = function (movieId) {
        var _this = this;
        this.movieService.getMovieById(movieId).subscribe(function (movie) {
            _this.stars = Math.round(movie.imdb.rating / 2);
            _this.movie = movie;
        });
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.similar.push(new Movie());
        // this.stars = Math.round(this.movie.imdb.rating/2);
    };
    DetailsPageComponent.prototype.setUser = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (user) {
            _this.user = user;
        });
    };
    DetailsPageComponent.prototype.alreadyInCart = function () {
        return this.user.cart.includes(this.movieId);
    };
    DetailsPageComponent.prototype.canPlay = function () {
        return this.user.level >= this.movie.level;
    };
    DetailsPageComponent.prototype.addToPlayList = function (movie) {
        this.userService.addToPlaylist(this.user, movie._id);
    };
    DetailsPageComponent.prototype.getPremium = function () {
    };
    DetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/details-page/details-page.component.html"),
            styles: [__webpack_require__(/*! ./details-page.component.scss */ "./src/app/details-page/details-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_movieServices__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _services_userServices__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav>\r\n  </app-nav>\r\n<div class=\"container-fluid\" id=\"home-container\">\r\n\r\n  <!-- <h1 class=\"text-center w-100\">SEARCH MOVIES</h1> -->\r\n  <div id=\"search-div-id\" class=\"d-flex justify-content-center\">\r\n    <form id=\"search-form\" [formGroup]=\"searchForm\" class=\"form-inline\" novalidate>\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" formControlName=\"search_input\" #search_input placeholder=\"Titles, actors, genres\"\r\n        aria-label=\"Search\">\r\n      <button (click)=\"onSubmit(search_input.value)\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n  <div id=\"radio-div-id\" class=\"d-flex justify-content-center\">\r\n    <div class=\"btn-group btn-group-toggle\">\r\n      <label class=\"btn btn-outline-info\" ngbButtonLabel>\r\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.genre\"> Genre\r\n      </label>\r\n      <label class=\"btn btn-outline-info\" ngbButtonLabel>\r\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.title\"> Title\r\n      </label>\r\n      <label class=\"btn btn-outline-info\" ngbButtonLabel>\r\n        <input type=\"checkbox\" ngbButton [(ngModel)]=\"model.director\"> Director\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isSearched\">\r\n    <div *ngFor=\"let genreMovies of moviesActual | keyvalue;last as isLast;\">\r\n      <h3 class=\"w-100\">{{genreMovies.key}}</h3>\r\n      <div class=\"d-flex justify-content-center pad-100\">\r\n        <div class=\"card bg-dark text-white\" *ngFor=\"let movie of genreMovies.value\">\r\n          <button *ngIf=\"!isLast\" class=\"no-margin-padding\" [popoverTitle]=\"popTitle\" type=\"button\" placement=\"bottom\"\r\n            [ngbPopover]=\"popContent\" popoverClass=\"my-custom-class\">\r\n            <img class=\"card-img bg-dark\" [src]=\"movie.Poster\" alt=\"Card image\">\r\n          </button>\r\n          <button *ngIf=\"isLast\" class=\"no-margin-padding\" [popoverTitle]=\"popTitle\" type=\"button\" placement=\"top\"\r\n            [ngbPopover]=\"popContent\" popoverClass=\"my-custom-class\">\r\n            <img class=\"card-img bg-dark\" [src]=\"movie.Poster\" alt=\"Card image\">\r\n          </button>\r\n          <ng-template #popContent>\r\n            <table class=\"popover-table\">\r\n              <tr>\r\n                <th class=\"text-center\" colspan=\"2\"><b>{{movie.Title}}</b></th>\r\n              </tr>\r\n              <tr>\r\n                <td>{{movie.plot}}!!</td>\r\n                <td>\r\n                  <button *ngIf=\"addedInPlayList\" type=\"button\" class=\"btn btn-outline-info\">\r\n                    Add To Playlist\r\n                    <i class=\"far fa-plus-square fa-lg\"></i>\r\n                  </button>\r\n                  <button *ngIf=\"!addedInPlayList\" type=\"button\" class=\"btn btn-outline-info\">\r\n                    Play\r\n                    <i class=\"far fa-play-circle fa-lg\"></i>\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"movieDetails(movie)\">\r\n                    Details\r\n                    <i class=\"fas fa-external-link-square-alt fa-lg\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"isSearched\">\r\n    <h3 class=\"w-100\">SEARCH RESULTS</h3>\r\n    <div id=\"search-container\" class=\"d-flex justify-content-center pad-100\">\r\n      <div class=\"card  card-search bg-dark text-white\" *ngFor=\"let movie of moviesSearched\">\r\n        <button *ngIf=\"!isLast\" class=\"no-margin-padding\" [popoverTitle]=\"popTitle\" type=\"button\" placement=\"top\"\r\n          [ngbPopover]=\"popContent\" popoverClass=\"my-custom-class\">\r\n          <img class=\"card-img bg-dark\" [src]=\"movie.Poster\" alt=\"Card image\">\r\n        </button>\r\n        <button *ngIf=\"isLast\" class=\"no-margin-padding\" [popoverTitle]=\"popTitle\" type=\"button\" placement=\"top\"\r\n          [ngbPopover]=\"popContent\" popoverClass=\"my-custom-class\">\r\n          <img class=\"card-img bg-dark\" [src]=\"movie.Poster\" alt=\"Card image\">\r\n        </button>\r\n        <ng-template #popContent>\r\n          <table class=\"popover-table\">\r\n            <tr>\r\n              <th class=\"text-center\" colspan=\"2\"><b>{{movie.Title}}</b></th>\r\n            </tr>\r\n            <tr>\r\n              <td>{{movie.plot}}!!</td>\r\n              <td>\r\n                <button *ngIf=\"addedInPlayList\" type=\"button\" class=\"btn btn-outline-info\">\r\n                  Add To Playlist\r\n                  <i class=\"far fa-plus-square fa-lg\"></i>\r\n                </button>\r\n                <button *ngIf=\"!addedInPlayList\" type=\"button\" class=\"btn btn-outline-info\">\r\n                  Play\r\n                  <i class=\"far fa-play-circle fa-lg\"></i>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-outline-info\" routerLink=\"/movie-details\">\r\n                  Details\r\n                  <i class=\"fas fa-external-link-square-alt fa-lg\"></i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background: #141414; }\n  .container-fluid #search-container {\n    flex-wrap: wrap; }\n  .container-fluid #search-div-id {\n    padding-bottom: 10px;\n    padding-top: 20px; }\n  .container-fluid img:hover {\n    box-shadow: 3px 3px 71px 15px dimgrey;\n    /* opacity: 0.6;\r\n            filter: alpha(opacity=50);  */ }\n  .container-fluid #radio-div-id {\n    padding-bottom: 40px; }\n  .container-fluid #radio-div-id label {\n      margin-left: 25px; }\n  div .card {\n  margin-right: 25px; }\n  div .card-search {\n  margin-top: 35px;\n  margin-bottom: 35px; }\n  div h1 {\n  color: white; }\n  div h3 {\n  color: white;\n  padding-top: 35px;\n  padding-bottom: 35px; }\n  .no-margin-padding {\n  padding: 0px;\n  margin: 0px;\n  border: 0;\n  cursor: pointer;\n  color: black; }\n  .popTitle {\n  color: black; }\n  .pad-100 {\n  padding-left: 100px;\n  padding-right: 100px; }\n  #search-form {\n  margin-top: 150px;\n  margin-right: 7px !important; }\n  #search-form input {\n    height: 50px;\n    width: 600px !important; }\n  #search-form button {\n    height: 50px; }\n  .popover-table button {\n  width: 150px;\n  height: 30px;\n  margin-bottom: 5px;\n  padding-top: 2px; }\n  .popover-table th {\n  text-decoration: underline;\n  text-transform: uppercase; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcbXktYXBwL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUtRLGVBQWUsRUFBQTtFQUx2QjtJQVNRLG9CQUFvQjtJQUNwQixpQkFBaUIsRUFBQTtFQVZ6QjtJQWNZLHFDQUFxQztJQUNyQzt5Q0NMNkIsRURNQztFQWhCMUM7SUF1QlEsb0JBQW1CLEVBQUE7RUF2QjNCO01BcUJZLGlCQUFpQixFQUFBO0VBTTdCO0VBRVEsa0JBQW1CLEVBQUE7RUFGM0I7RUFNUSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBO0VBUDFCO0VBV1EsWUFBVyxFQUFBO0VBWG5CO0VBZ0JRLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBQUE7RUFJM0I7RUFDSSxZQUFZO0VBQ1osV0FBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBO0VBR3hCO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUE0QixFQUFBO0VBRmhDO0lBSVEsWUFBWTtJQUNaLHVCQUF1QixFQUFBO0VBTC9CO0lBUVEsWUFBWSxFQUFBO0VBTXBCO0VBRVEsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFMeEI7RUFRUSwwQkFBMEI7RUFDMUIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZDogIzE0MTQxNDtcclxuXHJcbiAgICAjc2VhcmNoLWNvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAjc2VhcmNoLWRpdi1pZHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWc6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDcxcHggMTVweCBkaW1ncmV5O1xyXG4gICAgICAgICAgICAvKiBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7ICAqL1xyXG4gICAgfVxyXG5cclxuICAgICNyYWRpby1kaXYtaWR7XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTo0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5kaXZ7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHggO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLXNlYXJjaHtcclxuICAgICAgICBtYXJnaW4tdG9wOjM1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTozNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGgze1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjM1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206MzVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5vLW1hcmdpbi1wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBvcFRpdGxle1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGFkLTEwMHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuI3NlYXJjaC1mb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHggIWltcG9ydGFudDtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9ICAgIFxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgXHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuLnBvcG92ZXItdGFibGV7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIHRoe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZDogIzE0MTQxNDsgfVxuICAuY29udGFpbmVyLWZsdWlkICNzZWFyY2gtY29udGFpbmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgLmNvbnRhaW5lci1mbHVpZCAjc2VhcmNoLWRpdi1pZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7IH1cbiAgLmNvbnRhaW5lci1mbHVpZCBpbWc6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNzFweCAxNXB4IGRpbWdyZXk7XG4gICAgLyogb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApOyAgKi8gfVxuICAuY29udGFpbmVyLWZsdWlkICNyYWRpby1kaXYtaWQge1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4OyB9XG4gICAgLmNvbnRhaW5lci1mbHVpZCAjcmFkaW8tZGl2LWlkIGxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4OyB9XG5cbmRpdiAuY2FyZCB7XG4gIG1hcmdpbi1yaWdodDogMjVweDsgfVxuXG5kaXYgLmNhcmQtc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDsgfVxuXG5kaXYgaDEge1xuICBjb2xvcjogd2hpdGU7IH1cblxuZGl2IGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMzVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7IH1cblxuLm5vLW1hcmdpbi1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4ucG9wVGl0bGUge1xuICBjb2xvcjogYmxhY2s7IH1cblxuLnBhZC0xMDAge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDsgfVxuXG4jc2VhcmNoLWZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHggIWltcG9ydGFudDsgfVxuICAjc2VhcmNoLWZvcm0gaW5wdXQge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNjAwcHggIWltcG9ydGFudDsgfVxuICAjc2VhcmNoLWZvcm0gYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUwcHg7IH1cblxuLnBvcG92ZXItdGFibGUgYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDJweDsgfVxuXG4ucG9wb3Zlci10YWJsZSB0aCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_movieServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movieServices */ "./src/app/services/movieServices.ts");
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/userServices */ "./src/app/services/userServices.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(sharedData, movieService, userService, formBuilder, router) {
        this.sharedData = sharedData;
        this.movieService = movieService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.isSearched = false;
        this.moviesActual = new Map();
        this.moviesSearched = [];
        this.search = {};
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"];
        this.model = {
            genre: false,
            title: false,
            director: false
        };
        this.movies = [
            {
                "Title": "Toy Story",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da904823" },
                "actors": ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"],
                "awards": {
                    "wins": 22.0,
                    "nominations": 17.0,
                    "text": "Nominated for 3 Oscars. Another 22 wins & 17 nominations."
                },
                "countries": ["USA"],
                "director": "John Lasseter",
                "genres": ["Animation", "Adventure", "Comedy"],
                "imdb": { "rating": 8.3, "votes": 574251.0, "id": "tt0114709" },
                "metacritic": 92.0,
                "plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
                "rated": "G",
                "runtime": 81.0,
                "tomato": {
                    "rating": 9.0,
                    "userReviews": 1104709.0,
                    "userMeter": 92.0,
                    "image": "certified",
                    "meter": 100.0,
                    "reviews": 78.0,
                    "userRating": 3.7,
                    "fresh": 78.0,
                    "consensus": "Entertaining as it is innovative, Toy Story reinvigorated animation while heralding the arrival of Pixar as a family-friendly force to be reckoned with."
                },
                "type": "movie",
                "writers": [
                    "John Lasseter",
                    "Pete Docter",
                    "Andrew Stanton",
                    "Joe Ranft",
                    "Joss Whedon",
                    "Andrew Stanton",
                    "Joel Cohen",
                    "Alec Sokolow"
                ],
                "year": 1995,
                "level": 2
            },
            {
                "Title": "Cutthroat Island",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDg2YTI0YmQtYzgwMi00Zjk4LWJkZjgtYjg0ZDE2ODUzY2RlL2ltYWdlXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da9047a3" },
                "actors": ["Geena Davis", "Matthew Modine", "Frank Langella", "Maury Chaykin"],
                "awards": { "wins": 0.0, "nominations": 1.0, "text": "1 nomination." },
                "countries": ["USA", "France", "Italy", "Germany"],
                "director": "Renny Harlin",
                "genres": ["Action", "Adventure", "Comedy"],
                "imdb": { "rating": 5.6, "votes": 20312.0, "id": "tt0112760" },
                "metacritic": null,
                "plot": "A female pirate and her companion race against their rivals to find a hidden island that contains a fabulous treasure.",
                "rated": "PG-13",
                "runtime": 124.0,
                "tomato": null,
                "type": "movie",
                "writers": [
                    "Michael Frost Beckner",
                    "James Gorman",
                    "Bruce A. Evans",
                    "Raynold Gideon",
                    "Robert King",
                    "Marc Norman"
                ],
                "year": 1995,
                "level": 2
            },
            {
                "Title": "The City of Lost Children",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZGQxZDMwYzYtYmFjNi00NWYyLThjZjAtMDJhODZhYTkyZDNhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR7,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da9047c2" },
                "actors": ["Ron Perlman", "Daniel Emilfork", "Judith Vittet", "Dominique Pinon"],
                "awards": { "wins": 2.0, "nominations": 11.0, "text": "2 wins & 11 nominations." },
                "countries": ["France", "Germany", "Spain"],
                "director": "Marc Caro, Jean-Pierre Jeunet",
                "genres": ["Fantasy", "Sci-Fi"],
                "imdb": { "rating": 7.7, "votes": 53962.0, "id": "tt0112682" },
                "metacritic": 73.0,
                "plot": "A scientist in a surrealist society kidnaps children to steal their dreams, hoping that they slow his aging process.",
                "rated": "R",
                "runtime": 112.0,
                "tomato": {
                    "rating": 7.0,
                    "userReviews": 65391.0,
                    "userMeter": 90.0,
                    "image": "certified",
                    "meter": 79.0,
                    "reviews": 53.0,
                    "userRating": 4.0,
                    "fresh": 42.0,
                    "consensus": "Not all of its many intriguing ideas are developed, but The City of Lost Children is an engrossing, disturbing, profoundly memorable experience."
                },
                "type": "movie",
                "writers": [
                    "Gilles Adrien",
                    "Jean-Pierre Jeunet",
                    "Marc Caro",
                    "Gilles Adrien",
                    "Guillaume Laurant",
                    "Jean-Pierre Jeunet"
                ],
                "year": 1995,
                "level": 2
            },
            {
                "Title": "Il Postino: The Postman",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NDI4NjQyOV5BMl5BanBnXkFtZTYwODI1NDE5._V1_UY268_CR3,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da904b75" },
                "actors": ["Philippe Noiret", "Massimo Troisi", "Maria Grazia Cucinotta", "Renato Scarpa"],
                "awards": { "wins": 28.0, "nominations": 17.0, "text": "Won 1 Oscar. Another 28 wins & 17 nominations." },
                "countries": ["Italy", "France", "Belgium"],
                "director": "Michael Radford",
                "genres": ["Biography", "Comedy", "Drama"],
                "imdb": { "rating": 7.8, "votes": 24972.0, "id": "tt0110877" },
                "metacritic": 81.0,
                "plot": "Simple Italian postman learns to love poetry while delivering mail to a famous poet; he uses this to woo local beauty Beatrice.",
                "rated": "PG",
                "runtime": 108.0,
                "tomato": {
                    "rating": 8.0,
                    "userReviews": 20949.0,
                    "userMeter": 94.0,
                    "image": "fresh",
                    "meter": 93.0,
                    "reviews": 28.0,
                    "userRating": 4.1,
                    "fresh": 26.0,
                    "consensus": null
                },
                "type": "movie",
                "writers": [
                    "Antonio Sk\u00e1rmeta",
                    "Furio Scarpelli",
                    "Giacomo Scarpelli",
                    "Anna Pavignano",
                    "Michael Radford",
                    "Furio Scarpelli",
                    "Giacomo Scarpelli",
                    "Massimo Troisi"
                ],
                "year": 1994,
                "level": 2
            },
            {
                "Title": "Don't Be a Menace to South Central While Drinking Your Juice in the Hood",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2NmM2M2MWItNjdlMC00ZWI3LTkwODUtZDNkYWZjYjgzZjY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da904dfa" },
                "actors": ["Shawn Wayans", "Marlon Wayans", "Tracey Cherelle Jones", "Chris Spencer"],
                "awards": { "wins": 0.0, "nominations": 1.0, "text": "1 nomination." },
                "countries": ["USA"],
                "director": "Paris Barclay",
                "genres": ["Comedy", "Crime"],
                "imdb": { "rating": 6.6, "votes": 36103.0, "id": "tt0116126" },
                "metacritic": null,
                "plot": "\"Don't Be a Menace to South Central While Drinking your Juice in the Hood\" is a parody of several U.S. films about being in the 'Hood', for instance \"Boyz n the Hood\", \"South Central\", \"...",
                "rated": "R",
                "runtime": 89.0,
                "tomato": null,
                "type": "movie",
                "writers": ["Shawn Wayans", "Marlon Wayans", "Phil Beauman"],
                "year": 1996,
                "level": 1
            },
            {
                "Title": "La Haine",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDNiOTA5YjktY2Q0Ni00ODgzLWE5MWItNGExOWRlYjY2MjBlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da904bd9" },
                "actors": ["Vincent Cassel", "Hubert Kound\u00e9", "Sa\u00efd Taghmaoui", "Abdel Ahmed Ghili"],
                "awards": { "wins": 8.0, "nominations": 13.0, "text": "8 wins & 13 nominations." },
                "countries": ["France"],
                "director": "Mathieu Kassovitz",
                "genres": ["Crime", "Drama"],
                "imdb": { "rating": 8.1, "votes": 95280.0, "id": "tt0113247" },
                "metacritic": null,
                "plot": "24 hours in the lives of three young men in the French suburbs the day after a violent riot.",
                "rated": "NOT RATED",
                "runtime": 98.0,
                "tomato": null,
                "type": "movie",
                "writers": ["Mathieu Kassovitz"],
                "year": 1995,
                "level": 3
            },
            {
                "Title": "Muppet Treasure Island",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NDU1MDYxMl5BMl5BanBnXkFtZTcwNjgyMTEzMQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da9047a4" },
                "actors": ["Tim Curry", "Billy Connolly", "Jennifer Saunders", "Kevin Bishop"],
                "awards": { "wins": 0.0, "nominations": 4.0, "text": "4 nominations." },
                "countries": ["USA"],
                "director": "Brian Henson",
                "genres": ["Action", "Adventure", "Comedy"],
                "imdb": { "rating": 6.9, "votes": 15096.0, "id": "tt0117110" },
                "metacritic": null,
                "plot": "The Muppets' twist on the classic tale.",
                "rated": "G",
                "runtime": 99.0,
                "tomato": null,
                "type": "movie",
                "writers": ["Robert Louis Stevenson", "Jerry Juhl", "Kirk R. Thatcher", "James V. Hart"],
                "year": 1996,
                "level": 3
            },
            {
                "Title": "Belle de Jour",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjhjYWVjZWItZmE3OS00ZTNmLWJhYTktZGM1YWZiNDgxNTU2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR4,0,182,268_AL_.jpg",
                "_id": { "$oid": "5b107bec1d2952d0da9048f5" },
                "actors": ["Catherine Deneuve", "Jean Sorel", "Michel Piccoli", "Genevi\u00e8ve Page"],
                "awards": {
                    "wins": 5.0,
                    "nominations": 2.0,
                    "text": "Nominated for 1 BAFTA Film Award. Another 5 wins & 2 nominations."
                },
                "countries": ["France", "Italy"],
                "director": "Luis Bu\u00f1uel",
                "genres": ["Drama"],
                "imdb": { "rating": 7.8, "votes": 27653.0, "id": "tt0061395" },
                "metacritic": null,
                "plot": "A frigid young housewife decides to spend her midweek afternoons as a prostitute.",
                "rated": "APPROVED",
                "runtime": 101.0,
                "tomato": null,
                "type": "movie",
                "writers": ["Joseph Kessel", "Luis Bu\u00f1uel", "Jean-Claude Carri\u00e8re"],
                "year": 1967,
                "level": 1
            }
        ];
        this.createForm();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("keyname")) {
            this.userService.getUser(sessionStorage.getItem("keyname")).subscribe(function (user) { return _this.sharedData.setUser(user); });
            this.sharedData.currentUser.subscribe(function (user) {
                if (user == null || user.username == '') {
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.router.navigate(['/']);
                    _this.sortMoviesByGenre();
                }
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    HomeComponent.prototype.sortMoviesByGenre = function () {
        var _this = this;
        /* this.sharedData.allMovies.subscribe( movies => {
            movies.forEach( movie => {
              var genres = movie.genres;
              genres.forEach( genre => {
                // add to moviesActual
              });
            });
        }); */
        this.movies.forEach(function (movie) {
            var genres = movie["genres"];
            genres.forEach(function (genre) {
                if (_this.moviesActual != null && _this.moviesActual.get(genre) != null)
                    _this.moviesActual.get(genre).push(movie);
                else {
                    _this.moviesActual.set(genre, new Array(movie));
                }
            });
        });
    };
    HomeComponent.prototype.onSubmit = function (inputVal) {
        var _this = this;
        console.log("form is submitted");
        console.log("input text  " + inputVal);
        console.log("Genre checkbox " + this.model.genre);
        this.isSearched = true;
        this.moviesSearched = [];
        this.movies.forEach(function (movie) {
            if (movie.Title.includes(inputVal)) {
                _this.moviesSearched.push(movie);
            }
        });
        var u1 = new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        u1.username = "searched";
        console.log(u1);
        // this.sharedData.currentUser =  u1;
        this.sharedData.setUser(u1);
        console.log(this.sharedData.currentUser);
    };
    HomeComponent.prototype.movieDetails = function (movie) {
        console.log("moviedetails home ", movie._id["$oid"]);
        this.router.navigateByUrl('/movie/' + movie._id["$oid"]);
    };
    HomeComponent.prototype.createForm = function () {
        this.searchForm = this.formBuilder.group({
            search_input: []
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .my-custom-class {\n      background: aliceblue;\n      font-size: 125%;\n    }\n    .my-custom-class .arrow::after {\n      border-top-color: aliceblue;\n    }\n\n    .popover-header{\n      color:black;\n      font-size: 18px;\n      overflow:auto;\n      height:35px;\n    }\n\n    #home-container ngb-popover-window \n    {\n      min-width: 400px;\n      left:20px;\n    }\n    #home-container .popover-body{\n      font-size: 14px;\n      overflow:auto;\n      height:100px;\n    }\n  ", __webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _services_movieServices__WEBPACK_IMPORTED_MODULE_4__["MovieService"], _services_userServices__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\">\r\n  <div id=\"formContent\">\r\n    <!-- Tabs Titles -->\r\n\r\n    <!-- Icon -->\r\n    <div class=\"fadeIn first\">\r\n      <!-- <i class=\"far fa-id-card fa-lg\"></i> -->\r\n      <i class=\"fas fa-sign-in-alt fa-lg\"></i>\r\n    </div>\r\n\r\n    <!-- Login Form -->\r\n    <form [formGroup]=\"loginForm\" novalidate>\r\n      <h5 *ngIf=\"!success\" class=\"error alert-danger\">username and password do not match!!!</h5>\r\n      <input type=\"text\" id=\"login\" formControlName=\"username\" #username class=\"fadeIn second\" name=\"login\" placeholder=\"login\">\r\n      <div *ngIf=\"submitted && loginForm.controls.username.errors\" class=\"error\">\r\n        <label *ngIf=\"loginForm.controls.username.errors.required\" class=\"alert-danger\"> username is required.</label>\r\n      </div>\r\n      <div *ngIf=\"submitted && loginForm.controls.username.errors\" class=\"error\">\r\n        <label *ngIf=\"loginForm.controls.username.errors.pattern\" class=\"alert-danger\"> Enter valid username (only\r\n          alphanumeric and underscores).</label>\r\n      </div>\r\n      <input type=\"password\" id=\"password\" formControlName=\"password\" #password class=\"fadeIn third\" name=\"password\"\r\n        placeholder=\"password\">\r\n      <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"error\">\r\n        <label *ngIf=\"loginForm.controls.password.errors.required\" class=\"alert-danger\"> Password is required.</label>\r\n      </div>\r\n      <input (click)=\"onLogin(username.value,password.value)\" type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\r\n    </form>\r\n\r\n    <!-- Remind Passowrd -->\r\n    <div id=\"formFooter\">\r\n      <a class=\"underlineHover\" href=\"/register\">New User ? Create Account</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n.fa-sign-in-alt {\n  color: #5fbae9;\n  font-size: 3rem; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 10%; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #cccccc; }\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #39ace7; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text], input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\ninput[type=submit] {\n  cursor: pointer; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #0d0d0d; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXG15LWFwcC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFVBQUE7QUFFQTtFQUNJLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWEsRUFBQTtBQUdmO0VBQ0UsY0FBYztFQUNkLHFCQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7QUFJZDtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFJckIsY0FBQTtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBR2Q7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosNENBQXlDO0VBQ3pDLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QixFQUFBO0FBSzlCLFNBQUE7QUFFQTtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtBQUtsQyxtQkFBQTtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsaURBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUVFLDhCQUE4QjtFQUc5QixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QixFQUFBO0FBR2hDO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQyxFQUFBO0FBR2xDO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0ksZUFBZSxFQUFBO0FBSW5CLGVBQUE7QUFFQSx1Q0FBQTtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtBQUczQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBLEVBQUE7QUFJbkI7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSW5CLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNFLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR3JCLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXLEVBQUE7QUFLYixXQUFBO0FBRUE7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDRSxVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuXHJcbiAgICAuZmEtc2lnbi1pbi1hbHR7XHJcbiAgICAgICAgY29sb3I6ICM1ZmJhZTk7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICBcclxuICAvKiBTVFJVQ1RVUkUgKi9cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtQ29udGVudCB7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Gb290ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlOGYxO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIFRBQlMgKi9cclxuICBcclxuICBoMi5pbmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgaDIuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEZPUk0gVFlQT0dSQVBIWSovXHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWFjZTc7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmUsIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUsIGlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIEFOSU1BVElPTlMgKi9cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbiAgLmZhZGVJbkRvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userServices */ "./src/app/services/userServices.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(sharedData, userService, formBuilder, router) {
        this.sharedData = sharedData;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
        this.submitted = false;
        this.success = true;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9_]+')]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.onLogin = function (username, password) {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.valid) {
            this.userService.validateUser(username, password).subscribe(function (user) {
                console.log(username + ' ' + password + '  ' + _this.user.username + '  ' + _this.user.password);
                _this.sharedData.setUser(user);
                _this.success = true;
                sessionStorage.setItem("keyname", user.id);
                // console.log(this.sharedData.currentUser);
                _this.router.navigate(['/']);
            }, function (err) {
                _this.router.navigate(['/login']);
                _this.success = false;
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_userServices__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/movie.ts":
/*!*********************************!*\
  !*** ./src/app/models/movie.ts ***!
  \*********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
        this.Title = "Toy Story";
        this.Poster = "https://images-na.ssl-images-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg";
        this._id = {
            $oid: "5b107bec1d2952d0da904823"
        };
        this.actors = ["Tom Hanks", "Tim Allen", "Don Rickles", "Jim Varney"];
        this.awards = {
            wins: 22.0,
            nominations: 17.0,
            text: "Nominated for 3 Oscars. Another 22 wins & 17 nominations."
        };
        this.countries = ["USA"];
        this.director = "John Lasseter";
        this.genres = ["Animation", "Adventure", "Comedy"];
        this.imdb = {
            rating: 8.3,
            votes: 574251.0,
            id: "tt0114709",
        };
        this.metacritic = 92.0;
        this.plot = "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.";
        this.rated = "G";
        this.runtime = 81.0;
        this.tomato = {
            rating: 9.0,
            userReviews: 1104709.0,
            userMeter: 92.0,
            image: "certified",
            meter: 100.0,
            reviews: 78.0,
            userRating: 3.7,
            fresh: 78.0,
            consensus: "Entertaining as it is innovative, Toy Story reinvigorated animation while heralding the arrival of Pixar as a family-friendly force to be reckoned with."
        };
        this.type = "movie";
        this.writers = [
            "John Lasseter",
            "Pete Docter",
            "Andrew Stanton",
            "Joe Ranft",
            "Joss Whedon",
            "Andrew Stanton",
            "Joel Cohen",
            "Alec Sokolow",
        ];
        this.year = 1995;
        this.level = 2;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: Card, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var Card = /** @class */ (function () {
    function Card() {
        this.ccNum = 1111222233334444;
        this.ccCVV = 123;
        this.ccExp = "";
    }
    return Card;
}());

var User = /** @class */ (function () {
    function User() {
        this.id = "";
        this.displayName = '';
        this.username = '';
        this.password = '';
        this.level = 2;
        this.cart = ["movieid1", "movieid2"];
        this.billing = new Card();
    }
    return User;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"nav-container\">\r\n    <div class=\"d-flex\">\r\n        \r\n      <div class=\"w-100\">\r\n          <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n              </button>\r\n              <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n                <ul class=\"navbar-nav mr-auto\">\r\n                  <li class=\"nav-items\">\r\n                    <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/playlist\">PlayList</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/top-rated\">Top Rated</a>\r\n                  </li>\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"nav-link\" routerLink=\"/recommended\">Recommended</a>\r\n                  </li>\r\n                </ul>\r\n                    <svg id=\"user-profile\" title=\"Profile\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\"  aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"user-circle\" class=\"svg-inline--fa fa-user-circle fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 496 512\">\r\n                      <path fill=\"currentColor\" d=\"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z\"></path>\r\n                    </svg>                \r\n                <svg id=\"sign-out\" aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fas\" data-icon=\"sign-out-alt\" class=\"svg-inline--fa fa-sign-out-alt fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                  <path fill=\"currentColor\" d=\"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z\"></path>\r\n                </svg>\r\n\r\n                <ng-template #popContent>Hello, <b>{{username}}</b>!</ng-template>\r\n              </div>\r\n            </nav>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:focus {\n  color: white !important; }\n\n.container-fluid {\n  padding: 0px; }\n\n#user-profile, #sign-out, path {\n  cursor: pointer;\n  font-size: 2.0em;\n  color: lightskyblue;\n  margin-left: 10px; }\n\n#user-profile :hover, #sign-out :hover, path :hover {\n    font-size: 2.2em;\n    color: yellow; }\n\n#user-profile :focus, #sign-out :focus, path :focus {\n    font-size: 2.2em;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxteS1hcHAvc3JjXFxhcHBcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ00sZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBSnZCO0lBTVEsZ0JBQWdCO0lBQ2hCLGFBQWEsRUFBQTs7QUFQckI7SUFVUSxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImE6Zm9jdXN7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuI3VzZXItcHJvZmlsZSwgI3NpZ24tb3V0LCBwYXRoe1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICAgIGNvbG9yOiBsaWdodHNreWJsdWU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICA6aG92ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcclxuICAgICAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgICB9XHJcbiAgICAgIDpmb2N1c3tcclxuICAgICAgICBmb250LXNpemU6IDIuMmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var NavComponent = /** @class */ (function () {
    function NavComponent(sharedData) {
        this.sharedData = sharedData;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (user) {
            _this.user = user;
            _this.username = _this.user.username;
        });
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    #nav-container ngb-popover-window {\n      min-width: auto;\n    }\n    #nav-container .popover-body{\n      \n        height: auto !important;\n    }\n    ", __webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/playlist/playlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/playlist/playlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"page\">\r\n  <h3 class=\"pageheader text-center\"> MY PLAYLIST </h3>\r\n  <div class=\"pagecontent w-100 padding50\">\r\n    <div class=\"secondaryheader\">\r\n      <small class=\"text-secondary\">Drag and drop to re-order your playlist</small>\r\n      <button class=\"btn btn-info savebutton\" [attr.disabled]=\"saveDisabled\" (click)=\"updateCart()\"> Save </button>\r\n    </div>\r\n    <div cdkDropList class=\"draggable-list shadow-lg p-3 mb-5 bg-white rounded w-100\" (cdkDropListDropped)=\"drop($event)\">\r\n      <div class=\"movie-tab w-100 row\" *ngFor=\"let movie of movies\" cdkDrag>\r\n        <div class=\"col col-1\"><img class=\"poster\" [src]=\"movie.Poster\"/></div>\r\n        <div class=\"col\">\r\n            <h4 class=\"movie-title\" (click)=\"movieDetails(movie)\">{{movie.Title}}&nbsp;&nbsp;&nbsp;&nbsp;<small>({{movie.year}})</small></h4>\r\n            <small>\r\n              <span *ngIf=\"movie.rated\" class=\"text-danger\">{{ movie.rated}} </span> | \r\n              <span *ngIf=\"movie.runtime\" class=\"text-danger\">{{ movie.runtime}} min </span> | \r\n              <span class=\"text-danger\" *ngFor=\"let g of movie.genres; last as isLast\">{{g}} <span *ngIf=\"!isLast\">, </span></span> \r\n            </small>\r\n            <p></p>\r\n            <span *ngIf=\"movie.plot\" ><p>{{movie.plot}}</p></span>\r\n            <span *ngIf=\"movie.imdb && movie.imdb.rating\" ><p><i class=\"far fa-star text-warning\"></i> {{movie.imdb.rating}}</p></span>\r\n        </div>\r\n        <div class=\"col col-4\">\r\n          <div *ngIf=\"movie.actors && movie.actors.length > 0\">\r\n            <span>Cast : </span>\r\n            <span *ngFor=\"let actor of movie.actors; last as isLast\">{{actor}}<span *ngIf=\"!isLast\">, </span></span>\r\n          </div>\r\n          <div *ngIf=\"movie.director && movie.director.length > 0\" >\r\n              <span>Director : </span>\r\n              <span>{{movie.director}}</span>\r\n          </div>\r\n          <br>\r\n          <button class=\"btn btn-info\" (click)=\"play()\"> Play </button>\r\n          &nbsp;&nbsp;\r\n          <button class=\"btn btn-danger\" (click)=\"removeFromPlaylist(movie)\"> Remove </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/playlist/playlist.component.scss":
/*!**************************************************!*\
  !*** ./src/app/playlist/playlist.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  background-color: #e9ecef;\n  min-height: 1000px; }\n\n.pageheader {\n  padding-top: 50px;\n  color: darkslategrey;\n  font-stretch: expanded;\n  font-variant: small-caps;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.padding50 {\n  padding-left: 50px;\n  padding-right: 50px; }\n\n.movie-title {\n  cursor: pointer; }\n\n.draggable-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 3px 2px 50px 12px rgba(0, 0, 0, 0.12); }\n\n.movie-tab {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px; }\n\n.movie-tab:hover {\n    box-shadow: 3px 2px 50px 12px rgba(0, 0, 0, 0.04) inset; }\n\n.movie-tab .poster {\n    max-height: 150px; }\n\n.savebutton {\n  float: right;\n  margin-right: 10px;\n  margin-bottom: 10px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.movie-tab:last-child {\n  border: none; }\n\n.draggable-list.cdk-drop-list-dragging .movie-tab:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3QvRDpcXG15LWFwcC9zcmNcXGFwcFxccGxheWxpc3RcXHBsYXlsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXdCO0VBQ3hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4Qix5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaURBQWlELEVBQUE7O0FBR25EO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFYakI7SUFhTSx1REFBdUQsRUFBQTs7QUFiN0Q7SUFpQk0saUJBQWlCLEVBQUE7O0FBS3ZCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHFIQUU4QyxFQUFBOztBQUdoRDtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNELEVBQUE7O0FBR3hEO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZTllY2VmO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxufVxyXG5cclxuLnBhZ2VoZWFkZXJ7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgZm9udC1zdHJldGNoOiBleHBhbmRlZDtcclxuICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wYWRkaW5nNTB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5tb3ZpZS10aXRsZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcmFnZ2FibGUtbGlzdCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDJweCA1MHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcblxyXG4gIC5tb3ZpZS10YWIge1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDJweCA1MHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA0KSBpbnNldDtcclxuICAgIH1cclxuXHJcbiAgICAucG9zdGVye1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuICAuc2F2ZWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAuY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgXHJcbiAgLm1vdmllLXRhYjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmRyYWdnYWJsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLm1vdmllLXRhYjpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userServices */ "./src/app/services/userServices.ts");
/* harmony import */ var _services_movieServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movieServices */ "./src/app/services/movieServices.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var PlaylistComponent = /** @class */ (function () {
    function PlaylistComponent(sharedData, movieService, userService, router) {
        this.sharedData = sharedData;
        this.movieService = movieService;
        this.userService = userService;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.movies = [];
        this.saveDisabled = true;
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (user) {
            if (user.username == '') {
                _this.router.navigate(['/login']);
            }
            else {
                console.log("i am in playlist");
                _this.setUser();
                _this.getPlaylist();
            }
        });
    };
    PlaylistComponent.prototype.getPlaylist = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (currentUser) {
            _this.user = currentUser;
            var playlist = _this.user.cart;
            playlist.forEach(function (movieId) {
                _this.movieService.getMovieById(movieId).subscribe(function (movie) {
                    _this.movies.push(movie);
                });
            });
        });
        // this.sharedData.allMovies.subscribe( movies => {
        //   movies.forEach(element => {
        //     this.movies.push( element );
        //   });
        // });
    };
    PlaylistComponent.prototype.setUser = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (user) {
            _this.user = user;
        });
    };
    PlaylistComponent.prototype.drop = function (event) {
        this.saveDisabled = null;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.movies, event.previousIndex, event.currentIndex);
    };
    PlaylistComponent.prototype.updateCart = function () {
        var movieIds = [];
        this.movies.forEach(function (movie) {
            movieIds.push(movie._id);
        });
        this.userService.updatePlaylist(this.user, movieIds);
        this.saveDisabled = true;
        console.log(movieIds);
    };
    PlaylistComponent.prototype.movieDetails = function (movie) {
        this.router.navigateByUrl('/movie/' + movie._id);
    };
    PlaylistComponent.prototype.canPlay = function (movie) {
        return this.user.level >= movie.level;
    };
    PlaylistComponent.prototype.removeFromPlaylist = function (movie) {
        this.userService.deleteFromPlaylist(this.user, movie._id);
    };
    PlaylistComponent.prototype.play = function () {
    };
    PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__(/*! ./playlist.component.html */ "./src/app/playlist/playlist.component.html"),
            styles: [__webpack_require__(/*! ./playlist.component.scss */ "./src/app/playlist/playlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_movieServices__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _services_userServices__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PlaylistComponent);
    return PlaylistComponent;
}());



/***/ }),

/***/ "./src/app/recommended/recommended.component.html":
/*!********************************************************!*\
  !*** ./src/app/recommended/recommended.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav>\r\n  </app-nav>\r\n<p>\r\n  recommended works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/recommended/recommended.component.scss":
/*!********************************************************!*\
  !*** ./src/app/recommended/recommended.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY29tbWVuZGVkL3JlY29tbWVuZGVkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/recommended/recommended.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recommended/recommended.component.ts ***!
  \******************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var RecommendedComponent = /** @class */ (function () {
    function RecommendedComponent(sharedData, router) {
        this.sharedData = sharedData;
        this.router = router;
    }
    RecommendedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (user) {
            if (user.username == '') {
                _this.router.navigate(['/login']);
            }
            else {
                console.log("i am in router");
            }
        });
    };
    RecommendedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommended',
            template: __webpack_require__(/*! ./recommended.component.html */ "./src/app/recommended/recommended.component.html"),
            styles: [__webpack_require__(/*! ./recommended.component.scss */ "./src/app/recommended/recommended.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RecommendedComponent);
    return RecommendedComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\">\r\n  <div id=\"formContent\">\r\n    <!-- Tabs Titles -->\r\n\r\n    <!-- Icon -->\r\n    <div class=\"fadeIn first\">\r\n        <i class=\"far fa-id-card fa-lg\"></i>\r\n    </div>\r\n\r\n    <!-- Login Form -->\r\n    <form [formGroup]=\"registerForm\" novalidate>\r\n      <h5 *ngIf=\"!success\" class=\"error alert-danger\">confirm password and password do not match!!!</h5>\r\n      <input type=\"text\" id=\"displayname\"  formControlName=\"displayname\" #displayname class=\"fadeIn second\"  name=\"displayname\" placeholder=\"*Full Name\">\r\n      <div *ngIf=\"submitted && registerForm.controls.displayname.errors\" class=\"error\">\r\n          <label *ngIf=\"registerForm.controls.displayname.errors.required\" class=\"alert-danger\"> display name is required.</label>\r\n      </div>\r\n      <input type=\"text\" id=\"username\"  formControlName=\"username\" #username class=\"fadeIn second\"  name=\"username\" placeholder=\"*User Name\">\r\n      <div *ngIf=\"submitted && registerForm.controls.username.errors\" class=\"error\">\r\n          <label *ngIf=\"registerForm.controls.username.errors.required\" class=\"alert-danger\"> username is required.</label>\r\n      </div>\r\n      <div *ngIf=\"submitted && registerForm.controls.username.errors\" class=\"error\">\r\n          <label *ngIf=\"registerForm.controls.username.errors.pattern\" class=\"alert-danger\"> Enter valid username (only\r\n            alphanumeric and underscores).</label>\r\n      </div>\r\n      <input type=\"text\" id=\"card_details\"  formControlName=\"card_details\" #card_details class=\"fadeIn second\"  name=\"card_details\" placeholder=\"card details\">\r\n      <input type=\"password\" id=\"password\" formControlName=\"password\" #password  class=\"fadeIn third\" name=\"password\" placeholder=\"Password\">\r\n      <div *ngIf=\"submitted && registerForm.controls.password.errors\" class=\"error\">\r\n          <label *ngIf=\"registerForm.controls.password.errors.required\" class=\"alert-danger\"> password  is required.</label>\r\n      </div>\r\n      <input type=\"password\" id=\"confirm_password\" formControlName=\"confirm_password\" #confirm_password  class=\"fadeIn third\" name=\"confirm_password\" placeholder=\"Confirm Password\">\r\n      <div *ngIf=\"submitted && registerForm.controls.confirm_password.errors\" class=\"error\">\r\n          <label *ngIf=\"registerForm.controls.confirm_password.errors.required\" class=\"alert-danger\"> confirm password is required.</label>\r\n      </div>\r\n      <input (click)=\"onRegister(displayname.value,username.value,card_details.value,password.value,confirm_password.value)\" type=\"submit\" class=\"fadeIn fourth\" value=\"Register\">\r\n    </form>\r\n\r\n    <!-- Remind Passowrd -->\r\n   <!--  <div id=\"formFooter\">\r\n      <a class=\"underlineHover\" href=\"/register\">New User ? Create Account</a>\r\n    </div> -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* BASIC */\nhtml {\n  background-color: #56baed; }\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh; }\na {\n  color: #92badd;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400; }\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc; }\n.fa-id-card {\n  color: #5fbae9;\n  font-size: 3rem; }\n/* STRUCTURE */\n.wrapper {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 10%; }\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 30px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px; }\n/* TABS */\nh2.inactive {\n  color: #cccccc; }\nh2.active {\n  color: #0d0d0d;\n  border-bottom: 2px solid #5fbae9; }\n/* FORM TYPOGRAPHY*/\ninput[type=button], input[type=submit], input[type=reset] {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover {\n  background-color: #39ace7; }\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95); }\ninput[type=text], input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px; }\ninput[type=text]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #5fbae9; }\ninput[type=text]:placeholder {\n  color: #cccccc; }\ninput[type=submit] {\n  cursor: pointer; }\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s; }\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s; }\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s; }\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s; }\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s; }\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n.underlineHover:hover {\n  color: #0d0d0d; }\n.underlineHover:hover:after {\n  width: 100%; }\n/* OTHERS */\n*:focus {\n  outline: none; }\n#icon {\n  width: 60%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXG15LWFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFVBQUE7QUFFQTtFQUNJLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWEsRUFBQTtBQUdmO0VBQ0UsY0FBYztFQUNkLHFCQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7QUFJZDtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFJckIsY0FBQTtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBO0FBR2Q7RUFFRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosNENBQXlDO0VBQ3pDLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBRWxCLDRCQUE0QixFQUFBO0FBSzlCLFNBQUE7QUFFQTtFQUNFLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0MsRUFBQTtBQUtsQyxtQkFBQTtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsaURBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDLEVBQUE7QUFHbEM7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUVFLDhCQUE4QjtFQUc5QixzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVix5QkFBeUI7RUFLekIsZ0NBQWdDO0VBRWhDLDhCQUE4QixFQUFBO0FBR2hDO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQyxFQUFBO0FBR2xDO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0ksZUFBZSxFQUFBO0FBSW5CLGVBQUE7QUFFQSx1Q0FBQTtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtBQUczQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJDQUEyQztJQUMzQyxtQ0FBbUMsRUFBQTtFQUVyQztJQUNFLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZUFBZSxFQUFBLEVBQUE7QUFJbkI7RUFDRTtJQUNFLFVBQVU7SUFDViwyQ0FBMkM7SUFDM0MsbUNBQW1DLEVBQUE7RUFFckM7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWUsRUFBQSxFQUFBO0FBSW5CLGtDQUFBO0FBQ0E7RUFBNEI7SUFBTyxVQUFTLEVBQUE7RUFBSTtJQUFLLFVBQVMsRUFBQSxFQUFBO0FBRTlEO0VBQW9CO0lBQU8sVUFBUyxFQUFBO0VBQUk7SUFBSyxVQUFTLEVBQUEsRUFBQTtBQUV0RDtFQUNFLFVBQVM7RUFDVCxtQ0FBa0M7RUFFbEMsMkJBQTBCO0VBRTFCLHFDQUFvQztFQUVwQyw2QkFBNEI7RUFFNUIsOEJBQTZCO0VBRTdCLHNCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBO0FBR3JCLGtDQUFBO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxXQUFXLEVBQUE7QUFLYixXQUFBO0FBRUE7RUFDSSxhQUFhLEVBQUE7QUFHakI7RUFDRSxVQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgY29sb3I6ICM5MmJhZGQ7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDQwcHggOHB4IDEwcHggOHB4OyBcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuXHJcbiAgICAuZmEtaWQtY2FyZHtcclxuICAgICAgICBjb2xvcjogIzVmYmFlOTtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gIC8qIFNUUlVDVFVSRSAqL1xyXG4gIFxyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogVEFCUyAqL1xyXG4gIFxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogQU5JTUFUSU9OUyAqL1xyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuICAuZmFkZUluRG93biB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuICBcclxuICAuZmFkZUluIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5maXJzdCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnNlY29uZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLnRoaXJkIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZm91cnRoIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbiAgLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBPVEhFUlMgKi9cclxuICBcclxuICAqOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICB9IFxyXG4gIFxyXG4gICNpY29uIHtcclxuICAgIHdpZHRoOjYwJTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userServices */ "./src/app/services/userServices.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(sharedData, userService, formBuilder, router) {
        this.sharedData = sharedData;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"];
        this.submitted = false;
        this.success = true;
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.formBuilder.group({
            displayname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9_]+')]],
            card_details: [],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    RegisterComponent.prototype.onRegister = function (displayname, username, card_details, password, confirm_password) {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.valid) {
            this.user.displayName = displayname;
            this.user.username = username;
            this.user.password = password;
            this.user.level = 1;
            this.user.billing.ccNum = card_details.toInteger;
            this.user.billing.ccExp = "2021";
            this.user.billing.ccNum = 221;
            this.userService.addUser(this.user).subscribe(function (user) {
                _this.sharedData.setUser(user);
                sessionStorage.setItem("keyname", user.id);
                // console.log(this.sharedData.currentUser);
                _this.router.navigate(['/']);
            }, function (err) {
                _this.success = false;
                _this.router.navigate(['/register']);
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_userServices__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/movieServices.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movieServices.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MovieService = /** @class */ (function () {
    function MovieService(sharedData, http) {
        this.sharedData = sharedData;
        this.http = http;
    }
    MovieService.prototype.ngOnInit = function () { };
    MovieService.prototype.addMovie = function (movie) {
        var url = ('http://localhost:1234/movies');
        var options = httpOptions;
        return this.http.post(url, movie, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addMovie() failed")));
    };
    MovieService.prototype.updateMovie = function (oid, movie) {
        var url = ('http://localhost:1234/movies/{movie_id}').replace(/{movie_id}/g, movie._id['$oid']);
        var options = httpOptions;
        return this.http.put(url, movie, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("updateMovie() failed")));
    };
    MovieService.prototype.getMovieById = function (movieId) {
        var url = ('http://localhost:1234/movies/{movie_id}').replace(/{movie_id}/g, movieId);
        var options = httpOptions;
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getMovieById() failed")));
    };
    MovieService.prototype.getAllMovies = function () {
        var url = ('http://localhost:1234/movies');
        var options = httpOptions;
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getAllMovies() failed")));
    };
    MovieService.prototype.getTopRated = function () {
        var url = ('http://localhost:1234/movies/top');
        var options = httpOptions;
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTopRated() failed")));
    };
    MovieService.prototype.getRecent = function () {
        var url = ('http://localhost:1234/movies/recent');
        var options = httpOptions;
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTopRated() failed")));
    };
    MovieService.prototype.searchMovie = function (params) {
        var url = ('http://localhost:1234/movies');
        var options = httpOptions;
        options['params'] = params;
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("searchMovie() failed")));
    };
    /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
    MovieService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            //return of(result as T);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There was an error while processing your request. Please try again later.');
        };
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/services/userServices.ts":
/*!******************************************!*\
  !*** ./src/app/services/userServices.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(sharedData, http) {
        this.sharedData = sharedData;
        this.http = http;
    }
    UserService.prototype.ngOnInit = function () { };
    UserService.prototype.getUser = function (username) {
        var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, username);
        var options = httpOptions;
        // options['params'] = new HttpParams()
        //     .set('session_id',this.currUserId);
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUserById() failed")));
    };
    UserService.prototype.validateUser = function (username, password) {
        var url = ('http://localhost:1234/login');
        var options = httpOptions;
        console.log({ username: username, password: password });
        var queryParams = {
            'username': username,
            'password': password
        };
        return this.http.post(url, queryParams, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUserById() failed")));
    };
    UserService.prototype.addUser = function (user) {
        var url = ('http://localhost:1234/users');
        var options = httpOptions;
        return this.http.post(url, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched claim'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUserById() failed")));
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user.id);
        var options = httpOptions;
        return this.http.put(url, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            _this.sharedData.setUser(user);
            console.log('fetched claim');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUserById() failed")));
    };
    UserService.prototype.updatePlaylist = function (user, movieIds) {
        var _this = this;
        var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user.id);
        user.cart = movieIds;
        var options = httpOptions;
        return this.http.put(url, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            console.log('fetched claim');
            _this.sharedData.setUser(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUserById() failed")));
    };
    UserService.prototype.addToPlaylist = function (user, movieId) {
        var _this = this;
        if (user.cart.length === 5) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        }
        else {
            user.cart.push(movieId);
            var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user.id);
            var options = httpOptions;
            return this.http.put(url, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
                console.log('fetched claim');
                _this.sharedData.setUser(user);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUserById() failed")));
        }
    };
    UserService.prototype.deleteFromPlaylist = function (user, movieId) {
        var _this = this;
        // console.log('here2', user);
        // if( user.cart.length == 0 ){
        //   return new BehaviorSubject<boolean>(false);
        // } else {
        //   user.cart = user.cart.filter( function(value){
        //     return value != movieId;
        // });
        var url = ('http://localhost:1234/users/{user_id}').replace(/{user_id}/g, user.id);
        var options = httpOptions;
        user.cart = user.cart.filter(function (value) {
            return value != movieId;
        });
        console.log({ "delete service ": { user: user, url: url } });
        return this.http.put(url, user, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            console.log('fetched claim');
            _this.sharedData.setUser(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUserById() failed")));
        // }
    };
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            //return of(result as T);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There was an error while processing your request. Please try again later.');
        };
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/top-rated/top-rated.component.html":
/*!****************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div class=\"page\">\r\n  <h3 class=\"pageheader text-center\"> TOP RATED MOVIES </h3>\r\n  <div class=\"pagecontent w-100 padding50\">\r\n    <div class=\"draggable-list shadow-lg p-3 mb-5 bg-white rounded w-100\">\r\n      <div class=\"movie-tab w-100 row\" *ngFor=\"let movie of movies\">\r\n        <div class=\"col col-2\"><img class=\"poster\" [src]=\"movie.Poster\"/></div>\r\n        <div class=\"col\">\r\n            <h4 class=\"movie-title\">{{movie.Title}}&nbsp;&nbsp;&nbsp;&nbsp;<small>({{movie.year}})</small></h4>\r\n            <small>\r\n              <span *ngIf=\"movie.rated\" class=\"text-danger\">{{ movie.rated}} </span> | \r\n              <span *ngIf=\"movie.runtime\" class=\"text-danger\">{{ movie.runtime}} min </span> | \r\n              <span class=\"text-danger\" *ngFor=\"let g of movie.genres; last as isLast\">{{g}} <span *ngIf=\"!isLast\">, </span></span> \r\n            </small>\r\n            <p></p>\r\n            <span *ngIf=\"movie.plot\"><p>{{movie.plot}}</p></span>\r\n            <div *ngIf=\"movie.actors.length > 0\">\r\n              <span>Cast : </span>\r\n              <span *ngFor=\"let actor of movie.actors; last as isLast\">{{actor}}<span *ngIf=\"!isLast\">, </span></span>\r\n            </div>\r\n            <br>\r\n            <div *ngIf=\"movie.awards\">\r\n                <span><i class=\"fas fa-trophy text-secondary\"></i></span>&nbsp;&nbsp;&nbsp;\r\n                <span>{{movie.awards.text}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-3\">\r\n          <div class=\"row\">\r\n            <button class=\"btn btn-info savebutton\"  (click)=\"movieDetails(movie)\"> View Details </button>\r\n            <button class=\"btn btn-warning savebutton\"  *ngIf=\"!canPlay(movie)\" (click)=\"addToPlayList(movie)\"> Get Premium </button>\r\n            <button class=\"btn btn-info savebutton\"  *ngIf=\"canPlay(movie) && !checkMovieInCart(movie)\" (click)=\"addToPlayList(movie)\"> Add To Playlist </button>\r\n            <button class=\"btn btn-info savebutton\"  *ngIf=\"canPlay(movie) && checkMovieInCart(movie)\" (click)=\"play()\"> Play </button>\r\n          </div>\r\n          <div *ngIf=\"movie.imdb && movie.imdb.rating\" class=\"ratings\"><i class=\"far fa-star text-danger\"></i> IMDB - {{movie.imdb.rating}}</div>\r\n          <div *ngIf=\"movie.metacritic\" class=\"ratings\"><i class=\"far fa-star text-danger\"></i> Critic - {{movie.metacritic}}</div>\r\n          <div *ngIf=\"movie.tomato && movie.tomato.rating\" class=\"ratings\"><i class=\"far fa-star text-danger\"></i> Tomato - {{movie.tomato.rating}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.scss":
/*!****************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  background-color: #e9ecef;\n  min-height: 1000px; }\n\n.pageheader {\n  padding-top: 50px;\n  padding-bottom: 30px;\n  color: darkslategrey;\n  font-stretch: expanded;\n  font-variant: small-caps;\n  font-family: Arial, Helvetica, sans-serif; }\n\n.padding50 {\n  padding-left: 50px;\n  padding-right: 50px; }\n\n.draggable-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 3px 2px 50px 12px rgba(0, 0, 0, 0.12); }\n\n.movie-tab {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  font-size: 14px; }\n\n.movie-tab:hover {\n    box-shadow: 3px 2px 50px 12px rgba(0, 0, 0, 0.04) inset; }\n\n.movie-tab .poster {\n    max-height: 250px; }\n\n.movie-tab .ratings {\n    margin-top: 6px; }\n\n.savebutton {\n  float: right;\n  margin-right: 30px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLXJhdGVkL0Q6XFxteS1hcHAvc3JjXFxhcHBcXHRvcC1yYXRlZFxcdG9wLXJhdGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXdCO0VBQ3hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIseUNBQXlDLEVBQUE7O0FBRzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaURBQWlELEVBQUE7O0FBR3JEO0VBQ00sa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQVZyQjtJQVlVLHVEQUF1RCxFQUFBOztBQVpqRTtJQWVVLGlCQUFpQixFQUFBOztBQWYzQjtJQWtCVSxlQUFlLEVBQUE7O0FBSXpCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvcC1yYXRlZC90b3AtcmF0ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2U5ZWNlZjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2VoZWFkZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbiAgICBmb250LXN0cmV0Y2g6IGV4cGFuZGVkO1xyXG4gICAgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYWRkaW5nNTB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAuZHJhZ2dhYmxlLWxpc3Qge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJveC1zaGFkb3c6IDNweCAycHggNTBweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG5cclxuICAubW92aWUtdGFiIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAycHggNTBweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCkgaW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3N0ZXJ7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmF0aW5nc3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIH1cclxuICB9XHJcblxyXG4gIC5zYXZlYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.ts":
/*!**************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.ts ***!
  \**************************************************/
/*! exports provided: TopRatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedComponent", function() { return TopRatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _services_userServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userServices */ "./src/app/services/userServices.ts");
/* harmony import */ var _services_movieServices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/movieServices */ "./src/app/services/movieServices.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TopRatedComponent = /** @class */ (function () {
    function TopRatedComponent(sharedData, movieService, userService, router) {
        this.sharedData = sharedData;
        this.movieService = movieService;
        this.userService = userService;
        this.router = router;
        this.movies = [];
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    TopRatedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (user) {
            if (user.username == '') {
                _this.router.navigate(['/login']);
            }
            else {
                console.log("i am in router");
                _this.setUser();
                _this.getTopRated();
            }
        });
    };
    TopRatedComponent.prototype.getTopRated = function () {
        var _this = this;
        this.movieService.getTopRated().subscribe(function (movies) {
            movies.forEach(function (movie) {
                _this.movies.push(movie);
            });
        });
        // this.sharedData.allMovies.subscribe( movies => {
        //   movies.forEach(element => {
        //     this.movies.push( element );
        //   });
        // });
    };
    TopRatedComponent.prototype.setUser = function () {
        var _this = this;
        this.sharedData.currentUser.subscribe(function (user) {
            _this.user = user;
        });
    };
    TopRatedComponent.prototype.addToPlayList = function (movie) {
        this.userService.addToPlaylist(this.user, movie._id);
    };
    TopRatedComponent.prototype.checkMovieInCart = function (movie) {
        this.user.cart.includes(movie._id);
    };
    TopRatedComponent.prototype.movieDetails = function (movie) {
        this.router.navigateByUrl('/movie/' + movie._id);
    };
    TopRatedComponent.prototype.canPlay = function (movie) {
        movie.level <= this.user.level;
    };
    TopRatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-rated',
            template: __webpack_require__(/*! ./top-rated.component.html */ "./src/app/top-rated/top-rated.component.html"),
            styles: [__webpack_require__(/*! ./top-rated.component.scss */ "./src/app/top-rated/top-rated.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_movieServices__WEBPACK_IMPORTED_MODULE_4__["MovieService"],
            _services_userServices__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TopRatedComponent);
    return TopRatedComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map