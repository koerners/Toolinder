webpackHotUpdate("bundle",{

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/ui/animation/animation.js");
/* harmony import */ var tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./core/data.service.ts");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__);






var AppComponent = /** @class */ (function () {
    function AppComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.tabIndex = 1;
        this._nativeTabsDisabled = false;
        this._favItemsLength = 0;
        this._itemsSubscription = this._dataService.getLikedItems$()
            .subscribe(function (items) {
            if (_this.tabIndex === 1 && items.length !== _this._favItemsLength) {
                _this.notifyNewFav();
            }
            _this._favItemsLength = items.length;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent.prototype.onFavIconLoaded = function (args) {
        this._favIcon = args.object;
    };
    AppComponent.prototype.notifyNewFav = function () {
        var _this = this;
        var iconPrefix = "~/images/";
        if (this._favIcon) {
            this._favIcon.src = iconPrefix + "star.png";
            this.popAnimation(this._favIcon).play().then(function () {
                _this._backToNormalAnimationTimeout = setTimeout(function () {
                    _this.backToNormalAnimation(_this._favIcon).play().then(function () {
                        _this._favIcon.src = iconPrefix + "star_o.png";
                        _this._favIcon.opacity = 1;
                    });
                }, 250);
            });
        }
    };
    AppComponent.prototype.getIconSource = function (icon, tabIndex) {
        var iconPrefix = "~/images/";
        var iconSuffix = tabIndex === this.tabIndex ? ".png" : "_o.png";
        if (this._backToNormalAnimationTimeout && this.tabIndex === 0) {
            clearTimeout(this._backToNormalAnimationTimeout);
            this._backToNormalAnimationTimeout = null;
            this._favIcon.opacity = 1;
            this._favIcon.scaleX = 1;
            this._favIcon.scaleY = 1;
        }
        return iconPrefix + icon + iconSuffix;
    };
    AppComponent.prototype.onTabViewLoaded = function (args) {
        var tabView = args.object;
        if (!this._nativeTabsDisabled) {
            if (tabView) {
                if (tabView.android) {
                    tabView.android.removeViewAt(1);
                }
                else {
                    tabView.ios.tabBar.hidden = true;
                }
            }
            this._nativeTabsDisabled = true;
        }
    };
    AppComponent.prototype.changeTabIndex = function (index) {
        try {
            if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__["isAndroid"]) {
                tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__["ad"].dismissSoftInput();
            }
            else {
                // ios.getter(UIApplication, UIApplication.sharedApplication)
                //     .keyWindow
                //     .endEditing(true);
            }
        }
        catch (e) {
            console.error(e);
        }
        if (index == 2) {
            alert('No content here :( Check out favorites list! Don\'t miss items details.');
        }
        else {
            this.tabIndex = index;
        }
    };
    AppComponent.prototype.popAnimation = function (view) {
        return new tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]([
            {
                scale: { x: 1.2, y: 1.2 },
                duration: 200,
                curve: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2__["AnimationCurve"].spring,
                target: view
            }
        ]);
    };
    AppComponent.prototype.backToNormalAnimation = function (view) {
        return new tns_core_modules_ui_animation__WEBPACK_IMPORTED_MODULE_1__["Animation"]([
            {
                scale: { x: 1, y: 1 },
                opacity: 0,
                duration: 150,
                curve: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2__["AnimationCurve"].easeInOut,
                target: view
            }
        ]);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __importDefault(__webpack_require__("./app.component.html")).default,
        }),
        __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUVIO0FBRUM7QUFHYTtBQUNqQjtBQUNEO0FBVXREO0lBVUksc0JBQW9CLFlBQXlCO1FBQTdDLGlCQVFDO1FBUm1CLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBUjdDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFYix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFJckMsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFO2FBQ3ZELFNBQVMsQ0FBQyxVQUFDLEtBQXVCO1lBQy9CLElBQUksS0FBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsZUFBZSxFQUFFO2dCQUM5RCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7WUFDRCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQUEsaUJBYUM7UUFaRyxJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM1QyxJ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NENBQXFCLEdBQTdCLFVBQThCLElBQVU7UUFDcEMsT0FBTyxJQUFJLHVFQUFTLENBQUM7WUFDakI7Z0JBQ0ksS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsd0VBQWMsQ0FBQyxTQUFTO2dCQUMvQixNQUFNLEVBQUUsSUFBSTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBeEdpQyw4REFBVzs7SUFWcEMsWUFBWTtRQU54QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFFbEIsOEVBQWlDO1NBRXBDLENBQUM7eUNBV29DLDhEQUFXO09BVnBDLFlBQVksQ0FvSHhCO0lBQUQsbUJBQUM7Q0FBQTtBQXBId0IiLCJmaWxlIjoiYnVuZGxlLjNiOGFhYTBjYjIzMDMxNzcwZWM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBBbmltYXRpb25DdXJ2ZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XG5pbXBvcnQgeyBUYWJWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBJRGF0YUl0ZW0sIFRvb2xzSXRlbSB9IGZyb20gXCIuL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBhZCwgaW9zIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb246IGFueTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbiAgICAvLyBzdHlsZVVybHM6IFtcIi4vYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICB0YWJJbmRleDogbnVtYmVyID0gMTtcblxuICAgIHByaXZhdGUgX25hdGl2ZVRhYnNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2l0ZW1zU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgX2Zhdkljb246IEltYWdlO1xuICAgIHByaXZhdGUgX2JhY2tUb05vcm1hbEFuaW1hdGlvblRpbWVvdXQ7XG4gICAgcHJpdmF0ZSBfZmF2SXRlbXNMZW5ndGggPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuX2l0ZW1zU3Vic2NyaXB0aW9uID0gdGhpcy5fZGF0YVNlcnZpY2UuZ2V0TGlrZWRJdGVtcyQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PFRvb2xzSXRlbT4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJJbmRleCA9PT0gMSAmJiBpdGVtcy5sZW5ndGggIT09IHRoaXMuX2Zhdkl0ZW1zTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5TmV3RmF2KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2Zhdkl0ZW1zTGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIH1cblxuICAgIG9uRmF2SWNvbkxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgdGhpcy5fZmF2SWNvbiA9IDxJbWFnZT5hcmdzLm9iamVjdDtcbiAgICB9XG5cbiAgICBub3RpZnlOZXdGYXYoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGljb25QcmVmaXggPSBcIn4vaW1hZ2VzL1wiO1xuICAgICAgICBpZiAodGhpcy5fZmF2SWNvbikge1xuICAgICAgICAgICAgdGhpcy5fZmF2SWNvbi5zcmMgPSBpY29uUHJlZml4ICsgXCJzdGFyLnBuZ1wiO1xuICAgICAgICAgICAgdGhpcy5wb3BBbmltYXRpb24odGhpcy5fZmF2SWNvbikucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JhY2tUb05vcm1hbEFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrVG9Ob3JtYWxBbmltYXRpb24odGhpcy5fZmF2SWNvbikucGxheSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmF2SWNvbi5zcmMgPSBpY29uUHJlZml4ICsgXCJzdGFyX28ucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYXZJY29uLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJY29uU291cmNlKGljb246IHN0cmluZywgdGFiSW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGljb25QcmVmaXggPSBcIn4vaW1hZ2VzL1wiO1xuICAgICAgICBjb25zdCBpY29uU3VmZml4ID0gdGFiSW5kZXggPT09IHRoaXMudGFiSW5kZXggPyBcIi5wbmdcIiA6IFwiX28ucG5nXCI7XG4gICAgICAgIGlmICh0aGlzLl9iYWNrVG9Ob3JtYWxBbmltYXRpb25UaW1lb3V0ICYmIHRoaXMudGFiSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9iYWNrVG9Ob3JtYWxBbmltYXRpb25UaW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMuX2JhY2tUb05vcm1hbEFuaW1hdGlvblRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZmF2SWNvbi5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHRoaXMuX2Zhdkljb24uc2NhbGVYID0gMTtcbiAgICAgICAgICAgIHRoaXMuX2Zhdkljb24uc2NhbGVZID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpY29uUHJlZml4ICsgaWNvbiArIGljb25TdWZmaXg7XG4gICAgfVxuXG4gICAgb25UYWJWaWV3TG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XG4gICAgICAgIGlmICghdGhpcy5fbmF0aXZlVGFic0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBpZiAodGFiVmlldykge1xuICAgICAgICAgICAgICAgIGlmICh0YWJWaWV3LmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiVmlldy5hbmRyb2lkLnJlbW92ZVZpZXdBdCgxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWJWaWV3Lmlvcy50YWJCYXIuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVUYWJzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlVGFiSW5kZXgoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIGFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKVxuICAgICAgICAgICAgICAgIC8vICAgICAua2V5V2luZG93XG4gICAgICAgICAgICAgICAgLy8gICAgIC5lbmRFZGl0aW5nKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PSAyKSB7XG4gICAgICAgICAgICBhbGVydCgnTm8gY29udGVudCBoZXJlIDooIENoZWNrIG91dCBmYXZvcml0ZXMgbGlzdCEgRG9uXFwndCBtaXNzIGl0ZW1zIGRldGFpbHMuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcEFuaW1hdGlvbih2aWV3OiBWaWV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAxLjIsIHk6IDEuMiB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLnNwcmluZyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHZpZXdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiYWNrVG9Ob3JtYWxBbmltYXRpb24odmlldzogVmlldykge1xuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbihbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxuICAgICAgICAgICAgICAgIHRhcmdldDogdmlld1xuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=