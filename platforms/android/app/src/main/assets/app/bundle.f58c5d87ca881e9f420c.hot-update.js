webpackHotUpdate("bundle",{

/***/ "./components/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_1__);


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.col = 0;
        this.row = 0;
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBarComponent.prototype.onLoaded = function (args) {
        this.clear.emit();
        var nativeView = args.object;
        if (platform__WEBPACK_IMPORTED_MODULE_1__["isIOS"]) {
            nativeView.nativeView.searchBarStyle = UISearchBarStyle.Prominent;
            nativeView.nativeView.backgroundImage = UIImage.new();
        }
        else {
            nativeView.android.clearFocus();
        }
    };
    SearchBarComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        searchBar.dismissSoftInput();
        this.submit.emit(searchBar.text);
    };
    SearchBarComponent.prototype.onClear = function () {
        this.clear.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SearchBarComponent.prototype, "col", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SearchBarComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchBarComponent.prototype, "submit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchBarComponent.prototype, "clear", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "search",
            template: __importDefault(__webpack_require__("./components/search-bar/search-bar.component.html")).default
        })
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RTtBQUV0QztBQVFqQztJQUxBO1FBTWEsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsV0FBTSxHQUFzQixJQUFJLDBEQUFZLEVBQUUsQ0FBQztRQUMvQyxVQUFLLEdBQXNCLElBQUksMERBQVksRUFBRSxDQUFDO0lBMEI1RCxDQUFDO0lBdEJHLHFDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVsQixJQUFNLFVBQVUsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksOENBQUssRUFBRTtZQUNQLFVBQVUsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUNsRSxVQUFVLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDekQ7YUFBTTtZQUNILFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkM7SUFFTCxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFNLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQTVCUTtRQUFSLDJEQUFLLEVBQUU7O21EQUFpQjtJQUNoQjtRQUFSLDJEQUFLLEVBQUU7O21EQUFpQjtJQUNmO1FBQVQsNERBQU0sRUFBRTtrQ0FBUywwREFBWTtzREFBMkI7SUFDL0M7UUFBVCw0REFBTSxFQUFFO2tDQUFRLDBEQUFZO3FEQUEyQjtJQUovQyxrQkFBa0I7UUFMOUIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBRWxCLDJHQUEwQztTQUM3QyxDQUFDO09BQ1csa0JBQWtCLENBOEI5QjtJQUFELHlCQUFDO0NBQUE7QUE5QjhCIiwiZmlsZSI6ImJ1bmRsZS5mNThjNWQ4N2NhODgxZTlmNDIwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmRlY2xhcmUgdmFyIFVJU2VhcmNoQmFyU3R5bGUsIFVJSW1hZ2U7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNlYXJjaFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2gtYmFyLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQmFyQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBjb2w6IG51bWJlciA9IDA7XG4gICAgQElucHV0KCkgcm93OiBudW1iZXIgPSAwO1xuICAgIEBPdXRwdXQoKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBjbGVhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuICAgIG9uTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5jbGVhci5lbWl0KCk7XG5cbiAgICAgICAgY29uc3QgbmF0aXZlVmlldyA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmIChpc0lPUykge1xuICAgICAgICAgICAgbmF0aXZlVmlldy5uYXRpdmVWaWV3LnNlYXJjaEJhclN0eWxlID0gVUlTZWFyY2hCYXJTdHlsZS5Qcm9taW5lbnQ7XG4gICAgICAgICAgICBuYXRpdmVWaWV3Lm5hdGl2ZVZpZXcuYmFja2dyb3VuZEltYWdlID0gVUlJbWFnZS5uZXcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hdGl2ZVZpZXcuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uU3VibWl0KGFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoQmFyID0gPFNlYXJjaEJhcj5hcmdzLm9iamVjdDtcbiAgICAgICAgc2VhcmNoQmFyLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgdGhpcy5zdWJtaXQuZW1pdChzZWFyY2hCYXIudGV4dCk7XG4gICAgfVxuXG4gICAgb25DbGVhcigpIHtcbiAgICAgICAgdGhpcy5jbGVhci5lbWl0KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==