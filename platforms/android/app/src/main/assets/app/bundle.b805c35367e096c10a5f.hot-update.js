webpackHotUpdate("bundle",{

/***/ "./favorites-list/favorites-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesListComponent", function() { return FavoritesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./core/data.service.ts");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/index.js");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__);






var FavoritesListComponent = /** @class */ (function () {
    function FavoritesListComponent(_dataService, routerExtensions, _activatedRoute) {
        var _this = this;
        this._dataService = _dataService;
        this.routerExtensions = routerExtensions;
        this._activatedRoute = _activatedRoute;
        this.filteredItems = [];
        console.log("KONSTRUKTORRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        setTimeout(function () {
            _this._itemsSubscription = _this._dataService.getLikedItems1$()
                .subscribe(function (items) {
                _this.setItems(items);
            });
        }, 1000);
    }
    Object.defineProperty(FavoritesListComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
            console.log(items);
        },
        enumerable: true,
        configurable: true
    });
    FavoritesListComponent.prototype.setItems = function (items) {
        this.items = items;
        this.filteredItems = !!this._searchPhrase ? this.filterItems(items, this._searchPhrase) : this.items;
    };
    FavoritesListComponent.prototype.ngOnDestroy = function () {
        this._itemsSubscription.unsubscribe();
    };
    FavoritesListComponent.prototype.onSearch = function (text) {
        this._searchPhrase = text;
        this.filteredItems = this.filterItems(this.items, text);
    };
    FavoritesListComponent.prototype.onClear = function () {
        this._searchPhrase = "";
        this.filteredItems = this.items;
    };
    FavoritesListComponent.prototype.onDislike = function (args) {
        this._dataService.dislike(args.item);
    };
    FavoritesListComponent.prototype.dismissKeyboard = function (args) {
        if (args.action == "down") {
            if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__["isAndroid"]) {
                tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__["ad"].dismissSoftInput();
            }
            else {
                // ios.getter(UIApplication, UIApplication.sharedApplication)
                //     .keyWindow
                //     .endEditing(true);
            }
        }
    };
    FavoritesListComponent.prototype.filterItems = function (items, text) {
        return items.filter(function (data) {
            return data.name.includes(text) || data.company.includes(text);
        });
    };
    FavoritesListComponent.prototype.onTap = function (id) {
        var navigationExtras = {
            queryParams: {
                "id": id
            },
            relativeTo: this._activatedRoute
        };
        this.routerExtensions.navigate(['/', { outlets: { favoritesTab: ['item'] } }], navigationExtras);
    };
    FavoritesListComponent.ctorParameters = function () { return [
        { type: _core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    FavoritesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Search",
            template: __importDefault(__webpack_require__("./favorites-list/favorites-list.component.html")).default
        }),
        __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            nativescript_angular__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FavoritesListComponent);
    return FavoritesListComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mYXZvcml0ZXMtbGlzdC9mYXZvcml0ZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUNTO0FBQ047QUFDVztBQUVaO0FBQ0Q7QUFVdEQ7SUFPSSxnQ0FBb0IsWUFBeUIsRUFDakMsZ0JBQWtDLEVBQ2xDLGVBQStCO1FBRjNDLGlCQVNDO1FBVG1CLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBUDNDLGtCQUFhLEdBQXFCLEVBQUUsQ0FBQztRQVE3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDdkQsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFO2lCQUM1RCxTQUFTLENBQUMsVUFBQyxLQUF1QjtnQkFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQztRQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsc0JBQUkseUNBQUs7YUFLVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBUEQsVUFBVSxLQUF1QjtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBTUQseUNBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekcsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHlDQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCx3Q0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0RBQWUsR0FBZixVQUFnQixJQUEyQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxFQUFFO1lBQ3ZCLElBQUksbUVBQVMsRUFBRTtnQkFDWCwrREFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDekI7aUJBQU07Z0JBQ0gsNkRBQTZEO2dCQUM3RCxpQkFBaUI7Z0JBQ2pCLHlCQUF5QjthQUM1QjtTQUNKO0lBQ0wsQ0FBQztJQUVPLDRDQUFXLEdBQW5CLFVBQW9CLEtBQXVCLEVBQUUsSUFBWTtRQUNyRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sc0NBQUssR0FBYixVQUFjLEVBQVU7UUFDcEIsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFO2dCQUNULElBQUksRUFBRSxFQUFFO2FBQ1g7WUFDRCxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDbkMsQ0FBQztRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7O2dCQXJFaUMsOERBQVc7Z0JBQ2YscUVBQWdCO2dCQUNqQiw4REFBYzs7SUFUbEMsc0JBQXNCO1FBTGxDLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUVsQix3R0FBOEM7U0FDakQsQ0FBQzt5Q0FRb0MsOERBQVc7WUFDZixxRUFBZ0I7WUFDakIsOERBQWM7T0FUbEMsc0JBQXNCLENBNkVsQztJQUFELDZCQUFDO0NBQUE7QUE3RWtDIiwiZmlsZSI6ImJ1bmRsZS5iODA1YzM1MzY3ZTA5NmMxMGE1Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgVG9vbHNJdGVtIH0gZnJvbSBcIi4uL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IGFkLCBpb3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5cclxuXHJcbmRlY2xhcmUgdmFyIFVJQXBwbGljYXRpb246IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU2VhcmNoXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mYXZvcml0ZXMtbGlzdC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgICBmaWx0ZXJlZEl0ZW1zOiBBcnJheTxUb29sc0l0ZW0+ID0gW107XHJcbiAgICBwcml2YXRlIF9pdGVtc1N1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX2l0ZW1zOiBBcnJheTxUb29sc0l0ZW0+O1xyXG4gICAgcHJpdmF0ZSBfc2VhcmNoUGhyYXNlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJLT05TVFJVS1RPUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRhU2VydmljZS5nZXRMaWtlZEl0ZW1zMSQoKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PFRvb2xzSXRlbT4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpdGVtcyhpdGVtczogQXJyYXk8VG9vbHNJdGVtPikge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcygpOiBBcnJheTxUb29sc0l0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbXMoaXRlbXMpIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gISF0aGlzLl9zZWFyY2hQaHJhc2UgPyB0aGlzLmZpbHRlckl0ZW1zKGl0ZW1zLCB0aGlzLl9zZWFyY2hQaHJhc2UpIDogdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pdGVtc1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaFBocmFzZSA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcyh0aGlzLml0ZW1zLCB0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaFBocmFzZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2xpa2UoYXJncykge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmRpc2xpa2UoYXJncy5pdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzS2V5Ym9hcmQoYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XHJcbiAgICAgICAgaWYgKGFyZ3MuYWN0aW9uID09IFwiZG93blwiKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgICAgIGFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbilcclxuICAgICAgICAgICAgICAgIC8vICAgICAua2V5V2luZG93XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmVuZEVkaXRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaWx0ZXJJdGVtcyhpdGVtczogQXJyYXk8VG9vbHNJdGVtPiwgdGV4dDogc3RyaW5nKTogQXJyYXk8VG9vbHNJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5uYW1lLmluY2x1ZGVzKHRleHQpIHx8IGRhdGEuY29tcGFueS5pbmNsdWRlcyh0ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGFwKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogaWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5fYWN0aXZhdGVkUm91dGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy8nLCB7IG91dGxldHM6IHsgZmF2b3JpdGVzVGFiOiBbJ2l0ZW0nXSB9IH1dLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9