webpackHotUpdate("bundle",{

/***/ "./favorites-list/favorites-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesListComponent", function() { return FavoritesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./core/data.service.ts");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular");
/* harmony import */ var nativescript_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/utils/utils");
/* harmony import */ var tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_utils_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_5__);






var FavoritesListComponent = /** @class */ (function () {
    function FavoritesListComponent(_dataService, routerExtensions, _activatedRoute) {
        var _this = this;
        this._dataService = _dataService;
        this.routerExtensions = routerExtensions;
        this._activatedRoute = _activatedRoute;
        this.filteredItems = [];
        this._itemsSubscription = this._dataService.getLikedItems1$()
            .subscribe(function (items) {
            _this.setItems(items);
        });
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
            return data.title.includes(text) || data.author.includes(text);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mYXZvcml0ZXMtbGlzdC9mYXZvcml0ZXMtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUQ7QUFDUztBQUNOO0FBQ1c7QUFFWjtBQUNEO0FBU3REO0lBT0ksZ0NBQW9CLFlBQXlCLEVBQ2pDLGdCQUFrQyxFQUNsQyxlQUErQjtRQUYzQyxpQkFPQztRQVBtQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUNqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQVAzQyxrQkFBYSxHQUFxQixFQUFFLENBQUM7UUFRakMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFO2FBQ3hELFNBQVMsQ0FBQyxVQUFDLEtBQXVCO1lBQy9CLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0JBQUkseUNBQUs7YUFJVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBTkQsVUFBVSxLQUF1QjtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQU1ELHlDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pHLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCx5Q0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsd0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBRUQsMENBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsSUFBMkI7UUFDdkMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUN2QixJQUFJLG1FQUFTLEVBQUU7Z0JBQ1gsK0RBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILDZEQUE2RDtnQkFDN0QsaUJBQWlCO2dCQUNqQix5QkFBeUI7YUFDNUI7U0FDSjtJQUNMLENBQUM7SUFFTyw0Q0FBVyxHQUFuQixVQUFvQixLQUF1QixFQUFFLElBQVk7UUFDckQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtZQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHNDQUFLLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUUsRUFBRTthQUNYO1lBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQ25DLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRyxDQUFDOztnQkFsRWlDLDhEQUFXO2dCQUNmLHFFQUFnQjtnQkFDakIsOERBQWM7O0lBVGxDLHNCQUFzQjtRQUxsQywrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFFbEIsd0dBQThDO1NBQ2pELENBQUM7eUNBUW9DLDhEQUFXO1lBQ2YscUVBQWdCO1lBQ2pCLDhEQUFjO09BVGxDLHNCQUFzQixDQTBFbEM7SUFBRCw2QkFBQztDQUFBO0FBMUVrQyIsImZpbGUiOiJidW5kbGUuYmUyNTU5OWRiZWQ5N2M4OTY4ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBJRGF0YUl0ZW0gfSBmcm9tIFwiLi4vY29yZS9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IGFkLCBpb3MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcblxuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTZWFyY2hcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmF2b3JpdGVzLWxpc3QuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBGYXZvcml0ZXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIGZpbHRlcmVkSXRlbXM6IEFycmF5PElEYXRhSXRlbT4gPSBbXTtcbiAgICBwcml2YXRlIF9pdGVtc1N1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIF9pdGVtczogQXJyYXk8SURhdGFJdGVtPjtcbiAgICBwcml2YXRlIF9zZWFyY2hQaHJhc2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24gPSB0aGlzLl9kYXRhU2VydmljZS5nZXRMaWtlZEl0ZW1zMSQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1zKGl0ZW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldCBpdGVtcyhpdGVtczogQXJyYXk8SURhdGFJdGVtPikge1xuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgIH1cblxuICAgIHNldEl0ZW1zKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gISF0aGlzLl9zZWFyY2hQaHJhc2UgPyB0aGlzLmZpbHRlckl0ZW1zKGl0ZW1zLCB0aGlzLl9zZWFyY2hQaHJhc2UpIDogdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXRlbXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBvblNlYXJjaCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoUGhyYXNlID0gdGV4dDtcbiAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcyh0aGlzLml0ZW1zLCB0ZXh0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyKCkge1xuICAgICAgICB0aGlzLl9zZWFyY2hQaHJhc2UgPSBcIlwiO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIG9uRGlzbGlrZShhcmdzKSB7XG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmRpc2xpa2UoYXJncy5pdGVtKTtcbiAgICB9XG5cbiAgICBkaXNtaXNzS2V5Ym9hcmQoYXJnczogVG91Y2hHZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChhcmdzLmFjdGlvbiA9PSBcImRvd25cIikge1xuICAgICAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgICAgIGFkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaW9zLmdldHRlcihVSUFwcGxpY2F0aW9uLCBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKVxuICAgICAgICAgICAgICAgIC8vICAgICAua2V5V2luZG93XG4gICAgICAgICAgICAgICAgLy8gICAgIC5lbmRFZGl0aW5nKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaWx0ZXJJdGVtcyhpdGVtczogQXJyYXk8SURhdGFJdGVtPiwgdGV4dDogc3RyaW5nKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRpdGxlLmluY2x1ZGVzKHRleHQpIHx8IGRhdGEuYXV0aG9yLmluY2x1ZGVzKHRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGFwKGlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogaWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLl9hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvJywgeyBvdXRsZXRzOiB7IGZhdm9yaXRlc1RhYjogWydpdGVtJ10gfSB9XSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==