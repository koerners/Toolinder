webpackHotUpdate("bundle",{

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/nativescript-ui-gauge/angular/gauges-directives.js");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/angular/animations/index.js");
/* harmony import */ var nativescript_angular_animations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_animations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./core/core.module.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./components/list-item/list-item.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_custom_action_bar_custom_action_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./components/custom-action-bar/custom-action-bar.component.ts");
/* harmony import */ var _components_circular_progress_bar_circular_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./components/circular-progress-bar/circular-progress-bar.component.ts");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/@nativescript/angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _nativescript_cardview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./nativescript-cardview/cardview.js");
/* harmony import */ var _nativescript_cardview__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_nativescript_cardview__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _nativescript_swipe_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./nativescript-swipe-layout/swipe-layout.js");
/* harmony import */ var _nativescript_swipe_layout__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_nativescript_swipe_layout__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./item-detail/item-detail.component.ts");
/* harmony import */ var _favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./favorites-list/favorites-list.component.ts");


















Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_12__["registerElement"])("CardView", function () { return _nativescript_cardview__WEBPACK_IMPORTED_MODULE_13__["CardView"]; });
Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_12__["registerElement"])("SwipeLayout", function () { return _nativescript_swipe_layout__WEBPACK_IMPORTED_MODULE_14__["SwipeLayout"]; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptFormsModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIGaugeModule"],
                nativescript_angular_animations__WEBPACK_IMPORTED_MODULE_4__["NativeScriptAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_8__["ListItemComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_9__["SearchBarComponent"],
                _components_custom_action_bar_custom_action_bar_component__WEBPACK_IMPORTED_MODULE_10__["CustomActionBarComponent"],
                _components_circular_progress_bar_circular_progress_bar_component__WEBPACK_IMPORTED_MODULE_11__["CircularProgressBarComponent"],
                _item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_16__["ItemDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _favorites_list_favorites_list_component__WEBPACK_IMPORTED_MODULE_17__["FavoritesListComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./components/custom-action-bar/custom-action-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout columns=\"56,*,56\" rows=\"56\" [col]=\"col\" [row]=\"row\" [colSpan]=\"colSpan\"\n    class=\"custom-action-bar\">\n    <Image *ngIf=\"isBack\" col=\"0\" row=\"0\" width=\"24\" height=\"24\" class=\"text-center\"\n        src=\"~/images/arrow_left.png\" (tap)=\"goBack()\"></Image>\n    <Label col=\"1\" row=\"0\" class=\"h2 action-bar-title\" [text]=\"title\"\n        verticalAlignment=\"center\"></Label>\n    <ios>\n        <CardView col=\"2\" row=\"0\" rowSpan=\"2\" class=\"profile-img-container\"\n            shadowOffsetHeight=\"6\" shadowOpacity=\"0.1\" shadowColor=\"#000000\"\n            shadowRadius=\"4\">\n        </CardView>\n    </ios>\n    <android>\n        <StackLayout col=\"2\" row=\"0\" rowSpan=\"2\" class=\"profile-img-container\">\n        </StackLayout>\n    </android>\n</GridLayout>"

/***/ }),

/***/ "./components/custom-action-bar/custom-action-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomActionBarComponent", function() { return CustomActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_1__);


var CustomActionBarComponent = /** @class */ (function () {
    function CustomActionBarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.title = "";
        this.isBack = false;
        this.col = 0;
        this.row = 0;
        this.colSpan = 0;
        this.rowSpan = 0;
    }
    CustomActionBarComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    CustomActionBarComponent.ctorParameters = function () { return [
        { type: nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomActionBarComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomActionBarComponent.prototype, "isBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "col", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "colSpan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CustomActionBarComponent.prototype, "rowSpan", void 0);
    CustomActionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "custom-action-bar",
            template: __importDefault(__webpack_require__("./components/custom-action-bar/custom-action-bar.component.html")).default
        }),
        __metadata("design:paramtypes", [nativescript_angular__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], CustomActionBarComponent);
    return CustomActionBarComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9tLWFjdGlvbi1iYXIvY3VzdG9tLWFjdGlvbi1iYXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jdXN0b20tYWN0aW9uLWJhci9jdXN0b20tYWN0aW9uLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtGO0FBQ0o7QUFDZjtBQUNXO0FBQ0s7QUFFWDtBQUNyQjtBQUNDO0FBQytCO0FBQ0c7QUFDb0I7QUFDWTtBQUUxQztBQUNyQjtBQUNPO0FBRUo7QUFDb0I7QUFDUztBQUVuRiw4RkFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLHVFQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFDNUMsOEZBQWUsQ0FBQyxhQUFhLEVBQUUsY0FBTSw4RUFBVyxFQUFYLENBQVcsQ0FBQyxDQUFDO0FBOEJsRDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBNUJyQiw4REFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDJEQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsMkZBQWtCO2dCQUNsQiw0RUFBdUI7Z0JBQ3ZCLHVGQUF5QjtnQkFDekIsNEZBQTRCO2dCQUM1QixvRUFBZ0I7Z0JBQ2hCLDREQUFVO2FBRWI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMkRBQVk7Z0JBQ1osMkZBQWlCO2dCQUNqQiw4RkFBa0I7Z0JBQ2xCLG1IQUF3QjtnQkFDeEIsK0hBQTRCO2dCQUM1Qix1RkFBbUI7Z0JBQ25CLG1FQUFhO2dCQUNiLGdHQUFzQjthQUV6QjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQTtBQUFKOzs7Ozs7OztBQ3JEdEIsNDBCOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDTztBQU94RDtJQU9JLGtDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU43QyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFXLENBQUMsQ0FBQztJQUU3QixDQUFDO0lBRUQseUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztnQkFMcUMscUVBQWdCOztJQU43QztRQUFSLDJEQUFLLEVBQUU7OzJEQUFvQjtJQUNuQjtRQUFSLDJEQUFLLEVBQUU7OzREQUF5QjtJQUN4QjtRQUFSLDJEQUFLLEVBQUU7O3lEQUFpQjtJQUNoQjtRQUFSLDJEQUFLLEVBQUU7O3lEQUFpQjtJQUNoQjtRQUFSLDJEQUFLLEVBQUU7OzZEQUFxQjtJQUNwQjtRQUFSLDJEQUFLLEVBQUU7OzZEQUFxQjtJQU5wQix3QkFBd0I7UUFMcEMsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFFN0IseUhBQWlEO1NBQ3BELENBQUM7eUNBUXdDLHFFQUFnQjtPQVA3Qyx3QkFBd0IsQ0FhcEM7SUFBRCwrQkFBQztDQUFBO0FBYm9DIiwiZmlsZSI6ImJ1bmRsZS4wYzRhNDBmNjc0MDllN2Q5MzExNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0QW5pbWF0aW9uc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlLCBDT01QT05FTlRTIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuL2NvcmUvY29yZS5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDdXN0b21BY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2N1c3RvbS1hY3Rpb24tYmFyL2N1c3RvbS1hY3Rpb24tYmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jaXJjdWxhci1wcm9ncmVzcy1iYXIvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tIFwiLi9uYXRpdmVzY3JpcHQtY2FyZHZpZXdcIjtcclxuaW1wb3J0IHsgU3dpcGVMYXlvdXQgfSBmcm9tIFwiLi9uYXRpdmVzY3JpcHQtc3dpcGUtbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS1kZXRhaWwvaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZhdm9yaXRlc0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9mYXZvcml0ZXMtbGlzdC9mYXZvcml0ZXMtbGlzdC5jb21wb25lbnRcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IENhcmRWaWV3KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiU3dpcGVMYXlvdXRcIiwgKCkgPT4gU3dpcGVMYXlvdXQpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgTGlzdEl0ZW1Db21wb25lbnQsXHJcbiAgICAgICAgU2VhcmNoQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEN1c3RvbUFjdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBDaXJjdWxhclByb2dyZXNzQmFyQ29tcG9uZW50LFxyXG4gICAgICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBGYXZvcml0ZXNMaXN0Q29tcG9uZW50XHJcblxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCBjb2x1bW5zPVxcXCI1NiwqLDU2XFxcIiByb3dzPVxcXCI1NlxcXCIgW2NvbF09XFxcImNvbFxcXCIgW3Jvd109XFxcInJvd1xcXCIgW2NvbFNwYW5dPVxcXCJjb2xTcGFuXFxcIlxcbiAgICBjbGFzcz1cXFwiY3VzdG9tLWFjdGlvbi1iYXJcXFwiPlxcbiAgICA8SW1hZ2UgKm5nSWY9XFxcImlzQmFja1xcXCIgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIlxcbiAgICAgICAgc3JjPVxcXCJ+L2ltYWdlcy9hcnJvd19sZWZ0LnBuZ1xcXCIgKHRhcCk9XFxcImdvQmFjaygpXFxcIj48L0ltYWdlPlxcbiAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJoMiBhY3Rpb24tYmFyLXRpdGxlXFxcIiBbdGV4dF09XFxcInRpdGxlXFxcIlxcbiAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+PC9MYWJlbD5cXG4gICAgPGlvcz5cXG4gICAgICAgIDxDYXJkVmlldyBjb2w9XFxcIjJcXFwiIHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcInByb2ZpbGUtaW1nLWNvbnRhaW5lclxcXCJcXG4gICAgICAgICAgICBzaGFkb3dPZmZzZXRIZWlnaHQ9XFxcIjZcXFwiIHNoYWRvd09wYWNpdHk9XFxcIjAuMVxcXCIgc2hhZG93Q29sb3I9XFxcIiMwMDAwMDBcXFwiXFxuICAgICAgICAgICAgc2hhZG93UmFkaXVzPVxcXCI0XFxcIj5cXG4gICAgICAgIDwvQ2FyZFZpZXc+XFxuICAgIDwvaW9zPlxcbiAgICA8YW5kcm9pZD5cXG4gICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjJcXFwiIHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcInByb2ZpbGUtaW1nLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L2FuZHJvaWQ+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImN1c3RvbS1hY3Rpb24tYmFyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2N1c3RvbS1hY3Rpb24tYmFyLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQWN0aW9uQmFyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gXCJcIjtcbiAgICBASW5wdXQoKSBpc0JhY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBjb2w6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgcm93OiBudW1iZXIgPSAwO1xuICAgIEBJbnB1dCgpIGNvbFNwYW46IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgcm93U3BhbjogbnVtYmVyID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==