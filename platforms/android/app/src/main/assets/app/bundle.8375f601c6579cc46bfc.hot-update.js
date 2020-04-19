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
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5__);






var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(data, route, page) {
        this.data = data;
        this.route = route;
        this.page = page;
        this.opacity = 1;
        this.keywordsArray = new Array();
    }
    ItemDetailComponent.prototype.getKeyword = function (id) {
        var _this = this;
        var apiUrl = "https://api3.skoerner.com/";
        var response;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_5__["getJSON"])(apiUrl + "keyword/" + id).then(function (r) {
            response = r;
            _this.keywordsArray.push({
                keyword: response[0].keyword,
                citations: response[0].citations[0],
            });
        }, function (e) {
            console.log(e);
        });
    };
    ItemDetailComponent.prototype.onTap = function (src) {
    };
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.queryParams['id'];
        this.item = this.data.getItem(id);
        this.item.keywords.forEach(function (element) { return console.log(element); });
        this.getKeyword(1);
        this.getKeyword(2);
        this.getKeyword(3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBQ3dCO0FBRTFDO0FBQ21CO0FBQ21EO0FBYXJHO0lBT0ksNkJBQ1ksSUFBaUIsRUFDakIsS0FBcUIsRUFDckIsSUFBVTtRQUZWLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVJ0QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBV2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztJQUUvQyxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEVBQU87UUFBbEIsaUJBb0JDO1FBbkJHLElBQU0sTUFBTSxHQUFHLDRCQUE0QixDQUFDO1FBQzVDLElBQUksUUFBUSxDQUFDO1FBRWIscUVBQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU07WUFDMUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUViLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQjtnQkFDSSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQzVCLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUV0QyxDQUNKO1FBRUwsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBR0QsbUNBQUssR0FBTCxVQUFNLEdBQVc7SUFDakIsQ0FBQztJQUlELHNDQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsaUJBQU8sSUFBSSxjQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFHNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFTbkIsSUFBSSwrREFBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUtELHNDQUFRLEdBQVIsVUFBUyxJQUFxQjtRQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDOztnQkFyRWlCLDhEQUFXO2dCQUNWLDhEQUFjO2dCQUNmLDRDQUFJOztJQVZiLG1CQUFtQjtRQUwvQiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFFdEIsa0dBQTJDO1NBQzlDLENBQUM7eUNBU29CLDhEQUFXO1lBQ1YsOERBQWM7WUFDZiw0Q0FBSTtPQVZiLG1CQUFtQixDQThFL0I7SUFBRCwwQkFBQztDQUFBO0FBOUUrQiIsImZpbGUiOiJidW5kbGUuODM3NWY2MDFjNjU3OWNjNDZiZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlLCBJRGF0YUl0ZW0sIFRvb2xzSXRlbSB9IGZyb20gXCIuLi9jb3JlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgaXNJT1MgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEtleXdvcmRhIHtcclxuICAgIGtleXdvcmQ/OiBzdHJpbmc7XHJcbiAgICBjaXRhdGlvbnM/OiBhbnk7XHJcblxyXG5cclxufVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkl0ZW1EZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW0tZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaXRlbTogVG9vbHNJdGVtO1xyXG4gICAgb3BhY2l0eTogbnVtYmVyID0gMTtcclxuICAgIGtleXdvcmRzQXJyYXk6IGFueTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZGF0YTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlXHJcbiAgICApIHtcclxuXHJcbiAgICAgICAgdGhpcy5rZXl3b3Jkc0FycmF5ID0gbmV3IEFycmF5PEtleXdvcmRhPigpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldEtleXdvcmQoaWQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkzLnNrb2VybmVyLmNvbS9cIjtcclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcblxyXG4gICAgICAgIGdldEpTT04oYXBpVXJsICsgXCJrZXl3b3JkL1wiICsgaWQpLnRoZW4oKHI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmtleXdvcmRzQXJyYXkucHVzaChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiByZXNwb25zZVswXS5rZXl3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdGF0aW9uczogcmVzcG9uc2VbMF0uY2l0YXRpb25zWzBdLFxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblRhcChzcmM6IHN0cmluZyl7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5kYXRhLmdldEl0ZW0oaWQpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW0ua2V5d29yZHMuZm9yRWFjaChlbGVtZW50ID0+IGNvbnNvbGUubG9nKGVsZW1lbnQpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0S2V5d29yZCgxKTtcclxuICAgICAgICB0aGlzLmdldEtleXdvcmQoMik7XHJcbiAgICAgICAgdGhpcy5nZXRLZXl3b3JkKDMpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcclxuICAgICAgICBpZiAoYXJncy5zY3JvbGxZID4gMCAmJiBhcmdzLnNjcm9sbFkgPCAyMzApIHtcclxuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMSAtIChhcmdzLnNjcm9sbFkgKiAwLjAwNDMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zY3JvbGxZIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9