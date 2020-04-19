webpackHotUpdate("bundle",{

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./core/data.service.ts");
/* harmony import */ var tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/gestures/gestures.js");
/* harmony import */ var tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./nativescript-swipe-layout/swipe-layout.enums.js");
/* harmony import */ var _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/@angular/animations/fesm5/animations.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dataService, _cd) {
        this._dataService = _dataService;
        this._cd = _cd;
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoaded = false;
        this.go = false;
        this._swipeLayouts = [];
        this.swipeLayoutAnimated = _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_STATE"].ON_EVENTS;
        this.gestureMode = _nativescript_swipe_layout_swipe_layout_enums__WEBPACK_IMPORTED_MODULE_3__["GESTURE_MODE"].DRAG;
    }
    HomeComponent.prototype.ngAfterContentInit = function () {
        /*         if (isAndroid) {
                    setTimeout(() => {
                        this.isLoaded = true;
                    }, 2200);
                } else {
                    setTimeout(() => {
                        this.isLoaded = true;
                    }, 500);
                } */
    };
    HomeComponent.prototype.ngOnInit = function () {
        //  this.initCards();
    };
    HomeComponent.prototype.initCards = function () {
        var _this = this;
        setTimeout(function () {
            _this.cards = _this._dataService.getUnseenItems() || [];
            _this.go = true;
            _this.isLoaded = true;
        }, 100);
    };
    HomeComponent.prototype.swipeLayoutLoaded = function (event, btnLike, btnIgnore, badgeLike, badgeIgnore) {
        var _this = this;
        var swipeLayout = event.object;
        this._swipeLayouts.push(swipeLayout);
        swipeLayout.on(tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].pan, function (args) {
            var vectorLength = (Math.sqrt(Math.pow(args.deltaX, 2) + Math.pow(args.deltaY, 2)));
            btnLike.opacity = _this.mapVectorLengthToOpacity(vectorLength);
            btnIgnore.opacity = _this.mapVectorLengthToOpacity(vectorLength);
            badgeLike.opacity = _this.badgeOpacity(args.deltaX);
            badgeIgnore.opacity = _this.badgeOpacity(-args.deltaX);
        });
        swipeLayout.on(tns_core_modules_ui_gestures__WEBPACK_IMPORTED_MODULE_2__["GestureTypes"].touch, function (args) {
            if (args.action === "up") {
                btnLike.animate({ opacity: 1, duration: 500 });
                btnIgnore.animate({ opacity: 1, duration: 500 });
                badgeLike.animate({ opacity: 0, duration: 500 });
                badgeIgnore.animate({ opacity: 0, duration: 500 });
            }
        });
    };
    HomeComponent.prototype.onContainerLoaded = function (args) {
        this._currentSwipeLayout = this._swipeLayouts[0];
    };
    HomeComponent.prototype.swipeLeftCallback = function (swipeLeftEvent, card) {
        card.liked = false;
        this.next(card);
    };
    HomeComponent.prototype.swipeRightCallback = function (swipeRightEvent, card) {
        card.liked = true;
        this.next(card);
    };
    HomeComponent.prototype.decline = function (card) {
        var _this = this;
        card.liked = false;
        this._currentSwipeLayout.animateSwipeRight().then(function () {
            _this.next(card);
        });
    };
    HomeComponent.prototype.like = function (card) {
        var _this = this;
        card.liked = true;
        this._currentSwipeLayout.animateSwipeLeft().then(function () {
            _this.next(card);
        });
    };
    HomeComponent.prototype.trackingFunction = function (index, item) {
        return item.id;
    };
    HomeComponent.prototype.resetCards = function () {
        this._dataService.resetItems();
        this.initCards();
        console.log(this.cards.length);
    };
    HomeComponent.prototype.mapVectorLengthToOpacity = function (l) {
        return (l - 0) * (0 - 1) / (80 - 0) + 1;
    };
    HomeComponent.prototype.badgeOpacity = function (deltaX) {
        return (deltaX - 20) * (1 - 0) / (120 - 20) + 0;
    };
    HomeComponent.prototype.next = function (card) {
        card.viewed = true;
        this._swipeLayouts.shift();
        this.cards.shift();
        this._currentSwipeLayout = this._swipeLayouts[0];
        this._dataService.updateItem(card);
        this._cd.detectChanges();
        this._dataService.getTools();
        this.clear.emit();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HomeComponent.prototype, "clear", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":enter", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(":leave", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_core_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxSDtBQUN2RDtBQUMwQztBQUdSO0FBQ3RCO0FBa0IxRTtJQVlJLHVCQUFvQixZQUF5QixFQUFVLEdBQXNCO1FBQXpELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFYbkUsVUFBSyxHQUFzQixJQUFJLDBEQUFZLEVBQUUsQ0FBQztRQUl4RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLE9BQUUsR0FBWSxLQUFLLENBQUM7UUFPaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLDZGQUFlLENBQUMsU0FBUyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsMEZBQVksQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNKOzs7Ozs7OztvQkFRWTtJQUVSLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0cscUJBQXFCO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQUEsaUJBTUM7UUFMRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3RELEtBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2YsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVztRQUFuRSxpQkFrQkM7UUFqQkcsSUFBTSxXQUFXLEdBQTZCLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsV0FBVyxDQUFDLEVBQUUsQ0FBQyx5RUFBWSxDQUFDLEdBQUcsRUFBRSxVQUFDLElBQXlCO1lBQ3ZELElBQU0sWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RixPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM5RCxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoRSxTQUFTLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNILFdBQVcsQ0FBQyxFQUFFLENBQUMseUVBQVksQ0FBQyxLQUFLLEVBQUUsVUFBQyxJQUEyQjtZQUMzRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRCxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzthQUN0RDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixJQUFJO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsY0FBa0MsRUFBRSxJQUFlO1FBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELDBDQUFrQixHQUFsQixVQUFtQixlQUFvQyxFQUFFLElBQWU7UUFDcEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLElBQWU7UUFBdkIsaUJBS0M7UUFKRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDOUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssSUFBZTtRQUFwQixpQkFLQztRQUpHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQztZQUM3QyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLGdEQUF3QixHQUFoQyxVQUFpQyxDQUFTO1FBQ3RDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyxvQ0FBWSxHQUFwQixVQUFxQixNQUFjO1FBQy9CLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTyw0QkFBSSxHQUFaLFVBQWEsSUFBZTtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFdEIsQ0FBQzs7Z0JBM0dpQyw4REFBVztnQkFBZSwrREFBaUI7O0lBWG5FO1FBQVQsNERBQU0sRUFBRTtrQ0FBUSwwREFBWTtnREFBMkI7SUFEL0MsYUFBYTtRQWhCekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBRWhCLG9GQUFvQztZQUNwQyxVQUFVLEVBQUU7Z0JBQ1IsbUVBQU8sQ0FBQyxNQUFNLEVBQUU7b0JBQ1osc0VBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLGlFQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLG1FQUFPLENBQUMsR0FBRyxFQUFFLGlFQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDdEMsQ0FBQztvQkFDRixzRUFBVSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsbUVBQU8sQ0FBQyxHQUFHLEVBQUUsaUVBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUN0QyxDQUFDO2lCQUNMLENBQUM7YUFDTDtTQUNKLENBQUM7eUNBYW9DLDhEQUFXLEVBQWUsK0RBQWlCO09BWnBFLGFBQWEsQ0F3SHpCO0lBQUQsb0JBQUM7Q0FBQTtBQXhIeUIiLCJmaWxlIjoiYnVuZGxlLjMxYWYyOTc4NGViYjU3NTVkYzYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsICBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSwgSURhdGFJdGVtIH0gZnJvbSBcIi4uL2NvcmUvZGF0YS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdlc3R1cmVUeXBlcywgUGFuR2VzdHVyZUV2ZW50RGF0YSwgVG91Y2hHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgU3dpcGVMYXlvdXQsIFN3aXBlTGVmdEV2ZW50RGF0YSwgU3dpcGVSaWdodEV2ZW50RGF0YSB9IGZyb20gXCIuLi9uYXRpdmVzY3JpcHQtc3dpcGUtbGF5b3V0XCI7XHJcbmltcG9ydCB7IEFOSU1BVElPTl9TVEFURSwgR0VTVFVSRV9NT0RFIH0gZnJvbSBcIi4uL25hdGl2ZXNjcmlwdC1zd2lwZS1sYXlvdXQvc3dpcGUtbGF5b3V0LmVudW1zXCI7XHJcbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoXCJmYWRlXCIsIFtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbihcIjplbnRlclwiLCBbXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoeyBvcGFjaXR5OiAxIH0pKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbihcIjpsZWF2ZVwiLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDIwMCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICAgIEBPdXRwdXQoKSBjbGVhcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY2FyZHM6IEFycmF5PElEYXRhSXRlbT47XHJcbiAgICBnZXN0dXJlTW9kZTogR0VTVFVSRV9NT0RFO1xyXG4gICAgaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGdvOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgc3dpcGVMYXlvdXRBbmltYXRlZDogQU5JTUFUSU9OX1NUQVRFO1xyXG4gICAgcHJpdmF0ZSBfc3dpcGVMYXlvdXRzOiBBcnJheTxTd2lwZUxheW91dD47XHJcbiAgICBwcml2YXRlIF9jdXJyZW50U3dpcGVMYXlvdXQ6IFN3aXBlTGF5b3V0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSwgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgdGhpcy5fc3dpcGVMYXlvdXRzID0gW107XHJcbiAgICAgICAgdGhpcy5zd2lwZUxheW91dEFuaW1hdGVkID0gQU5JTUFUSU9OX1NUQVRFLk9OX0VWRU5UUztcclxuICAgICAgICB0aGlzLmdlc3R1cmVNb2RlID0gR0VTVFVSRV9NT0RFLkRSQUc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4vKiAgICAgICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgMjIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9ICovXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgLy8gIHRoaXMuaW5pdENhcmRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENhcmRzKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5fZGF0YVNlcnZpY2UuZ2V0VW5zZWVuSXRlbXMoKSB8fCBbXTtcclxuICAgICAgICAgICAgdGhpcy5nbyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpcGVMYXlvdXRMb2FkZWQoZXZlbnQsIGJ0bkxpa2UsIGJ0bklnbm9yZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSkge1xyXG4gICAgICAgIGNvbnN0IHN3aXBlTGF5b3V0OiBTd2lwZUxheW91dCA9IDxTd2lwZUxheW91dD5ldmVudC5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5fc3dpcGVMYXlvdXRzLnB1c2goc3dpcGVMYXlvdXQpO1xyXG4gICAgICAgIHN3aXBlTGF5b3V0Lm9uKEdlc3R1cmVUeXBlcy5wYW4sIChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlY3Rvckxlbmd0aCA9IChNYXRoLnNxcnQoTWF0aC5wb3coYXJncy5kZWx0YVgsIDIpICsgTWF0aC5wb3coYXJncy5kZWx0YVksIDIpKSk7XHJcbiAgICAgICAgICAgIGJ0bkxpa2Uub3BhY2l0eSA9IHRoaXMubWFwVmVjdG9yTGVuZ3RoVG9PcGFjaXR5KHZlY3Rvckxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJ0bklnbm9yZS5vcGFjaXR5ID0gdGhpcy5tYXBWZWN0b3JMZW5ndGhUb09wYWNpdHkodmVjdG9yTGVuZ3RoKTtcclxuICAgICAgICAgICAgYmFkZ2VMaWtlLm9wYWNpdHkgPSB0aGlzLmJhZGdlT3BhY2l0eShhcmdzLmRlbHRhWCk7XHJcbiAgICAgICAgICAgIGJhZGdlSWdub3JlLm9wYWNpdHkgPSB0aGlzLmJhZGdlT3BhY2l0eSgtYXJncy5kZWx0YVgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN3aXBlTGF5b3V0Lm9uKEdlc3R1cmVUeXBlcy50b3VjaCwgKGFyZ3M6IFRvdWNoR2VzdHVyZUV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXJncy5hY3Rpb24gPT09IFwidXBcIikge1xyXG4gICAgICAgICAgICAgICAgYnRuTGlrZS5hbmltYXRlKHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcclxuICAgICAgICAgICAgICAgIGJ0bklnbm9yZS5hbmltYXRlKHsgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcclxuICAgICAgICAgICAgICAgIGJhZGdlTGlrZS5hbmltYXRlKHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDUwMCB9KTtcclxuICAgICAgICAgICAgICAgIGJhZGdlSWdub3JlLmFuaW1hdGUoeyBvcGFjaXR5OiAwLCBkdXJhdGlvbjogNTAwIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250YWluZXJMb2FkZWQoYXJncykge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTd2lwZUxheW91dCA9IHRoaXMuX3N3aXBlTGF5b3V0c1swXTtcclxuICAgIH1cclxuXHJcbiAgICBzd2lwZUxlZnRDYWxsYmFjayhzd2lwZUxlZnRFdmVudDogU3dpcGVMZWZ0RXZlbnREYXRhLCBjYXJkOiBJRGF0YUl0ZW0pIHtcclxuICAgICAgICBjYXJkLmxpa2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZXh0KGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXBlUmlnaHRDYWxsYmFjayhzd2lwZVJpZ2h0RXZlbnQ6IFN3aXBlUmlnaHRFdmVudERhdGEsIGNhcmQ6IElEYXRhSXRlbSkge1xyXG4gICAgICAgIGNhcmQubGlrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubmV4dChjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNsaW5lKGNhcmQ6IElEYXRhSXRlbSkge1xyXG4gICAgICAgIGNhcmQubGlrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3dpcGVMYXlvdXQuYW5pbWF0ZVN3aXBlUmlnaHQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KGNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxpa2UoY2FyZDogSURhdGFJdGVtKSB7XHJcbiAgICAgICAgY2FyZC5saWtlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN3aXBlTGF5b3V0LmFuaW1hdGVTd2lwZUxlZnQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KGNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNraW5nRnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZDtcclxuICAgIH1cclxuXHJcbiAgICByZXNldENhcmRzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnJlc2V0SXRlbXMoKTtcclxuICAgICAgICB0aGlzLmluaXRDYXJkcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FyZHMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hcFZlY3Rvckxlbmd0aFRvT3BhY2l0eShsOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKGwgLSAwKSAqICgwIC0gMSkgLyAoODAgLSAwKSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBiYWRnZU9wYWNpdHkoZGVsdGFYOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKGRlbHRhWCAtIDIwKSAqICgxIC0gMCkgLyAoMTIwIC0gMjApICsgMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHQoY2FyZDogSURhdGFJdGVtKSB7XHJcbiAgICAgICAgY2FyZC52aWV3ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3N3aXBlTGF5b3V0cy5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuY2FyZHMuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3dpcGVMYXlvdXQgPSB0aGlzLl9zd2lwZUxheW91dHNbMF07XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UudXBkYXRlSXRlbShjYXJkKTtcclxuICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0VG9vbHMoKTtcclxuICAgICAgICB0aGlzLmNsZWFyLmVtaXQoKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==