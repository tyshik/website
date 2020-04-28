(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _question_block_question_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question-block/question-block.component */ "./src/app/question-block/question-block.component.ts");
/* harmony import */ var _center_column_center_column_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./center-column/center-column.component */ "./src/app/center-column/center-column.component.ts");






const routes = [
    { path: '', component: _center_column_center_column_component__WEBPACK_IMPORTED_MODULE_3__["CenterColumnComponent"] },
    { path: 'messages', component: _question_block_question_block_component__WEBPACK_IMPORTED_MODULE_2__["QuestionBlockComponent"] },
    { path: '**', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_2__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_block_question_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question-block/question-block.component */ "./src/app/question-block/question-block.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _left_column_left_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./left-column/left-column.component */ "./src/app/left-column/left-column.component.ts");
/* harmony import */ var _right_column_right_column_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./right-column/right-column.component */ "./src/app/right-column/right-column.component.ts");
/* harmony import */ var _center_column_center_column_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./center-column/center-column.component */ "./src/app/center-column/center-column.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


















// import { AngularFireDatabaseModule } from '@angular/fire';



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _question_block_question_block_component__WEBPACK_IMPORTED_MODULE_4__["QuestionBlockComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _body_body_component__WEBPACK_IMPORTED_MODULE_7__["BodyComponent"],
        _left_column_left_column_component__WEBPACK_IMPORTED_MODULE_8__["LeftColumnComponent"],
        _right_column_right_column_component__WEBPACK_IMPORTED_MODULE_9__["RightColumnComponent"],
        _center_column_center_column_component__WEBPACK_IMPORTED_MODULE_10__["CenterColumnComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _question_block_question_block_component__WEBPACK_IMPORTED_MODULE_4__["QuestionBlockComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _body_body_component__WEBPACK_IMPORTED_MODULE_7__["BodyComponent"],
                    _left_column_left_column_component__WEBPACK_IMPORTED_MODULE_8__["LeftColumnComponent"],
                    _right_column_right_column_component__WEBPACK_IMPORTED_MODULE_9__["RightColumnComponent"],
                    _center_column_center_column_component__WEBPACK_IMPORTED_MODULE_10__["CenterColumnComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_11__["MessagesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _right_column_right_column_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../right-column/right-column.component */ "./src/app/right-column/right-column.component.ts");




class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 3, vars: 0, consts: [[1, "body"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-right-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _right_column_right_column_component__WEBPACK_IMPORTED_MODULE_2__["RightColumnComponent"]], styles: [".body[_ngcontent-%COMP%] {\r\n    overflow: auto;  \r\n    \r\n    background-color: #333333;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwwRUFBMEU7QUFDOUUiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcclxuICAgIG92ZXJmbG93OiBhdXRvOyAgXHJcbiAgICAvKiBwYWRkaW5nLXRvcDogMTBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTsgKi9cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-body',
                templateUrl: './body.component.html',
                styleUrls: ['./body.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/center-column/center-column.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/center-column/center-column.component.ts ***!
  \**********************************************************/
/*! exports provided: CenterColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterColumnComponent", function() { return CenterColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CenterColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
CenterColumnComponent.ɵfac = function CenterColumnComponent_Factory(t) { return new (t || CenterColumnComponent)(); };
CenterColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CenterColumnComponent, selectors: [["app-center-column"]], decls: 2, vars: 0, consts: [[1, "main"], [1, "canvas"]], template: function CenterColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\r\n    float:left;\r\n    width:80%;\r\n    \r\n  }\r\n\r\n  @media only screen and (max-width:620px) {\r\n    \r\n    .main[_ngcontent-%COMP%] {\r\n      width:100%;\r\n    }\r\n  }\r\n\r\n  .canvas[_ngcontent-%COMP%] {\r\n      \r\n      margin-top: 50px;\r\n      background-color: white;\r\n      width: 90%;\r\n      position: relative;\r\n      left: 50%;\r\n      transform: translate(-50%, 0);\r\n      border-radius: 10px;\r\n      box-shadow: 0px 0px 22px -2px rgba(0,0,0,1);\r\n      \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VudGVyLWNvbHVtbi9jZW50ZXItY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QjtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUVBO01BQ0ksdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsNkJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQiwyQ0FBMkM7TUFDM0Msa0JBQWtCO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2VudGVyLWNvbHVtbi9jZW50ZXItY29sdW1uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgLyogcGFkZGluZzowIDI1cHg7ICovXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjIwcHgpIHtcclxuICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gICAgLm1haW4ge1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhbnZhcyB7XHJcbiAgICAgIC8qIG1hcmdpbi1sZWZ0OiAzMHB4OyAqL1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTJweCByZ2JhKDAsMCwwLDEpO1xyXG4gICAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CenterColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-center-column',
                templateUrl: './center-column.component.html',
                styleUrls: ['./center-column.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A9 copyright tyshik.ml\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n    background-color:#1D1A1C;\r\n    text-align:center;\r\n    color: white;\r\n    padding:10px;\r\n    box-shadow: 0px 0px 22px -2px rgba(0,0,0,1);\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzFEMUExQztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC0ycHggcmdiYSgwLDAsMCwxKTtcclxuICAgIC8qIG1hcmdpbi10b3A6N3B4OyAqL1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 0, consts: [[1, "header"], [1, "zdyn"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    \r\n    background-image: url(\"/../../assets/images/5.gif\");\r\n    background-position: center;\r\n    box-sizing:border-box;\r\n    position: relative;\r\n    height: 180px;\r\n    \r\n    \r\n    \r\n    \r\n    box-shadow: 0px 0px 22px -2px rgba(0,0,0,1);\r\n    \r\n    \r\n    \r\n} \r\n\r\n.zdyn[_ngcontent-%COMP%] {\r\n    margin-left: 35px;\r\n    width: 180px;\r\n    height: 180px;\r\n    background-image: url(\"/../../assets/images/7.png\");\r\n    background-position: center;\r\n    background-size: cover;\r\n} \r\n\r\n@media only screen and (max-width:900px) {\r\n    \r\n    .zdyn[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLG1EQUFtRDtJQUNuRCwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxnQkFBZ0I7O0lBRWhCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1EQUFtRDtJQUNuRCwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IzY3M0FCNzsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi8uLi9hc3NldHMvaW1hZ2VzLzUuZ2lmXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXHJcbiAgICAvKiB0ZXh0LWFsaWduOmNlbnRlcjsgKi9cclxuICAgIC8qIGZvbnQtZmFtaWx5OlZlcmRhbmE7ICovXHJcbiAgICAvKiBjb2xvcjp3aGl0ZTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtMnB4IHJnYmEoMCwwLDAsMSk7XHJcbiAgICAvKiB6LWluZGV4OiAxOyAqL1xyXG4gICAgXHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiA1MHB4OyAqL1xyXG59IFxyXG5cclxuLnpkeW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uLy4uL2Fzc2V0cy9pbWFnZXMvNy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTAwcHgpIHtcclxuICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gICAgLnpkeW4ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/left-column/left-column.component.ts":
/*!******************************************************!*\
  !*** ./src/app/left-column/left-column.component.ts ***!
  \******************************************************/
/*! exports provided: LeftColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftColumnComponent", function() { return LeftColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LeftColumnComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeftColumnComponent.ɵfac = function LeftColumnComponent_Factory(t) { return new (t || LeftColumnComponent)(); };
LeftColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftColumnComponent, selectors: [["app-left-column"]], decls: 7, vars: 2, consts: [[1, "left-column-wrapper"], [1, "menu"], [1, "buttons"], [1, "button", 3, "routerLink"]], template: function LeftColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/messages");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".left-column-wrapper[_ngcontent-%COMP%] {\r\n    float:left;\r\n    width:20%;\r\n    padding-top: 15px;\r\n    height: 100%;\r\n    background-color: #4D4548;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    margin-left: 20px;\r\n    background-color:#ffffff;\r\n    border-radius: 10px;\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n  }\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n    \r\n}\r\n\r\n.menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n    background-color:#e7a9e2;\r\n    border: 0;\r\n    \r\n    \r\n    \r\n    display:block;\r\n    width: 100%;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n    height: 50px;\r\n    color:rgb(255, 255, 255);\r\n  }\r\n\r\n.menu[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\r\n    background-color: #aaaaaa;\r\n  }\r\n\r\n@media only screen and (max-width:620px) {\r\n    \r\n    .menu[_ngcontent-%COMP%] {\r\n      width:100%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1jb2x1bW4vbGVmdC1jb2x1bW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixvRUFBb0U7RUFDdEU7O0FBRUY7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsU0FBUztJQUNULHdFQUF3RTtJQUN4RSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QjtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbGVmdC1jb2x1bW4vbGVmdC1jb2x1bW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LWNvbHVtbi13cmFwcGVyIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RDQ1NDg7XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gIH1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIC8qIHBhZGRpbmc6IDI1cHg7ICovXHJcbn1cclxuXHJcbi5tZW51IC5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTdhOWUyO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xOSksIDAgM3B4IDNweCByZ2JhKDAsMCwwLDAuMjMpOyAqL1xyXG4gICAgLyogbWFyZ2luOjhweDsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6MTVweDsgKi9cclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYyMHB4KSB7XHJcbiAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cclxuICAgIC5tZW51IHtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-column',
                templateUrl: './left-column.component.html',
                styleUrls: ['./left-column.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { "warning": a0 }; };
class MessagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], inputs: { title: "title", text: "text", isWarning: "isWarning" }, decls: 5, vars: 5, consts: [[1, "message", 3, "ngClass"], [1, "text"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isWarning));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".message[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding:15px;\r\n    \r\n    margin-right: 25px;\r\n    margin-left: 25px;\r\n    margin-bottom: 20px;\r\n    text-align:center;\r\n    border-radius: 10px;\r\n    \r\n    box-shadow: 0px 0px 22px -2px rgba(0,0,0,1);\r\n  }\r\n\r\n  .message[_ngcontent-%COMP%]:hover {\r\n      transform: scale(1.04);\r\n  }\r\n\r\n  .text[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n  }\r\n\r\n  .warning[_ngcontent-%COMP%] {\r\n    background-color: #FDAD04;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNENBQTRDO0lBQzVDLDJDQUEyQztFQUM3Qzs7RUFFQTtNQUNJLHNCQUFzQjtFQUMxQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIC8qIG1hcmdpbi10b3A6MTVweDsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDE2cHggMTNweCAxNnB4IDBweCAjMDAwMDAwOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC0ycHggcmdiYSgwLDAsMCwxKTtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAud2FybmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRBRDA0O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isWarning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/question-block/question-block.component.ts":
/*!************************************************************!*\
  !*** ./src/app/question-block/question-block.component.ts ***!
  \************************************************************/
/*! exports provided: QuestionBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBlockComponent", function() { return QuestionBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class QuestionBlockComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuestionBlockComponent.ɵfac = function QuestionBlockComponent_Factory(t) { return new (t || QuestionBlockComponent)(); };
QuestionBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionBlockComponent, selectors: [["app-question-block"]], decls: 2, vars: 0, consts: [[1, "main"]], template: function QuestionBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\r\n    float:left;\r\n    width:60%;\r\n    padding:0 20px;\r\n  }\r\n\r\n  @media only screen and (max-width:620px) {\r\n    \r\n    .main[_ngcontent-%COMP%] {\r\n      width:100%;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3Rpb24tYmxvY2svcXVlc3Rpb24tYmxvY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QjtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvcXVlc3Rpb24tYmxvY2svcXVlc3Rpb24tYmxvY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBwYWRkaW5nOjAgMjBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MjBweCkge1xyXG4gICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXHJcbiAgICAubWFpbiB7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question-block',
                templateUrl: './question-block.component.html',
                styleUrls: ['./question-block.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/right-column/right-column.component.ts":
/*!********************************************************!*\
  !*** ./src/app/right-column/right-column.component.ts ***!
  \********************************************************/
/*! exports provided: RightColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightColumnComponent", function() { return RightColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../messages/messages.component */ "./src/app/messages/messages.component.ts");










function RightColumnComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-messages", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", message_r1.title)("text", message_r1.text)("isWarning", message_r1.warning);
} }
// class Message {
//   title: string;
//   text:string;
//   warning: boolean;
//   number: number;
// }
class RightColumnComponent {
    constructor(db) {
        this.db = db;
        this.messages = [];
        db.collection('messages').valueChanges().subscribe(data => {
            this.messages = data;
            console.log(data);
            this.messages = this.messages.sort((a, b) => a.number < b.number ? -1 : 1);
        });
        this.newMessage = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "title": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "text": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
    }
    addMessage() {
        if (this.newMessage.valid) {
            this.db.collection('messages').add({ title: this.title, text: this.text, warning: false, number: this.messages.length + 1 });
        }
    }
    deleteMessage() {
        this.db.doc('messages/');
    }
}
RightColumnComponent.ɵfac = function RightColumnComponent_Factory(t) { return new (t || RightColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
RightColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightColumnComponent, selectors: [["app-right-column"]], decls: 17, vars: 4, consts: [[1, "right-column-wrapper"], [1, "messages"], [4, "ngFor", "ngForOf"], [1, "input"], [2, "text-align", "center"], [1, "form", 3, "formGroup"], [1, "example-full-width"], ["matInput", "", "name", "title", "formControlName", "title", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "text", "formControlName", "text", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "submit", 3, "click"], [3, "title", "text", "isWarning"]], template: function RightColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RightColumnComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightColumnComponent_Template_input_ngModelChange_10_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Leave a comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RightColumnComponent_Template_textarea_ngModelChange_14_listener($event) { return ctx.text = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RightColumnComponent_Template_button_click_15_listener() { return ctx.addMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"]], styles: [".right-column-wrapper[_ngcontent-%COMP%] {\r\n    float:left;\r\n    width:20%;\r\n    padding-top: 30px;\r\n    \r\n    \r\n}\r\n\r\n  @media only screen and (max-width:620px) {\r\n    \r\n    .right-column-wrapper[_ngcontent-%COMP%] {\r\n      width:100%;\r\n    }\r\n  }\r\n\r\n  .input[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding:15px;\r\n    \r\n    margin-right: 25px;\r\n    margin-left: 25px;\r\n    margin-bottom: 20px;\r\n    text-align:left;\r\n    border-radius: 10px;\r\n    \r\n    box-shadow: 0px 0px 22px -2px rgba(0,0,0,1);\r\n  }\r\n\r\n  .form[_ngcontent-%COMP%] {\r\n    \r\n    \r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n  .example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .submit[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translate(-50%, 0);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmlnaHQtY29sdW1uL3JpZ2h0LWNvbHVtbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLCtCQUErQjtBQUNuQzs7RUFFRTtJQUNFLHVCQUF1QjtJQUN2QjtNQUNFLFVBQVU7SUFDWjtFQUNGOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw0Q0FBNEM7SUFDNUMsMkNBQTJDO0VBQzdDOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsNkJBQTZCO0VBQy9CIiwiZmlsZSI6InNyYy9hcHAvcmlnaHQtY29sdW1uL3JpZ2h0LWNvbHVtbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LWNvbHVtbi13cmFwcGVyIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDoyMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIC8qIGhlaWdodDogMTAwMHB4OyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRENDU0ODsgKi9cclxufVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjIwcHgpIHtcclxuICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xyXG4gICAgLnJpZ2h0LWNvbHVtbi13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIC8qIG1hcmdpbi10b3A6MTVweDsgKi9cclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKiBib3gtc2hhZG93OiAxNnB4IDEzcHggMTZweCAwcHggIzAwMDAwMDsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtMnB4IHJnYmEoMCwwLDAsMSk7XHJcbiAgfVxyXG5cclxuICAuZm9ybSB7XHJcbiAgICAvKiBtaW4td2lkdGg6IDE1MHB4OyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zdWJtaXQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gIH1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-right-column',
                templateUrl: './right-column.component.html',
                styleUrls: ['./right-column.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAB495f6beKbKAZ0-diC0oOScHp_1VMK7s",
        authDomain: "website-8ad3c.firebaseapp.com",
        databaseURL: "https://website-8ad3c.firebaseio.com",
        projectId: "website-8ad3c",
        storageBucket: "website-8ad3c.appspot.com",
        messagingSenderId: "685694395249",
        appId: "1:685694395249:web:74d12b28a6d6022b47ccd0",
        measurementId: "G-6YJ0HX9CJN"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map