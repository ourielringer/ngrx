function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_of_from_of_from_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/of-from/of-from.component */
    "./src/app/components/of-from/of-from.component.ts");
    /* harmony import */


    var _components_map_concat_map_concat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/map-concat/map-concat.component */
    "./src/app/components/map-concat/map-concat.component.ts");
    /* harmony import */


    var _components_of_from_delay_of_from_delay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/of-from-delay/of-from-delay.component */
    "./src/app/components/of-from-delay/of-from-delay.component.ts");
    /* harmony import */


    var _components_merge_merge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/merge/merge.component */
    "./src/app/components/merge/merge.component.ts");
    /* harmony import */


    var _components_subject_books_shop_books_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/subject/books-shop/books-shop.component */
    "./src/app/components/subject/books-shop/books-shop.component.ts");
    /* harmony import */


    var _components_subject_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/subject/add-book/add-book.component */
    "./src/app/components/subject/add-book/add-book.component.ts");
    /* harmony import */


    var _components_subject_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/subject/book-list/book-list.component */
    "./src/app/components/subject/book-list/book-list.component.ts");
    /* harmony import */


    var _components_from_event_mouse_from_event_mouse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/from-event-mouse/from-event-mouse.component */
    "./src/app/components/from-event-mouse/from-event-mouse.component.ts");
    /* harmony import */


    var _components_throttle_time_throttle_time_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/throttle-time/throttle-time.component */
    "./src/app/components/throttle-time/throttle-time.component.ts");
    /* harmony import */


    var _components_buffers_buffers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/buffers/buffers.component */
    "./src/app/components/buffers/buffers.component.ts");
    /* harmony import */


    var _components_http_client_http_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/http-client/http-client.component */
    "./src/app/components/http-client/http-client.component.ts");
    /* harmony import */


    var _ngrx_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./ngrx/add-event/add-event.component */
    "./src/app/ngrx/add-event/add-event.component.ts");
    /* harmony import */


    var _ngrx_admin_events_list_admin_events_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./ngrx/admin-events-list/admin-events-list.component */
    "./src/app/ngrx/admin-events-list/admin-events-list.component.ts");

    var routes = [{
      path: 'step-a-from-of',
      component: _components_of_from_of_from_component__WEBPACK_IMPORTED_MODULE_4__["OfFromComponent"]
    }, {
      path: 'step-b-map-concat',
      component: _components_map_concat_map_concat_component__WEBPACK_IMPORTED_MODULE_5__["MapConcatComponent"]
    }, {
      path: 'step-c-concatMap-delay',
      component: _components_of_from_delay_of_from_delay_component__WEBPACK_IMPORTED_MODULE_6__["ConcatMapDelayComponent"]
    }, {
      path: 'step-d-merge',
      component: _components_merge_merge_component__WEBPACK_IMPORTED_MODULE_7__["MergeComponent"]
    }, {
      path: 'step-e-subject',
      component: _components_subject_books_shop_books_shop_component__WEBPACK_IMPORTED_MODULE_8__["BooksShopComponent"]
    }, {
      path: 'step-f-fromevent',
      component: _components_from_event_mouse_from_event_mouse_component__WEBPACK_IMPORTED_MODULE_11__["FromEventMouseComponent"]
    }, {
      path: 'step-g-throttle',
      component: _components_throttle_time_throttle_time_component__WEBPACK_IMPORTED_MODULE_12__["ThrottleTimeComponent"]
    }, {
      path: 'step-h-buffers',
      component: _components_buffers_buffers_component__WEBPACK_IMPORTED_MODULE_13__["BuffersComponent"]
    }, {
      path: 'step-i-http',
      component: _components_http_client_http_client_component__WEBPACK_IMPORTED_MODULE_14__["HttpClientComponent"]
    }, {
      path: 'step-j-ngrx',
      component: _ngrx_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_15__["AddEventComponent"]
    }, {
      path: 'step-j-ngrx-admin',
      component: _ngrx_admin_events_list_admin_events_list_component__WEBPACK_IMPORTED_MODULE_16__["AdminEventsListComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        declarations: [_components_of_from_of_from_component__WEBPACK_IMPORTED_MODULE_4__["OfFromComponent"], _components_map_concat_map_concat_component__WEBPACK_IMPORTED_MODULE_5__["MapConcatComponent"], _components_of_from_delay_of_from_delay_component__WEBPACK_IMPORTED_MODULE_6__["ConcatMapDelayComponent"], _components_merge_merge_component__WEBPACK_IMPORTED_MODULE_7__["MergeComponent"], _components_subject_books_shop_books_shop_component__WEBPACK_IMPORTED_MODULE_8__["BooksShopComponent"], _components_subject_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__["BookListComponent"], _components_subject_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__["AddBookComponent"], _components_from_event_mouse_from_event_mouse_component__WEBPACK_IMPORTED_MODULE_11__["FromEventMouseComponent"], _components_throttle_time_throttle_time_component__WEBPACK_IMPORTED_MODULE_12__["ThrottleTimeComponent"], _components_buffers_buffers_component__WEBPACK_IMPORTED_MODULE_13__["BuffersComponent"], _components_http_client_http_client_component__WEBPACK_IMPORTED_MODULE_14__["HttpClientComponent"], _ngrx_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_15__["AddEventComponent"], _ngrx_admin_events_list_admin_events_list_component__WEBPACK_IMPORTED_MODULE_16__["AdminEventsListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          declarations: [_components_of_from_of_from_component__WEBPACK_IMPORTED_MODULE_4__["OfFromComponent"], _components_map_concat_map_concat_component__WEBPACK_IMPORTED_MODULE_5__["MapConcatComponent"], _components_of_from_delay_of_from_delay_component__WEBPACK_IMPORTED_MODULE_6__["ConcatMapDelayComponent"], _components_merge_merge_component__WEBPACK_IMPORTED_MODULE_7__["MergeComponent"], _components_subject_books_shop_books_shop_component__WEBPACK_IMPORTED_MODULE_8__["BooksShopComponent"], _components_subject_book_list_book_list_component__WEBPACK_IMPORTED_MODULE_10__["BookListComponent"], _components_subject_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__["AddBookComponent"], _components_from_event_mouse_from_event_mouse_component__WEBPACK_IMPORTED_MODULE_11__["FromEventMouseComponent"], _components_throttle_time_throttle_time_component__WEBPACK_IMPORTED_MODULE_12__["ThrottleTimeComponent"], _components_buffers_buffers_component__WEBPACK_IMPORTED_MODULE_13__["BuffersComponent"], _components_http_client_http_client_component__WEBPACK_IMPORTED_MODULE_14__["HttpClientComponent"], _ngrx_add_event_add_event_component__WEBPACK_IMPORTED_MODULE_15__["AddEventComponent"], _ngrx_admin_events_list_admin_events_list_component__WEBPACK_IMPORTED_MODULE_16__["AdminEventsListComponent"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/step-a-from-of"];
    };

    var _c1 = function _c1() {
      return ["/step-b-map-concat"];
    };

    var _c2 = function _c2() {
      return ["/step-c-concatMap-delay"];
    };

    var _c3 = function _c3() {
      return ["/step-d-merge"];
    };

    var _c4 = function _c4() {
      return ["/step-e-subject"];
    };

    var _c5 = function _c5() {
      return ["/step-f-fromevent"];
    };

    var _c6 = function _c6() {
      return ["/step-g-throttle"];
    };

    var _c7 = function _c7() {
      return ["/step-h-buffers"];
    };

    var _c8 = function _c8() {
      return ["/step-i-http"];
    };

    var _c9 = function _c9() {
      return ["/step-j-ngrx"];
    };

    var _c10 = function _c10() {
      return ["/step-j-ngrx-admin"];
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([1, 2, 3, 4, 5, 6]);
      this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([1, 2, 3, 4, 5, 6]);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 26,
      vars: 22,
      consts: [[1, "container"], [1, "navbar"], ["routerLinkActive", "router-link-active", 3, "routerLink"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "from and of");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "map and concat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "concatMap and delay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "merge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "subject");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "fromEvent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "throttle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "buffers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "http");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ngrx");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ngrx admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c10));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  -webkit-margin-start: 20px;\r\n          margin-inline-start: 20px;\r\n  -webkit-margin-end: 20px;\r\n          margin-inline-end: 20px;\r\n  background-color: darkkhaki;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  padding: 5px;\r\n  border-bottom: 1px saddlebrown solid;\r\n  border-left: 1px saddlebrown solid;\r\n  border-right: 1px saddlebrown solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBeUI7VUFBekIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAyMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcclxufVxyXG5cclxuLm5hdmJhciA+ZGl2IHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzYWRkbGVicm93biBzb2xpZDtcclxuICBib3JkZXItbGVmdDogMXB4IHNhZGRsZWJyb3duIHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNhZGRsZWJyb3duIHNvbGlkO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ngrx/store/event */
    "./src/app/ngrx/store/event.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
        events: _ngrx_store_event__WEBPACK_IMPORTED_MODULE_7__["reducer"]
      }, {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
        maxAge: 25
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
            events: _ngrx_store_event__WEBPACK_IMPORTED_MODULE_7__["reducer"]
          }, {
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            }
          }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
            maxAge: 25
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/buffers/buffers.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/buffers/buffers.component.ts ***!
    \*********************************************************/

  /*! exports provided: BuffersComponent */

  /***/
  function srcAppComponentsBuffersBuffersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuffersComponent", function () {
      return BuffersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BuffersComponent = /*#__PURE__*/function () {
      function BuffersComponent() {
        _classCallCheck(this, BuffersComponent);
      }

      _createClass(BuffersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Create an observable that emits a value every second
          var myInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000); //Create an observable that emits every time document is clicked

          var bufferBy = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click');
          /*
          Collect all values emitted by our interval observable until we click document.
           This will cause the bufferBy Observable to emit a value, satisfying the buffer.
           Pass us all collected values since last buffer as an array.
          */

          var myBufferedInterval = myInterval.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["buffer"])(bufferBy)); //Print values to console
          //ex. output: [1,2,3] ... [4,5,6,7,8]

          var subscribe = myBufferedInterval.subscribe(function (val) {
            return console.log(' Buffered Values:', val);
          });
        }
      }]);

      return BuffersComponent;
    }();

    BuffersComponent.ɵfac = function BuffersComponent_Factory(t) {
      return new (t || BuffersComponent)();
    };

    BuffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuffersComponent,
      selectors: [["app-buffers"]],
      decls: 0,
      vars: 0,
      template: function BuffersComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVmZmVycy9idWZmZXJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-buffers',
          templateUrl: './buffers.component.html',
          styleUrls: ['./buffers.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/from-event-mouse/from-event-mouse.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/from-event-mouse/from-event-mouse.component.ts ***!
    \***************************************************************************/

  /*! exports provided: FromEventMouseComponent */

  /***/
  function srcAppComponentsFromEventMouseFromEventMouseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FromEventMouseComponent", function () {
      return FromEventMouseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = ["startBtn"];
    var _c1 = ["pauseBtn"];
    var _c2 = ["resetBtn"];

    var FromEventMouseComponent = /*#__PURE__*/function () {
      function FromEventMouseComponent() {
        _classCallCheck(this, FromEventMouseComponent);

        this.counter = 0;
        this.tickData = {
          tickSpeed: 500
        };
      }

      _createClass(FromEventMouseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          console.log(this.startBtn.nativeElement); //create stream 1

          this.startBtn$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.startBtn.nativeElement, "click").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            return console.log(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(true)); //create stream 2

          this.pauseBtn$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.pauseBtn.nativeElement, "click").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) {
            return console.log(res);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(false)); //create stream 3 

          this.resetBtn$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.resetBtn.nativeElement, "click").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(false)); // process values from both streams

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.startBtn$, this.pauseBtn$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (isTicking) {
            return isTicking ? //emit value in sequence every 1 second
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(_this.tickData.tickSpeed) : // return uncompleted observable
            rxjs__WEBPACK_IMPORTED_MODULE_1__["NEVER"];
          } //try this and see what happen
          // of(1)
          ) //  ,scan((acc:number)=>acc++)
          //  ,scan((acc:number)=>++acc)
          , Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.resetBtn$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(40)).subscribe(function (res) {
            console.log(res);
            _this.counter = res;
          }); // this.startBtnSubscription = this.startBtn$.subscribe()
          // this.pauseBtnSubscription = this.pauseBtn$.subscribe()
        }
      }, {
        key: "pause",
        value: function pause() {}
      }, {
        key: "start",
        value: function start() {}
      }]);

      return FromEventMouseComponent;
    }();

    FromEventMouseComponent.ɵfac = function FromEventMouseComponent_Factory(t) {
      return new (t || FromEventMouseComponent)();
    };

    FromEventMouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FromEventMouseComponent,
      selectors: [["app-from-event-mouse"]],
      viewQuery: function FromEventMouseComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.startBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pauseBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resetBtn = _t.first);
        }
      },
      decls: 15,
      vars: 1,
      consts: [[3, "click"], ["startBtn", ""], [3, "pause"], ["pauseBtn", ""], ["resetBtn", ""]],
      template: function FromEventMouseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FromEventMouseComponent_Template_button_click_5_listener() {
            return ctx.start();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pause", function FromEventMouseComponent_Template_button_pause_8_listener() {
            return ctx.pause();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " pause ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "stop observable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.counter);
        }
      },
      styles: ["button[_ngcontent-%COMP%]{\r\n  margin: 20px;\r\n  font-size: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mcm9tLWV2ZW50LW1vdXNlL2Zyb20tZXZlbnQtbW91c2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mcm9tLWV2ZW50LW1vdXNlL2Zyb20tZXZlbnQtbW91c2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbntcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromEventMouseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-from-event-mouse',
          templateUrl: './from-event-mouse.component.html',
          styleUrls: ['./from-event-mouse.component.css']
        }]
      }], function () {
        return [];
      }, {
        startBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['startBtn']
        }],
        pauseBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['pauseBtn']
        }],
        resetBtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['resetBtn']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/http-client/http-client.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/http-client/http-client.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HttpClientComponent */

  /***/
  function srcAppComponentsHttpClientHttpClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientComponent", function () {
      return HttpClientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HttpClientComponent = /*#__PURE__*/function () {
      function HttpClientComponent(http) {
        _classCallCheck(this, HttpClientComponent);

        this.http = http;
      }

      _createClass(HttpClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.configUrl = 'assets/config.json';
          this.getConfig();
        }
      }, {
        key: "getConfig",
        value: function getConfig() {
          return this.http.get(this.configUrl).pipe().subscribe(console.log);
        }
      }]);

      return HttpClientComponent;
    }();

    HttpClientComponent.ɵfac = function HttpClientComponent_Factory(t) {
      return new (t || HttpClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HttpClientComponent,
      selectors: [["app-http-client"]],
      decls: 2,
      vars: 0,
      template: function HttpClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " http-client works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaHR0cC1jbGllbnQvaHR0cC1jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-http-client',
          templateUrl: './http-client.component.html',
          styleUrls: ['./http-client.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/map-concat/map-concat.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/map-concat/map-concat.component.ts ***!
    \***************************************************************/

  /*! exports provided: MapConcatComponent */

  /***/
  function srcAppComponentsMapConcatMapConcatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapConcatComponent", function () {
      return MapConcatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MapConcatComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
      }
    }

    function MapConcatComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
      }
    }

    var MapConcatComponent = /*#__PURE__*/function () {
      function MapConcatComponent() {
        _classCallCheck(this, MapConcatComponent);

        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([1, 2, 3, 4, 5, 6]);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([7, 8, 9, 10]);
        this.source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(['a', 'b', 'c', 'd']);
        this.source4$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(this.source1$, this.source2$, this.source3$);
        this.source5$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
          res.push(100);
          return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
          return res.map(function (value) {
            return value * 2;
          });
        }));
      }

      _createClass(MapConcatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.source4$.subscribe(console.log);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// add subscriber....
        }
      }]);

      return MapConcatComponent;
    }();

    MapConcatComponent.ɵfac = function MapConcatComponent_Factory(t) {
      return new (t || MapConcatComponent)();
    };

    MapConcatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapConcatComponent,
      selectors: [["app-map-concat"]],
      decls: 12,
      vars: 6,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function MapConcatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "map-concat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "concat creator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MapConcatComponent_li_5_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "map operator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MapConcatComponent_li_10_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.source4$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.source5$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwLWNvbmNhdC9tYXAtY29uY2F0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapConcatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map-concat',
          templateUrl: './map-concat.component.html',
          styleUrls: ['./map-concat.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/merge/merge.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/merge/merge.component.ts ***!
    \*****************************************************/

  /*! exports provided: MergeComponent */

  /***/
  function srcAppComponentsMergeMergeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MergeComponent", function () {
      return MergeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MergeComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2, " ");
      }
    }

    function MergeComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
      }
    }

    var MergeComponent = /*#__PURE__*/function () {
      function MergeComponent() {
        _classCallCheck(this, MergeComponent);

        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([[1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]]);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([['a'], ['a', 'b'], ['a', 'b', 'c'], ['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd', 'e']]);
        this.source3$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (res, index) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(index * 300));
        })); //  = [ of([1]) , of([1,2]) , of([1,2,3]) , of([1,2,3,4]) ]

        this.source4$ = this.source2$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (res, index) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(index * 100));
        })); //  = [ of([1]) , of([1,2]) , of([1,2,3]) , of([1,2,3,4]) ]

        this.source5$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.source3$, this.source4$);
        this.source6$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["concat"])(this.source3$, this.source4$);
      }

      _createClass(MergeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.source1$.subscribe(function (res) {
            console.log(res);
          });
          this.source2$.subscribe(function (res) {
            console.log(res);
          }); // this.source5$.subscribe(res => { console.log( res) })

          this.source6$.subscribe(function (res) {
            console.log(res);
          });
        }
      }]);

      return MergeComponent;
    }();

    MergeComponent.ɵfac = function MergeComponent_Factory(t) {
      return new (t || MergeComponent)();
    };

    MergeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MergeComponent,
      selectors: [["app-merge"]],
      decls: 14,
      vars: 6,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function MergeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "merge operator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "merge ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MergeComponent_li_6_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "concat ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MergeComponent_li_12_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.source5$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 4, ctx.source6$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVyZ2UvbWVyZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MergeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-merge',
          templateUrl: './merge.component.html',
          styleUrls: ['./merge.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/of-from-delay/of-from-delay.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/of-from-delay/of-from-delay.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ConcatMapDelayComponent */

  /***/
  function srcAppComponentsOfFromDelayOfFromDelayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConcatMapDelayComponent", function () {
      return ConcatMapDelayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConcatMapDelayComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
      }
    }

    function ConcatMapDelayComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var num3_r4 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num3_r4, "");
      }
    }

    function ConcatMapDelayComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5, " ");
      }
    }

    var ConcatMapDelayComponent = /*#__PURE__*/function () {
      function ConcatMapDelayComponent() {
        var _this2 = this;

        _classCallCheck(this, ConcatMapDelayComponent);

        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([1, 2, 3, 4, 5, 6]);
        this.source2$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000)); // what happen here ? all emits delay by 1 sec - so we don't se different

        this.source3$ = this.source1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (res) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(res * 200));
        })); //  = [ of([1]) , of([1,2]) , of([1,2,3]) , of([1,2,3,4]) ]

        this.arrayDelay = [];
        this.source4$ = this.source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
          console.log(res);

          _this2.arrayDelay.push(res);

          console.log(_this2.arrayDelay);
          return _this2.arrayDelay;
        }));
      }

      _createClass(ConcatMapDelayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.source1$.subscribe(function (res) {
            console.log('from: ' + res);
          });
          this.source2$.subscribe(function (res) {
            return console.log('%c with  delay ' + res, 'color:green');
          });
          this.source3$.subscribe(function (res) {
            return console.log('%c with growing delay ' + res, 'color:red');
          });
          this.source4$.subscribe(function (res) {
            return console.log('%c with array growing delay ' + res, 'color:blue');
          });
        }
      }]);

      return ConcatMapDelayComponent;
    }();

    ConcatMapDelayComponent.ɵfac = function ConcatMapDelayComponent_Factory(t) {
      return new (t || ConcatMapDelayComponent)();
    };

    ConcatMapDelayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConcatMapDelayComponent,
      selectors: [["app-concatMap-delay"]],
      decls: 19,
      vars: 9,
      consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"]],
      template: function ConcatMapDelayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delay - concatMap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "from creator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConcatMapDelayComponent_li_5_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "with ngIF - why we see only the last emit ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConcatMapDelayComponent_div_9_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "with growing delay (created by concatMap) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "why the numbers are double ??");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ConcatMapDelayComponent_li_17_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.source1$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.source3$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 7, ctx.source4$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2YtZnJvbS1kZWxheS9vZi1mcm9tLWRlbGF5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConcatMapDelayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-concatMap-delay',
          templateUrl: './of-from-delay.component.html',
          styleUrls: ['./of-from-delay.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/of-from/of-from.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/of-from/of-from.component.ts ***!
    \*********************************************************/

  /*! exports provided: OfFromComponent */

  /***/
  function srcAppComponentsOfFromOfFromComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfFromComponent", function () {
      return OfFromComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OfFromComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
      }
    }

    var OfFromComponent = /*#__PURE__*/function () {
      function OfFromComponent() {
        _classCallCheck(this, OfFromComponent);

        this.source1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([1, 2, 3, 4, 5, 6]);
        this.source2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([1, 2, 3, 4, 5, 6]);
      }

      _createClass(OfFromComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.source1$.subscribe(console.log);
          this.source2$.subscribe(console.log);
        }
      }]);

      return OfFromComponent;
    }();

    OfFromComponent.ɵfac = function OfFromComponent_Factory(t) {
      return new (t || OfFromComponent)();
    };

    OfFromComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OfFromComponent,
      selectors: [["app-of-from"]],
      decls: 10,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function OfFromComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "of-from");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "of operator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OfFromComponent_li_5_Template, 2, 1, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "from operator give error - why ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ul");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.source1$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2YtZnJvbS9vZi1mcm9tLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfFromComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-of-from',
          templateUrl: './of-from.component.html',
          styleUrls: ['./of-from.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/subject/add-book/add-book.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/subject/add-book/add-book.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddBookComponent */

  /***/
  function srcAppComponentsSubjectAddBookAddBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBookComponent", function () {
      return AddBookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/components/subject/book.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddBookComponent = /*#__PURE__*/function () {
      function AddBookComponent(bookService) {
        _classCallCheck(this, AddBookComponent);

        this.bookService = bookService;
      }

      _createClass(AddBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.bookService.addBook({
            bookName: this.bookName,
            bookDescription: this.bookDescription
          });
        }
      }]);

      return AddBookComponent;
    }();

    AddBookComponent.ɵfac = function AddBookComponent_Factory(t) {
      return new (t || AddBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]));
    };

    AddBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddBookComponent,
      selectors: [["app-add-book"]],
      decls: 8,
      vars: 2,
      consts: [["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"], ["cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"]],
      template: function AddBookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.bookName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBookComponent_Template_button_click_4_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBookComponent_Template_textarea_ngModelChange_7_listener($event) {
            return ctx.bookDescription = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookDescription);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViamVjdC9hZGQtYm9vay9hZGQtYm9vay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-book',
          templateUrl: './add-book.component.html',
          styleUrls: ['./add-book.component.css']
        }]
      }], function () {
        return [{
          type: _book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/subject/book-list/book-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/subject/book-list/book-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BookListComponent */

  /***/
  function srcAppComponentsSubjectBookListBookListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookListComponent", function () {
      return BookListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book.service */
    "./src/app/components/subject/book.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BookListComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookListComponent_li_5_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var index_r2 = ctx.index;
          var item_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.expand(index_r2, item_r1.bookDescription);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "show more...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" name: ", item_r1.bookName, " ");
      }
    }

    var BookListComponent = /*#__PURE__*/function () {
      function BookListComponent(bookService) {
        _classCallCheck(this, BookListComponent);

        this.bookService = bookService;
      }

      _createClass(BookListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bookList$ = this.bookService.getList();
        }
      }, {
        key: "expand",
        value: function expand(index, description) {
          console.log(index);
          this.currentDescription = description;
        }
      }]);

      return BookListComponent;
    }();

    BookListComponent.ɵfac = function BookListComponent_Factory(t) {
      return new (t || BookListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]));
    };

    BookListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookListComponent,
      selectors: [["app-book-list"]],
      decls: 12,
      vars: 4,
      consts: [[1, "container"], [4, "ngFor", "ngForOf"], [3, "click"]],
      template: function BookListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "books list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BookListComponent_li_5_Template, 5, 1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.bookList$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentDescription);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWJqZWN0L2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViamVjdC9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uY29udGFpbmVyID5kaXYge1xyXG4gIG1hcmdpbjogMjBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-book-list',
          templateUrl: './book-list.component.html',
          styleUrls: ['./book-list.component.css']
        }]
      }], function () {
        return [{
          type: _book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/subject/book.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/subject/book.service.ts ***!
    \****************************************************/

  /*! exports provided: BookService */

  /***/
  function srcAppComponentsSubjectBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookService", function () {
      return BookService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BookService = /*#__PURE__*/function () {
      function BookService() {
        _classCallCheck(this, BookService);

        this.books$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.booksArr = [];
      }

      _createClass(BookService, [{
        key: "addBook",
        value: function addBook(book) {
          // debugger
          this.booksArr.push(book);
          this.books$.next(this.booksArr);
        }
      }, {
        key: "getList",
        value: function getList() {
          return this.books$.asObservable();
        }
      }]);

      return BookService;
    }();

    BookService.ɵfac = function BookService_Factory(t) {
      return new (t || BookService)();
    };

    BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookService,
      factory: BookService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/subject/books-shop/books-shop.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/subject/books-shop/books-shop.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BooksShopComponent */

  /***/
  function srcAppComponentsSubjectBooksShopBooksShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksShopComponent", function () {
      return BooksShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../add-book/add-book.component */
    "./src/app/components/subject/add-book/add-book.component.ts");
    /* harmony import */


    var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../book-list/book-list.component */
    "./src/app/components/subject/book-list/book-list.component.ts");

    var BooksShopComponent = /*#__PURE__*/function () {
      function BooksShopComponent() {
        _classCallCheck(this, BooksShopComponent);
      }

      _createClass(BooksShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BooksShopComponent;
    }();

    BooksShopComponent.ɵfac = function BooksShopComponent_Factory(t) {
      return new (t || BooksShopComponent)();
    };

    BooksShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BooksShopComponent,
      selectors: [["app-books-shop"]],
      decls: 4,
      vars: 0,
      template: function BooksShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-add-book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-book-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_1__["AddBookComponent"], _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__["BookListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3ViamVjdC9ib29rcy1zaG9wL2Jvb2tzLXNob3AuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-books-shop',
          templateUrl: './books-shop.component.html',
          styleUrls: ['./books-shop.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/throttle-time/throttle-time.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/throttle-time/throttle-time.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ThrottleTimeComponent */

  /***/
  function srcAppComponentsThrottleTimeThrottleTimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThrottleTimeComponent", function () {
      return ThrottleTimeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ThrottleTimeComponent = /*#__PURE__*/function () {
      function ThrottleTimeComponent() {
        _classCallCheck(this, ThrottleTimeComponent);
      }

      _createClass(ThrottleTimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var red$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])("RED");
          var green$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])("GREEN");
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(3000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (move) {
            return move.clientY < 210;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (move) {
            return move.clientY;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (yCoord) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["iif"])(function () {
              return yCoord < 110;
            }, red$, green$);
          })).subscribe(console.log);
        }
      }]);

      return ThrottleTimeComponent;
    }();

    ThrottleTimeComponent.ɵfac = function ThrottleTimeComponent_Factory(t) {
      return new (t || ThrottleTimeComponent)();
    };

    ThrottleTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThrottleTimeComponent,
      selectors: [["app-throttle-time"]],
      decls: 2,
      vars: 0,
      consts: [[1, "x"], [1, "r"]],
      template: function ThrottleTimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        }
      },
      styles: [".x[_ngcontent-%COMP%]{\r\n  background-color: red;\r\n  min-width: 400px;\r\n  height: 100px;\r\n}\r\n.r[_ngcontent-%COMP%]{\r\n  background-color: greenyellow;\r\n  min-width: 400px;\r\n  height: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHJvdHRsZS10aW1lL3Rocm90dGxlLXRpbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhyb3R0bGUtdGltZS90aHJvdHRsZS10aW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThrottleTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-throttle-time',
          templateUrl: './throttle-time.component.html',
          styleUrls: ['./throttle-time.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ngrx/add-event/add-event.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ngrx/add-event/add-event.component.ts ***!
    \*******************************************************/

  /*! exports provided: AddEventComponent */

  /***/
  function srcAppNgrxAddEventAddEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEventComponent", function () {
      return AddEventComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../store/event */
    "./src/app/ngrx/store/event.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AddEventComponent = /*#__PURE__*/function () {
      function AddEventComponent(store) {
        _classCallCheck(this, AddEventComponent);

        this.store = store;
      }

      _createClass(AddEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.store.dispatch(Object(_store_event__WEBPACK_IMPORTED_MODULE_1__["addEvent"])(this.createEvent()));
        }
      }, {
        key: "createEvent",
        value: function createEvent() {
          return {
            id: 1,
            name: this.name,
            city: 'jerusalem',
            address: 'tavin 22',
            createdAt: new Date(),
            text: 'i need driver to the market'
          };
        }
      }]);

      return AddEventComponent;
    }();

    AddEventComponent.ɵfac = function AddEventComponent_Factory(t) {
      return new (t || AddEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
    };

    AddEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddEventComponent,
      selectors: [["app-add-event"]],
      decls: 34,
      vars: 0,
      consts: [[3, "click"], ["type", "text"], ["type", "text", 3, "value"], ["iptname", ""]],
      template: function AddEventComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddEventComponent_Template_button_click_0_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function AddEventComponent_Template_input_value_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.name = _r0.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "city ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "createdAt ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ncngvYWRkLWV2ZW50L2FkZC1ldmVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-event',
          templateUrl: './add-event.component.html',
          styleUrls: ['./add-event.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ngrx/admin-events-list/admin-events-list.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ngrx/admin-events-list/admin-events-list.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminEventsListComponent */

  /***/
  function srcAppNgrxAdminEventsListAdminEventsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminEventsListComponent", function () {
      return AdminEventsListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_events_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../store/events.selectors */
    "./src/app/ngrx/store/events.selectors.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminEventsListComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", item_r1.id, " ", item_r1.name, " ", item_r1.city, " ");
      }
    }

    var AdminEventsListComponent = /*#__PURE__*/function () {
      function AdminEventsListComponent(store) {
        _classCallCheck(this, AdminEventsListComponent);

        this.store = store;
      }

      _createClass(AdminEventsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.events = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_events_selectors__WEBPACK_IMPORTED_MODULE_2__["eventsFeature"]));
        }
      }]);

      return AdminEventsListComponent;
    }();

    AdminEventsListComponent.ɵfac = function AdminEventsListComponent_Factory(t) {
      return new (t || AdminEventsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    AdminEventsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminEventsListComponent,
      selectors: [["app-admin-events-list"]],
      decls: 3,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function AdminEventsListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminEventsListComponent_li_1_Template, 2, 3, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.events));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ncngvYWRtaW4tZXZlbnRzLWxpc3QvYWRtaW4tZXZlbnRzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminEventsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-events-list',
          templateUrl: './admin-events-list.component.html',
          styleUrls: ['./admin-events-list.component.css']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ngrx/store/event.ts":
  /*!*************************************!*\
    !*** ./src/app/ngrx/store/event.ts ***!
    \*************************************/

  /*! exports provided: addEvent, removeEvent, editEvent, editCityEvent, initialState, reducer */

  /***/
  function srcAppNgrxStoreEventTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addEvent", function () {
      return addEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeEvent", function () {
      return removeEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "editEvent", function () {
      return editEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "editCityEvent", function () {
      return editCityEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var addEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Add Event] Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var removeEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Remove Event] Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var editEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[edit Event] Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var editCityEvent = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[edit city Event] Event', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var initialState = {
      events: []
    };
    var eventsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(addEvent, function (state, newEvent) {
      console.log(state); // state.events.events.push(event) // why this not work -- immunite!!!
      // const events = [...state.events]
      // events.push(newEvent)

      return Object.assign(Object.assign({}, state), {
        events: [].concat(_toConsumableArray(state.events), [newEvent])
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(removeEvent, function (state, id) {
      console.log(state.events.filter(function (event) {
        return event.id !== id.id;
      }));
      return Object.assign({}, state);
    }));

    function reducer(state, action) {
      return eventsReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/ngrx/store/events.selectors.ts":
  /*!************************************************!*\
    !*** ./src/app/ngrx/store/events.selectors.ts ***!
    \************************************************/

  /*! exports provided: selectFeature, eventsFeature, selectFeatureCity */

  /***/
  function srcAppNgrxStoreEventsSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFeature", function () {
      return selectFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eventsFeature", function () {
      return eventsFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectFeatureCity", function () {
      return selectFeatureCity;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var selectFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('events');
    var eventsFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeature, function (state) {
      return state.events;
    });
    var selectFeatureCity = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFeature, function (state) {
      return state.events.map(function (event) {
        return event.city;
      });
    });
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Ouriel\angular yoni\state\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map