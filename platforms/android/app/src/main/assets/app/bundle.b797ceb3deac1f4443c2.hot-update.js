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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNEO0FBQ3dCO0FBRTFDO0FBQ21CO0FBQ21EO0FBYXJHO0lBT0ksNkJBQ1ksSUFBaUIsRUFDakIsS0FBcUIsRUFDckIsSUFBVTtRQUZWLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVJ0QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBV2hCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztJQUUvQyxDQUFDO0lBRUQsd0NBQVUsR0FBVixVQUFXLEVBQU87UUFBbEIsaUJBb0JDO1FBbkJHLElBQU0sTUFBTSxHQUFHLDRCQUE0QixDQUFDO1FBQzVDLElBQUksUUFBUSxDQUFDO1FBRWIscUVBQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU07WUFDMUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUViLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQjtnQkFDSSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQzVCLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzthQUV0QyxDQUNKO1FBRUwsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBR0QsbUNBQUssR0FBTCxVQUFNLEdBQVc7SUFDakIsQ0FBQztJQUlELHNDQUFRLEdBQVI7UUFDSSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQVNuQixJQUFJLCtEQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBS0Qsc0NBQVEsR0FBUixVQUFTLElBQXFCO1FBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUM7O2dCQWxFaUIsOERBQVc7Z0JBQ1YsOERBQWM7Z0JBQ2YsNENBQUk7O0lBVmIsbUJBQW1CO1FBTC9CLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUV0QixrR0FBMkM7U0FDOUMsQ0FBQzt5Q0FTb0IsOERBQVc7WUFDViw4REFBYztZQUNmLDRDQUFJO09BVmIsbUJBQW1CLENBMkUvQjtJQUFELDBCQUFDO0NBQUE7QUEzRStCIiwiZmlsZSI6ImJ1bmRsZS5iNzk3Y2ViM2RlYWMxZjQ0NDNjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIElEYXRhSXRlbSwgVG9vbHNJdGVtIH0gZnJvbSBcIi4uL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcsIHJlcXVlc3QsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS2V5d29yZGEge1xyXG4gICAga2V5d29yZD86IHN0cmluZztcclxuICAgIGNpdGF0aW9ucz86IGFueTtcclxuXHJcblxyXG59XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSXRlbURldGFpbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtOiBUb29sc0l0ZW07XHJcbiAgICBvcGFjaXR5OiBudW1iZXIgPSAxO1xyXG4gICAga2V5d29yZHNBcnJheTogYW55O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBkYXRhOiBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmtleXdvcmRzQXJyYXkgPSBuZXcgQXJyYXk8S2V5d29yZGE+KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0S2V5d29yZChpZDogYW55KSB7XHJcbiAgICAgICAgY29uc3QgYXBpVXJsID0gXCJodHRwczovL2FwaTMuc2tvZXJuZXIuY29tL1wiO1xyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuXHJcbiAgICAgICAgZ2V0SlNPTihhcGlVcmwgKyBcImtleXdvcmQvXCIgKyBpZCkudGhlbigocjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMua2V5d29yZHNBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6IHJlc3BvbnNlWzBdLmtleXdvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2l0YXRpb25zOiByZXNwb25zZVswXS5jaXRhdGlvbnNbMF0sXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVGFwKHNyYzogc3RyaW5nKXtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1snaWQnXTtcclxuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLmRhdGEuZ2V0SXRlbShpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0S2V5d29yZCgxKTtcclxuICAgICAgICB0aGlzLmdldEtleXdvcmQoMik7XHJcbiAgICAgICAgdGhpcy5nZXRLZXl3b3JkKDMpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcclxuICAgICAgICBpZiAoYXJncy5zY3JvbGxZID4gMCAmJiBhcmdzLnNjcm9sbFkgPCAyMzApIHtcclxuICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMSAtIChhcmdzLnNjcm9sbFkgKiAwLjAwNDMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5zY3JvbGxZIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9