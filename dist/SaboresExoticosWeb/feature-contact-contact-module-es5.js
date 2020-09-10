function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-contact-contact-module"], {
  /***/
  "./src/app/feature/contact/contact.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/feature/contact/contact.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppFeatureContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 37,
      vars: 0,
      consts: [[1, "wrapper"], [1, "container"], [1, "card", "col-md-6", "mr-auto", "ml-auto"], [1, "card-body"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["id", "name", 1, "form-control"], ["for", "restaurants", 1, "col-sm-3", "col-form-label"], ["id", "restaurants", 1, "custom-select"], ["for", "email", 1, "col-sm-3", "col-form-label"], ["id", "email", 1, "form-control"], ["for", "consulta", 1, "col-sm-3", "col-form-label"], ["id", "consulta", 1, "form-control"], [1, "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cont\xE1ctenos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Restaurante");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Restaurante 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Restaurante 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Restaurante 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Correo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Consulta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Enviar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["@font-face {\n  font-family: \"Roboto Bold\";\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Roboto Bold\"), local(\"Roboto Black\"), url('/assets/fonts/Roboto-Bold.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Roboto Light\";\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Roboto Light\"), local(\"Roboto Light\"), url('/assets/fonts/Roboto-Light.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Roboto Regular\";\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Roboto Regular\"), local(\"Roboto Regular\"), url('/assets/fonts/Roboto-Regular.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Roboto Thin\";\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Roboto Thin\"), local(\"Roboto Thin\"), url('/assets/fonts/Roboto-Thin.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"Roboto Medium\";\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Roboto Medium\"), local(\"Roboto Medium\"), url('/assets/fonts/Roboto-Medium.ttf') format(\"truetype\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jb250YWN0L0M6XFxVc2Vyc1xcUHJhY3RpY2FudGUyXFxEZXNrdG9wXFxIdW1hblJlc291cmNlc0NvbnRyb2xXZWJcXFNhYm9yZXNFeG90aWNvc1dlYi9zcmNcXGFwcFxcdmFyaWFibGUuc2NzcyIsInNyYy9hcHAvZmVhdHVyZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0M7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5R0FBQTtBQ05MO0FEU0M7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyR0FBQTtBQ1BMO0FEVUM7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpSEFBQTtBQ1JMO0FEV0M7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3R0FBQTtBQ1RMO0FEWUM7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4R0FBQTtBQ1ZMIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgJHJvYm90by1ib2xkOiAnUm9ib3RvIEJvbGQnO1xyXG4gJHJvYm90by1saWdodDogJ1JvYm90byBMaWdodCc7XHJcbiAkcm9ib3RvLXJlZ3VsYXI6ICdSb2JvdG8gUmVndWxhcic7XHJcbiAkcm9ib3RvLXRoaW46ICdSb2JvdG8gVGhpbic7XHJcbiAkcm9ib3RvLW1lZGl1bTogJ1JvYm90byBNZWRpdW0nOyAvLyByb2JvdG8gc2VtaWJvbGRcclxuICRyb2JvdG8tY29uZGVuc2VkLWJvbGQ6ICdSb2JvdG8gQ29uZGVuc2VkIEJvbGQnO1xyXG4gJHJvYm90by1jb25kZW5zZWQtbGlnaHQ6ICdSb2JvdG8gQ29uZGVuc2VkIExpZ2h0JztcclxuIEBmb250LWZhY2Uge1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIEJvbGQnO1xyXG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICBmb250LXdlaWdodDogbm9ybWFsOyAvLzcwMFxyXG4gICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkJyksIGxvY2FsKCdSb2JvdG8gQmxhY2snKSwgdXJsKCd+L2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiB9XHJcbiBcclxuIEBmb250LWZhY2Uge1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIExpZ2h0JztcclxuICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgLy8zMDA7XHJcbiAgICAgc3JjOiBsb2NhbCgnUm9ib3RvIExpZ2h0JyksIGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgdXJsKCd+L2Fzc2V0cy9mb250cy9Sb2JvdG8tTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gfVxyXG4gXHJcbiBAZm9udC1mYWNlIHtcclxuICAgICBmb250LWZhbWlseTogJ1JvYm90byBSZWd1bGFyJztcclxuICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICBzcmM6IGxvY2FsKCdSb2JvdG8gUmVndWxhcicpLCBsb2NhbCgnUm9ib3RvIFJlZ3VsYXInKSwgdXJsKCd+L2Fzc2V0cy9mb250cy9Sb2JvdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiB9XHJcbiBcclxuIEBmb250LWZhY2Uge1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFRoaW4nO1xyXG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICBmb250LXdlaWdodDogbm9ybWFsOyAvLzIwMDtcclxuICAgICBzcmM6IGxvY2FsKCdSb2JvdG8gVGhpbicpLCBsb2NhbCgnUm9ib3RvIFRoaW4nKSwgdXJsKCd+L2Fzc2V0cy9mb250cy9Sb2JvdG8tVGhpbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiB9XHJcbiBcclxuIEBmb250LWZhY2Uge1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1lZGl1bSc7XHJcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IC8vNDAwO1xyXG4gICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgdXJsKCd+L2Fzc2V0cy9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuIH1cclxuIFxyXG4gJGZvbnQtc2l6ZS1zbWFsbGVyIDowLjc1cmVtOyAvLzEycHhcclxuICRmb250LXNpemUtcmVndWxhciA6MC44NzVyZW07IC8vMTRweFxyXG4gJGZvbnQtc2l6ZS1zbWFsbDogMXJlbTsgLy8xNnB4XHJcbiAkZm9udC1zaXplLW1lZGl1bS1zbWFsbDogMS4wOTRyZW07IC8vMTcuNXB4XHJcbiAkZm9udC1zaXplLW1lZGl1bSA6MS4zNjhyZW07IC8vMjEuODhweDtcclxuICRmb250LXNpemUtbWVkaXVtLWJpZyA6MS43MDlyZW07IC8vMjcuMzRweDtcclxuICRmb250LXNpemUtYmlnOiAyLjI1cmVtOyAvLzM2cHhcclxuICRmb250LXNpemUtYmlnZ2VyOiAzLjM3NXJlbTsgLy81NHB4XHJcbiAkZm9udC1zaXplLWJpZ2dlc3Q6NS4wNjI1cmVtOyAvLzgxcHhcclxuICRmb250LXNpemUtZ2lhbnQ6IDcuNTYyNXJlbTsgLy8xMjFweFxyXG4gJHByaW1hcnlDb2xvcjojMUY0RTc4O1xyXG4gJHNlY29uZGFyeUxpZ2h0Q29sb3I6ICMwMEE1Qjk7XHJcbiAkYmxhY2s6ICMwMDA7XHJcbiAkd2hpdGU6ICNmZmZmO1xyXG4gJHJlZDogI0Y0NDMzNjtcclxuICRncmF5NTA6I2ZhZmFmYTtcclxuICRncmF5NzU6I0RBREFEQTtcclxuICRncmF5MTAwOiNmNWY1ZjU7XHJcbiAkZ3JheTIwMDojZWVlZWVlO1xyXG4gJGdyYXkzMDA6I2UwZTBlMDtcclxuICRncmF5NDAwOiNiZGJkYmQ7XHJcbiAkZ3JheTUwMDojOWU5ZTllO1xyXG4gJGdyYXk2MDA6Izc1NzU3NTtcclxuICRncmF5NzAwOiM2MTYxNjE7XHJcbiAkZ3JheTgwMDojNDI0MjQyO1xyXG4gJGdyYXk5MDA6IzIxMjEyMTtcclxuICRncmF5MTAwMDogIzVBNUE1QTtcclxuICRkYXJrQnJvd246IzQwMUMwNDtcclxuICR5ZWxsb3c6I0RBQTY0MDsiLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIEJvbGRcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIEJvbGRcIiksIGxvY2FsKFwiUm9ib3RvIEJsYWNrXCIpLCB1cmwoXCJ+L2Fzc2V0cy9mb250cy9Sb2JvdG8tQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIExpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiBsb2NhbChcIlJvYm90byBMaWdodFwiKSwgbG9jYWwoXCJSb2JvdG8gTGlnaHRcIiksIHVybChcIn4vYXNzZXRzL2ZvbnRzL1JvYm90by1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFJlZ3VsYXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIFJlZ3VsYXJcIiksIGxvY2FsKFwiUm9ib3RvIFJlZ3VsYXJcIiksIHVybChcIn4vYXNzZXRzL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSb2JvdG8gVGhpblwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogbG9jYWwoXCJSb2JvdG8gVGhpblwiKSwgbG9jYWwoXCJSb2JvdG8gVGhpblwiKSwgdXJsKFwifi9hc3NldHMvZm9udHMvUm9ib3RvLVRoaW4udHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBNZWRpdW1cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IGxvY2FsKFwiUm9ib3RvIE1lZGl1bVwiKSwgbG9jYWwoXCJSb2JvdG8gTWVkaXVtXCIpLCB1cmwoXCJ+L2Fzc2V0cy9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/contact/contact.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/feature/contact/contact.module.ts ***!
    \***************************************************/

  /*! exports provided: ContactModule */

  /***/
  function srcAppFeatureContactContactModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
      return ContactModule;
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


    var _contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contact.component */
    "./src/app/feature/contact/contact.component.ts");
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
      component: _contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
    }];

    var ContactModule = function ContactModule() {
      _classCallCheck(this, ContactModule);
    };

    ContactModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactModule
    });
    ContactModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactModule_Factory(t) {
        return new (t || ContactModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactModule, {
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=feature-contact-contact-module-es5.js.map