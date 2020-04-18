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
        setTimeout(function () {
            _this._itemsSubscription = _this._dataService.getLikedItems1$()
                .subscribe(function (items) {
                _this.setItems(items);
                console.log(_this._items);
            });
        }, 1000);
    }
    Object.defineProperty(FavoritesListComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this._items = items;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mYXZvcml0ZXMtbGlzdC9mYXZvcml0ZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUNTO0FBQ047QUFDVztBQUVaO0FBQ0Q7QUFVdEQ7SUFPSSxnQ0FBb0IsWUFBeUIsRUFDakMsZ0JBQWtDLEVBQ2xDLGVBQStCO1FBRjNDLGlCQWFDO1FBYm1CLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBUDNDLGtCQUFhLEdBQXFCLEVBQUUsQ0FBQztRQVU3QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUU7aUJBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQXVCO2dCQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztRQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUdwQyxDQUFDO0lBRUQsc0JBQUkseUNBQUs7YUFJVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBTkQsVUFBVSxLQUF1QjtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQU1ELHlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pHLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCx5Q0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsd0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsMENBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsSUFBMkI7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUN2QixJQUFJLG1FQUFTLEVBQUU7Z0JBQ1gsK0RBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILDZEQUE2RDtnQkFDN0QsaUJBQWlCO2dCQUNqQix5QkFBeUI7YUFDNUI7U0FDSjtJQUNMLENBQUM7SUFFTyw0Q0FBVyxHQUFuQixVQUFvQixLQUF1QixFQUFFLElBQVk7UUFDckQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtZQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHNDQUFLLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsRUFBRTthQUNYO1lBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ25DLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRyxDQUFDOztnQkF4RWlDLDhEQUFXO2dCQUNmLHFFQUFnQjtnQkFDakIsOERBQWM7O0lBVGxDLHNCQUFzQjtRQUxsQywrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFFbEIsd0dBQThDO1NBQ2pELENBQUM7eUNBUW9DLDhEQUFXO1lBQ2YscUVBQWdCO1lBQ2pCLDhEQUFjO09BVGxDLHNCQUFzQixDQWdGbEM7SUFBRCw2QkFBQztDQUFBO0FBaEZrQyIsImZpbGUiOiJidW5kbGUuMDA0MjA4NjI2NWE3ZGU3NWUwZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIFRvb2xzSXRlbSB9IGZyb20gXCIuLi9jb3JlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUb3VjaEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xyXG5pbXBvcnQgeyBhZCwgaW9zIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuXHJcblxyXG5kZWNsYXJlIHZhciBVSUFwcGxpY2F0aW9uOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmF2b3JpdGVzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZmlsdGVyZWRJdGVtczogQXJyYXk8VG9vbHNJdGVtPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaXRlbXNTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9pdGVtczogQXJyYXk8VG9vbHNJdGVtPjtcclxuICAgIHByaXZhdGUgX3NlYXJjaFBocmFzZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtc1N1YnNjcmlwdGlvbiA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldExpa2VkSXRlbXMxJCgpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8VG9vbHNJdGVtPikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2l0ZW1zKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGl0ZW1zKGl0ZW1zOiBBcnJheTxUb29sc0l0ZW0+KSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXRlbXMoKTogQXJyYXk8VG9vbHNJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEl0ZW1zKGl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9ICEhdGhpcy5fc2VhcmNoUGhyYXNlID8gdGhpcy5maWx0ZXJJdGVtcyhpdGVtcywgdGhpcy5fc2VhcmNoUGhyYXNlKSA6IHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZWFyY2hQaHJhc2UgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuZmlsdGVySXRlbXModGhpcy5pdGVtcywgdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGVhcigpIHtcclxuICAgICAgICB0aGlzLl9zZWFyY2hQaHJhc2UgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNsaWtlKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5kaXNsaWtlKGFyZ3MuaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc0tleWJvYXJkKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkge1xyXG4gICAgICAgIGlmIChhcmdzLmFjdGlvbiA9PSBcImRvd25cIikge1xyXG4gICAgICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICBhZC5kaXNtaXNzU29mdElucHV0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpb3MuZ2V0dGVyKFVJQXBwbGljYXRpb24sIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24pXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLmtleVdpbmRvd1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5lbmRFZGl0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlsdGVySXRlbXMoaXRlbXM6IEFycmF5PFRvb2xzSXRlbT4sIHRleHQ6IHN0cmluZyk6IEFycmF5PFRvb2xzSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEubmFtZS5pbmNsdWRlcyh0ZXh0KSB8fCBkYXRhLmNvbXBhbnkuaW5jbHVkZXModGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRhcChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IGlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMuX2FjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvJywgeyBvdXRsZXRzOiB7IGZhdm9yaXRlc1RhYjogWydpdGVtJ10gfSB9XSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==