function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-report-booking-report-booking-module"], {
  /***/
  "./src/app/feature/report-booking/report-booking.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/feature/report-booking/report-booking.component.ts ***!
    \********************************************************************/

  /*! exports provided: ReportBookingComponent */

  /***/
  function srcAppFeatureReportBookingReportBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportBookingComponent", function () {
      return ReportBookingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReportBookingComponent = /*#__PURE__*/function () {
      function ReportBookingComponent() {
        _classCallCheck(this, ReportBookingComponent);
      }

      _createClass(ReportBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportBookingComponent;
    }();

    ReportBookingComponent.ɵfac = function ReportBookingComponent_Factory(t) {
      return new (t || ReportBookingComponent)();
    };

    ReportBookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportBookingComponent,
      selectors: [["app-report-booking"]],
      decls: 2,
      vars: 0,
      template: function ReportBookingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "report-booking works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvcmVwb3J0LWJvb2tpbmcvcmVwb3J0LWJvb2tpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportBookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-report-booking',
          templateUrl: './report-booking.component.html',
          styleUrls: ['./report-booking.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/report-booking/report-booking.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/feature/report-booking/report-booking.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ReportBookingModule */

  /***/
  function srcAppFeatureReportBookingReportBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportBookingModule", function () {
      return ReportBookingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _report_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./report-booking.component */
    "./src/app/feature/report-booking/report-booking.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var routes = [{
      path: '',
      component: _report_booking_component__WEBPACK_IMPORTED_MODULE_2__["ReportBookingComponent"]
    }];

    var ReportBookingModule = function ReportBookingModule() {
      _classCallCheck(this, ReportBookingModule);
    };

    ReportBookingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReportBookingModule
    });
    ReportBookingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReportBookingModule_Factory(t) {
        return new (t || ReportBookingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportBookingModule, {
        declarations: [_report_booking_component__WEBPACK_IMPORTED_MODULE_2__["ReportBookingComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportBookingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_report_booking_component__WEBPACK_IMPORTED_MODULE_2__["ReportBookingComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=feature-report-booking-report-booking-module-es5.js.map