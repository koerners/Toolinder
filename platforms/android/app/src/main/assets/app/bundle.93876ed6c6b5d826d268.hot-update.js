webpackHotUpdate("bundle",{

/***/ "./item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./core/data.service.ts");
/* harmony import */ var ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/ui/page/page.js");
/* harmony import */ var ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__);





var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(data, route, page) {
        this.data = data;
        this.route = route;
        this.page = page;
        this.opacity = 1;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.queryParams['id'];
        this.item = this.data.getItem(id);
        if (tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_4__["isIOS"]) {
            this.page.actionBarHidden = true;
        }
    };
    ItemDetailComponent.prototype.onScroll = function (args) {
        if (args.scrollY > 0 && args.scrollY < 230) {
            this.opacity = 1 - (args.scrollY * 0.0043);
        }
        else if (args.scrollY < 0) {
            this.opacity = 1;
        }
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ItemDetail",
            template: __importDefault(__webpack_require__("./item-detail/item-detail.component.html")).default
        }),
        __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0Q7QUFDYTtBQUUvQjtBQUNtQjtBQVFsRDtJQUlJLDZCQUNZLElBQWlCLEVBQ2pCLEtBQXFCLEVBQ3JCLElBQVU7UUFGVixTQUFJLEdBQUosSUFBSSxDQUFhO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQU07UUFMdEIsWUFBTyxHQUFXLENBQUMsQ0FBQztJQU9wQixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksK0RBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsSUFBcUI7UUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQzs7Z0JBcEJpQiw4REFBVztnQkFDViw4REFBYztnQkFDZiw0Q0FBSTs7SUFQYixtQkFBbUI7UUFML0IsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBRXRCLGtHQUEyQztTQUM5QyxDQUFDO3lDQU1vQiw4REFBVztZQUNWLDhEQUFjO1lBQ2YsNENBQUk7T0FQYixtQkFBbUIsQ0EwQi9CO0lBQUQsMEJBQUM7Q0FBQTtBQTFCK0IiLCJmaWxlIjoiYnVuZGxlLjkzODc2ZWQ2YzZiNWQ4MjZkMjY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgSURhdGFJdGVtIH0gZnJvbSBcIi4uL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJJdGVtRGV0YWlsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGl0ZW06IElEYXRhSXRlbTtcclxuICAgIG9wYWNpdHk6IG51bWJlciA9IDE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhOiBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snaWQnXTtcclxuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLmRhdGEuZ2V0SXRlbShpZCk7XHJcbiAgICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcclxuICAgICAgICBpZiAoYXJncy5zY3JvbGxZID4gMCAmJiBhcmdzLnNjcm9sbFkgPCAyMzApIHtcclxuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMSAtIChhcmdzLnNjcm9sbFkgKiAwLjAwNDMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zY3JvbGxZIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9