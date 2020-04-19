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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxSDtBQUN2RDtBQUMwQztBQUdSO0FBQ3RCO0FBa0IxRTtJQVlJLHVCQUFvQixZQUF5QixFQUFVLEdBQXNCO1FBQXpELGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFYbkUsVUFBSyxHQUFzQixJQUFJLDBEQUFZLEVBQUUsQ0FBQztRQUl4RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLE9BQUUsR0FBWSxLQUFLLENBQUM7UUFPaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLDZGQUFlLENBQUMsU0FBUyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsMEZBQVksQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNKOzs7Ozs7OztvQkFRWTtJQUVSLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0cscUJBQXFCO0lBQ3hCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQUEsaUJBTUM7UUFMRyxVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3RELEtBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ2YsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHlDQUFpQixHQUFqQixVQUFrQixLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVztRQUFuRSxpQkFrQkM7UUFqQkcsSUFBTSxXQUFXLEdBQTZC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QUM7O2dCQXpHaUMsOERBQVc7Z0JBQWUsK0RBQWlCOztJQVhuRTtRQUFULDREQUFNLEVBQUU7a0NBQVEsMERBQVk7Z0RBQTJCO0lBRC9DLGFBQWE7UUFoQnpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUVoQixvRkFBb0M7WUFDcEMsVUFBVSxFQUFFO2dCQUNSLG1FQUFPLENBQUMsTUFBTSxFQUFFO29CQUNaLHNFQUFVLENBQUMsUUFBUSxFQUFFO3dCQUNqQixpRUFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO3dCQUNyQixtRUFBTyxDQUFDLEdBQUcsRUFBRSxpRUFBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3RDLENBQUM7b0JBQ0Ysc0VBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLG1FQUFPLENBQUMsR0FBRyxFQUFFLGlFQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDdEMsQ0FBQztpQkFDTCxDQUFDO2FBQ0w7U0FDSixDQUFDO3lDQWFvQyw4REFBVyxFQUFlLCtEQUFpQjtPQVpwRSxhQUFhLENBc0h6QjtJQUFELG9CQUFDO0NBQUE7QUF0SHlCIiwiZmlsZSI6ImJ1bmRsZS5hYTFhOWUxY2I1OTY3Y2UzNTJjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCAgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UsIElEYXRhSXRlbSB9IGZyb20gXCIuLi9jb3JlL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFBhbkdlc3R1cmVFdmVudERhdGEsIFRvdWNoR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XHJcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IFN3aXBlTGF5b3V0LCBTd2lwZUxlZnRFdmVudERhdGEsIFN3aXBlUmlnaHRFdmVudERhdGEgfSBmcm9tIFwiLi4vbmF0aXZlc2NyaXB0LXN3aXBlLWxheW91dFwiO1xyXG5pbXBvcnQgeyBBTklNQVRJT05fU1RBVEUsIEdFU1RVUkVfTU9ERSB9IGZyb20gXCIuLi9uYXRpdmVzY3JpcHQtc3dpcGUtbGF5b3V0L3N3aXBlLWxheW91dC5lbnVtc1wiO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKFwiZmFkZVwiLCBbXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCI6ZW50ZXJcIiwgW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgyMDAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSlcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oXCI6bGVhdmVcIiwgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgyMDAsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgY2xlYXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNhcmRzOiBBcnJheTxJRGF0YUl0ZW0+O1xyXG4gICAgZ2VzdHVyZU1vZGU6IEdFU1RVUkVfTU9ERTtcclxuICAgIGlzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBnbzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXBlTGF5b3V0QW5pbWF0ZWQ6IEFOSU1BVElPTl9TVEFURTtcclxuICAgIHByaXZhdGUgX3N3aXBlTGF5b3V0czogQXJyYXk8U3dpcGVMYXlvdXQ+O1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudFN3aXBlTGF5b3V0OiBTd2lwZUxheW91dDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHRoaXMuX3N3aXBlTGF5b3V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3dpcGVMYXlvdXRBbmltYXRlZCA9IEFOSU1BVElPTl9TVEFURS5PTl9FVkVOVFM7XHJcbiAgICAgICAgdGhpcy5nZXN0dXJlTW9kZSA9IEdFU1RVUkVfTU9ERS5EUkFHO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuLyogICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDIyMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgIC8vICB0aGlzLmluaXRDYXJkcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDYXJkcygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuX2RhdGFTZXJ2aWNlLmdldFVuc2Vlbkl0ZW1zKCkgfHwgW107XHJcbiAgICAgICAgICAgIHRoaXMuZ28gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXBlTGF5b3V0TG9hZGVkKGV2ZW50LCBidG5MaWtlLCBidG5JZ25vcmUsIGJhZGdlTGlrZSwgYmFkZ2VJZ25vcmUpIHtcclxuICAgICAgICBjb25zdCBzd2lwZUxheW91dDogU3dpcGVMYXlvdXQgPSA8U3dpcGVMYXlvdXQ+ZXZlbnQub2JqZWN0O1xyXG4gICAgICAgIHRoaXMuX3N3aXBlTGF5b3V0cy5wdXNoKHN3aXBlTGF5b3V0KTtcclxuICAgICAgICBzd2lwZUxheW91dC5vbihHZXN0dXJlVHlwZXMucGFuLCAoYXJnczogUGFuR2VzdHVyZUV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2ZWN0b3JMZW5ndGggPSAoTWF0aC5zcXJ0KE1hdGgucG93KGFyZ3MuZGVsdGFYLCAyKSArIE1hdGgucG93KGFyZ3MuZGVsdGFZLCAyKSkpO1xyXG4gICAgICAgICAgICBidG5MaWtlLm9wYWNpdHkgPSB0aGlzLm1hcFZlY3Rvckxlbmd0aFRvT3BhY2l0eSh2ZWN0b3JMZW5ndGgpO1xyXG4gICAgICAgICAgICBidG5JZ25vcmUub3BhY2l0eSA9IHRoaXMubWFwVmVjdG9yTGVuZ3RoVG9PcGFjaXR5KHZlY3Rvckxlbmd0aCk7XHJcbiAgICAgICAgICAgIGJhZGdlTGlrZS5vcGFjaXR5ID0gdGhpcy5iYWRnZU9wYWNpdHkoYXJncy5kZWx0YVgpO1xyXG4gICAgICAgICAgICBiYWRnZUlnbm9yZS5vcGFjaXR5ID0gdGhpcy5iYWRnZU9wYWNpdHkoLWFyZ3MuZGVsdGFYKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzd2lwZUxheW91dC5vbihHZXN0dXJlVHlwZXMudG91Y2gsIChhcmdzOiBUb3VjaEdlc3R1cmVFdmVudERhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFyZ3MuYWN0aW9uID09PSBcInVwXCIpIHtcclxuICAgICAgICAgICAgICAgIGJ0bkxpa2UuYW5pbWF0ZSh7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA1MDAgfSk7XHJcbiAgICAgICAgICAgICAgICBidG5JZ25vcmUuYW5pbWF0ZSh7IG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA1MDAgfSk7XHJcbiAgICAgICAgICAgICAgICBiYWRnZUxpa2UuYW5pbWF0ZSh7IG9wYWNpdHk6IDAsIGR1cmF0aW9uOiA1MDAgfSk7XHJcbiAgICAgICAgICAgICAgICBiYWRnZUlnbm9yZS5hbmltYXRlKHsgb3BhY2l0eTogMCwgZHVyYXRpb246IDUwMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29udGFpbmVyTG9hZGVkKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U3dpcGVMYXlvdXQgPSB0aGlzLl9zd2lwZUxheW91dHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgc3dpcGVMZWZ0Q2FsbGJhY2soc3dpcGVMZWZ0RXZlbnQ6IFN3aXBlTGVmdEV2ZW50RGF0YSwgY2FyZDogSURhdGFJdGVtKSB7XHJcbiAgICAgICAgY2FyZC5saWtlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmV4dChjYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBzd2lwZVJpZ2h0Q2FsbGJhY2soc3dpcGVSaWdodEV2ZW50OiBTd2lwZVJpZ2h0RXZlbnREYXRhLCBjYXJkOiBJRGF0YUl0ZW0pIHtcclxuICAgICAgICBjYXJkLmxpa2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5leHQoY2FyZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGluZShjYXJkOiBJRGF0YUl0ZW0pIHtcclxuICAgICAgICBjYXJkLmxpa2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN3aXBlTGF5b3V0LmFuaW1hdGVTd2lwZVJpZ2h0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dChjYXJkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaWtlKGNhcmQ6IElEYXRhSXRlbSkge1xyXG4gICAgICAgIGNhcmQubGlrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTd2lwZUxheW91dC5hbmltYXRlU3dpcGVMZWZ0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dChjYXJkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFja2luZ0Z1bmN0aW9uKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDYXJkcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5yZXNldEl0ZW1zKCk7XHJcbiAgICAgICAgdGhpcy5pbml0Q2FyZHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmRzLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXBWZWN0b3JMZW5ndGhUb09wYWNpdHkobDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChsIC0gMCkgKiAoMCAtIDEpIC8gKDgwIC0gMCkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYmFkZ2VPcGFjaXR5KGRlbHRhWDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChkZWx0YVggLSAyMCkgKiAoMSAtIDApIC8gKDEyMCAtIDIwKSArIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0KGNhcmQ6IElEYXRhSXRlbSkge1xyXG4gICAgICAgIGNhcmQudmlld2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9zd2lwZUxheW91dHMuc2hpZnQoKTtcclxuICAgICAgICB0aGlzLmNhcmRzLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFN3aXBlTGF5b3V0ID0gdGhpcy5fc3dpcGVMYXlvdXRzWzBdO1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLnVwZGF0ZUl0ZW0oY2FyZCk7XHJcbiAgICAgICAgdGhpcy5fY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFTZXJ2aWNlLmdldFRvb2xzKCk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==