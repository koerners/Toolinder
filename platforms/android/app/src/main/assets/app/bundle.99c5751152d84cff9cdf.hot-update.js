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
        this._itemsSubscription = this._dataService.getLikedItems1$()
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
                    tabView.android.removeViewAt(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RDtBQUVIO0FBRUM7QUFHYTtBQUNqQjtBQUNEO0FBVXREO0lBVUksc0JBQW9CLFlBQXlCO1FBQTdDLGlCQVFDO1FBUm1CLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBUjdDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFYix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFJckMsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFHeEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFO2FBQ3hELFNBQVMsQ0FBQyxVQUFDLEtBQXVCO1lBQy9CLElBQUksS0FBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsZUFBZSxFQUFFO2dCQUM5RCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDdkI7WUFDRCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtJQUNBLENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBVSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQUEsaUJBYUM7UUFaRyxJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM1QyxJ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QixNQUFNLEVBQUUsSUFBSTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLDRDQUFxQixHQUE3QixVQUE4QixJQUFVO1FBQ3BDLE9BQU8sSUFBSSx1RUFBUyxDQUFDO1lBQ2pCO2dCQUNJLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDckIsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLHdFQUFjLENBQUMsU0FBUztnQkFDL0IsTUFBTSxFQUFFLElBQUk7YUFDZjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTNHaUMsOERBQVc7O0lBVnBDLFlBQVk7UUFOeEIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBRWxCLDhFQUFpQztTQUVwQyxDQUFDO3lDQVdvQyw4REFBVztPQVZwQyxZQUFZLENBdUh4QjtJQUFELG1CQUFDO0NBQUE7QUF2SHdCIiwiZmlsZSI6ImJ1bmRsZS45OWM1NzUxMTUyZDg0Y2ZmOWNkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FuaW1hdGlvblwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xuaW1wb3J0IHsgVGFiVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSwgSURhdGFJdGVtLCBUb29sc0l0ZW0gfSBmcm9tIFwiLi9jb3JlL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgYWQsIGlvcyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xuXG5kZWNsYXJlIHZhciBVSUFwcGxpY2F0aW9uOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgLy8gc3R5bGVVcmxzOiBbXCIuL2FwcC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdGFiSW5kZXg6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlIF9uYXRpdmVUYWJzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pdGVtc1N1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9mYXZJY29uOiBJbWFnZTtcbiAgICBwcml2YXRlIF9iYWNrVG9Ob3JtYWxBbmltYXRpb25UaW1lb3V0O1xuICAgIHByaXZhdGUgX2Zhdkl0ZW1zTGVuZ3RoID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xuICAgICAgICB0aGlzLl9pdGVtc1N1YnNjcmlwdGlvbiA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldExpa2VkSXRlbXMxJCgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8VG9vbHNJdGVtPikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkluZGV4ID09PSAxICYmIGl0ZW1zLmxlbmd0aCAhPT0gdGhpcy5fZmF2SXRlbXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlOZXdGYXYoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZmF2SXRlbXNMZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgfVxuXG4gICAgb25GYXZJY29uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLl9mYXZJY29uID0gPEltYWdlPmFyZ3Mub2JqZWN0O1xuICAgIH1cblxuICAgIG5vdGlmeU5ld0ZhdigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaWNvblByZWZpeCA9IFwifi9pbWFnZXMvXCI7XG4gICAgICAgIGlmICh0aGlzLl9mYXZJY29uKSB7XG4gICAgICAgICAgICB0aGlzLl9mYXZJY29uLnNyYyA9IGljb25QcmVmaXggKyBcInN0YXIucG5nXCI7XG4gICAgICAgICAgICB0aGlzLnBvcEFuaW1hdGlvbih0aGlzLl9mYXZJY29uKS5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja1RvTm9ybWFsQW5pbWF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tUb05vcm1hbEFuaW1hdGlvbih0aGlzLl9mYXZJY29uKS5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mYXZJY29uLnNyYyA9IGljb25QcmVmaXggKyBcInN0YXJfby5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zhdkljb24ub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEljb25Tb3VyY2UoaWNvbjogc3RyaW5nLCB0YWJJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaWNvblByZWZpeCA9IFwifi9pbWFnZXMvXCI7XG4gICAgICAgIGNvbnN0IGljb25TdWZmaXggPSB0YWJJbmRleCA9PT0gdGhpcy50YWJJbmRleCA/IFwiLnBuZ1wiIDogXCJfby5wbmdcIjtcbiAgICAgICAgaWYgKHRoaXMuX2JhY2tUb05vcm1hbEFuaW1hdGlvblRpbWVvdXQgJiYgdGhpcy50YWJJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2JhY2tUb05vcm1hbEFuaW1hdGlvblRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fYmFja1RvTm9ybWFsQW5pbWF0aW9uVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9mYXZJY29uLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgdGhpcy5fZmF2SWNvbi5zY2FsZVggPSAxO1xuICAgICAgICAgICAgdGhpcy5fZmF2SWNvbi5zY2FsZVkgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGljb25QcmVmaXggKyBpY29uICsgaWNvblN1ZmZpeDtcbiAgICB9XG5cbiAgICBvblRhYlZpZXdMb2FkZWQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhYlZpZXcgPSA8VGFiVmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgaWYgKCF0aGlzLl9uYXRpdmVUYWJzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGlmICh0YWJWaWV3KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYlZpZXcuYW5kcm9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJWaWV3LmFuZHJvaWQucmVtb3ZlVmlld0F0KDEpO1xuICAgICAgICAgICAgICAgICAgICB0YWJWaWV3LmFuZHJvaWQucmVtb3ZlVmlld0F0KDIpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiVmlldy5pb3MudGFiQmFyLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbmF0aXZlVGFic0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVRhYkluZGV4KGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICBhZC5kaXNtaXNzU29mdElucHV0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbilcbiAgICAgICAgICAgICAgICAvLyAgICAgLmtleVdpbmRvd1xuICAgICAgICAgICAgICAgIC8vICAgICAuZW5kRWRpdGluZyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT0gMikge1xuICAgICAgICAgICAgYWxlcnQoJ05vIGNvbnRlbnQgaGVyZSA6KCBDaGVjayBvdXQgZmF2b3JpdGVzIGxpc3QhIERvblxcJ3QgbWlzcyBpdGVtcyBkZXRhaWxzLicpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHBvcEFuaW1hdGlvbih2aWV3OiBWaWV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAxLjIsIHk6IDEuMiB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLnNwcmluZyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHZpZXdcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiYWNrVG9Ob3JtYWxBbmltYXRpb24odmlldzogVmlldykge1xuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGlvbihbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0LFxuICAgICAgICAgICAgICAgIHRhcmdldDogdmlld1xuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcbiAgICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=