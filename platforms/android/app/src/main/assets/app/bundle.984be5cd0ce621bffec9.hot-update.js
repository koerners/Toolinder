webpackHotUpdate("bundle",{

/***/ "./core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/@nativescript/core/http/http.js");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__);




var DataService = /** @class */ (function () {
    function DataService() {
        this.apiUrl = "https://api3.skoerner.com/";
        this._items = new Array();
        this._tools = new Array();
        this.getQuestions();
        this.getTools();
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems());
        this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems1());
    }
    DataService.prototype.getQuestions = function () {
        var _this = this;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["getJSON"])(this.apiUrl + "questions").then(function (r) {
            _this.questionJson = r;
            var i;
            for (i = 0; i < _this.questionJson.length; i++) {
                var id = _this.questionJson[i].id;
                var text = _this.questionJson[i].text;
                _this._items.push({
                    id: id,
                    text: text,
                    viewed: false,
                    liked: false
                });
            }
            _this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_this.cloneItems());
        }, function (e) {
        });
    };
    DataService.prototype.getTools = function () {
        var _this = this;
        var send = null;
        if (this._items.length > 1) {
            send = JSON.stringify(this.getLikedItems());
            console.log(send);
        }
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"])({
            url: this.apiUrl + "result",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: send
        }).then(function (response) {
            console.log(response);
            _this.toolsJson = response.content.toJSON();
            var i;
            for (i = 0; i < _this.toolsJson.length; i++) {
                _this._tools.push({
                    id: _this.toolsJson[i].id,
                    name: _this.toolsJson[i].name,
                    company: _this.toolsJson[i].company,
                    price: _this.toolsJson[i].price,
                    users: _this.toolsJson[i].users,
                    picture: _this.toolsJson[i].picture,
                    established: _this.toolsJson[i].established,
                    keywords: _this.toolsJson[i].keywords,
                    pro: _this.toolsJson[i].pro,
                    con: _this.toolsJson[i].con
                });
            }
            _this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_this.cloneItems1());
        }, function (e) {
        });
    };
    DataService.prototype.getItems = function () {
        return this._items$.getValue();
    };
    DataService.prototype.getItem = function (id) {
        return this._tools$.getValue().find(function (data) {
            return data.id == id;
        });
    };
    DataService.prototype.getIndex = function (item) {
        return this.getItems().findIndex(function (element) { return element.id === item.id; });
    };
    DataService.prototype.getUnseenItems$ = function () {
        return this._items$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.filter(function (item) { return !item.viewed; }); }));
    };
    DataService.prototype.getUnseenItems = function () {
        return this._items$.getValue().filter(function (item) { return !item.viewed; });
    };
    DataService.prototype.getLikedItems1$ = function () {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._tools$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tools) { return tools.filter(function (item) { return item; }); }));
    };
    DataService.prototype.getLikedItems1 = function () {
        return this._tools$.getValue().filter(function (item) { return item; });
    };
    DataService.prototype.getLikedItems$ = function () {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._items$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.filter(function (item) { return item.liked === true; }); }));
    };
    DataService.prototype.getLikedItems = function () {
        var liked = this._items$.getValue().filter(function (item) { return item.viewed; });
        var go = new Array();
        for (var i in liked) {
            go.push({
                id: liked[i].id,
                response: liked[i].liked
            });
        }
        return go;
    };
    DataService.prototype.updateItem = function (item) {
        var items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    };
    DataService.prototype.dislike = function (item) {
        item.liked = false;
        var items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    };
    DataService.prototype.resetItems = function () {
        this._items$.next(this.cloneItems());
    };
    DataService.prototype.cloneItems1 = function () {
        return JSON.parse(JSON.stringify(this._tools));
    };
    DataService.prototype.cloneItems = function () {
        return JSON.parse(JSON.stringify(this._items));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNRO0FBQ047QUFDd0Q7QUF3QnJHO0lBOEZJO1FBNUZBLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztRQVE5QixXQUFNLEdBQUcsSUFBSSxLQUFLLEVBRXpCLENBQUM7UUFJTSxXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQ3pCLENBQUM7UUErRUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0RBQWUsQ0FBbUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG9EQUFlLENBQW1CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFoRkQsa0NBQVksR0FBWjtRQUFBLGlCQXdCQztRQXRCRyxxRUFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTTtZQUMzQyxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUV0QixJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1o7b0JBQ0ks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QUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGlDQUFXLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNPLGdDQUFVLEdBQWxCO1FBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQW5MUSxXQUFXO1FBRHZCLGdFQUFVLEVBQUU7O09BQ0EsV0FBVyxDQW9MdkI7SUFBRCxrQkFBQztDQUFBO0FBcEx1QiIsImZpbGUiOiJidW5kbGUuOTg0YmU1Y2QwY2U2MjFiZmZlYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgaWQ6IGFueTtcclxuICAgIGxpa2VkPzogYm9vbGVhbjtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdmlld2VkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb29sc0l0ZW0ge1xyXG4gICAgaWQ6IGFueTtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbXBhbnk6IHN0cmluZztcclxuICAgIHByaWNlOiBzdHJpbmc7XHJcbiAgICB1c2VyczogYW55O1xyXG4gICAgcGljdHVyZTogc3RyaW5nO1xyXG4gICAgZXN0YWJsaXNoZWQ6IGJvb2xlYW47XHJcbiAgICBrZXl3b3JkczogbnVtYmVyW107XHJcbiAgICBwcm86IHN0cmluZ1tdO1xyXG4gICAgY29uOiBzdHJpbmdbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkzLnNrb2VybmVyLmNvbS9cIjtcclxuICAgIHF1ZXN0aW9uSnNvbjogYW55O1xyXG4gICAgdG9vbHNKc29uOiBhbnk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XHJcbiAgICBwcml2YXRlIF9pdGVtcyA9IG5ldyBBcnJheTxJRGF0YUl0ZW0+KFxyXG5cclxuICAgICk7XHJcblxyXG5cclxuICAgIHByaXZhdGUgX3Rvb2xzJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PFRvb2xzSXRlbT4+O1xyXG4gICAgcHJpdmF0ZSBfdG9vbHMgPSBuZXcgQXJyYXk8VG9vbHNJdGVtPihcclxuICAgICk7XHJcblxyXG5cclxuICAgIGdldFF1ZXN0aW9ucygpIHtcclxuXHJcbiAgICAgICAgZ2V0SlNPTih0aGlzLmFwaVVybCArIFwicXVlc3Rpb25zXCIpLnRoZW4oKHI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSnNvbiA9IHI7XHJcbiAgICBcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uSnNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5xdWVzdGlvbkpzb25baV0uaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMucXVlc3Rpb25Kc29uW2ldLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj4odGhpcy5jbG9uZUl0ZW1zKCkpO1xyXG5cclxuICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFRvb2xzKCkge1xyXG5cclxuICAgICAgICBsZXQgc2VuZCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy5faXRlbXMubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgIHNlbmQgPSAgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRMaWtlZEl0ZW1zKCkpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmQpO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsK1wicmVzdWx0XCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHNlbmRcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sc0pzb24gPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudG9vbHNKc29uLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG9vbHMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnRvb2xzSnNvbltpXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy50b29sc0pzb25baV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueTogdGhpcy50b29sc0pzb25baV0uY29tcGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHRoaXMudG9vbHNKc29uW2ldLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyczogdGhpcy50b29sc0pzb25baV0udXNlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmU6IHRoaXMudG9vbHNKc29uW2ldLnBpY3R1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFibGlzaGVkOiB0aGlzLnRvb2xzSnNvbltpXS5lc3RhYmxpc2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6IHRoaXMudG9vbHNKc29uW2ldLmtleXdvcmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm86IHRoaXMudG9vbHNKc29uW2ldLnBybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uOiB0aGlzLnRvb2xzSnNvbltpXS5jb25cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxUb29sc0l0ZW0+Pih0aGlzLmNsb25lSXRlbXMxKCkpO1xyXG5cclxuICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmdldFRvb2xzKCk7XHJcbiAgICAgICAgdGhpcy5faXRlbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMoKSk7XHJcbiAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxUb29sc0l0ZW0+Pih0aGlzLmNsb25lSXRlbXMxKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBUb29sc0l0ZW0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuZ2V0VmFsdWUoKS5maW5kKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmlkID09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4KGl0ZW06IElEYXRhSXRlbSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVuc2Vlbkl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VW5zZWVuSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMxJCgpOiBPYnNlcnZhYmxlPEFycmF5PFRvb2xzSXRlbT4+IHtcclxuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAucGlwZShtYXAoKHRvb2xzOiBBcnJheTxUb29sc0l0ZW0+KSA9PiB0b29scy5maWx0ZXIoKGl0ZW06IFRvb2xzSXRlbSkgPT4gaXRlbSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlZEl0ZW1zMSgpOiBBcnJheTxUb29sc0l0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBUb29sc0l0ZW0pID0+IGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xyXG4gICAgICAgIC8vIFRPRE86IEF1c3dhaGwgZGVzIFRvb2xzIGF1ZmdydW5kIGRlciBnZXfDpGhscmVuIERhdGVpZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMoKTogQXJyYXk8YW55PiB7XHJcbiAgICAgICAgbGV0IGxpa2VkID0gIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLnZpZXdlZCk7XHJcbiAgICAgICAgbGV0IGdvID0gbmV3IEFycmF5PGFueT4oKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGxpa2VkKSB7XHJcbiAgICAgICAgICAgIGdvLnB1c2goXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGxpa2VkW2ldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBsaWtlZFtpXS5saWtlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnbztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGl0ZW06IElEYXRhSXRlbSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbGlrZShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBpdGVtLmxpa2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcbiAgICAgICAgaXRlbXNbdGhpcy5nZXRJbmRleChpdGVtKV0gPSBpdGVtO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEl0ZW1zKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KHRoaXMuY2xvbmVJdGVtcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb25lSXRlbXMxKCk6IEFycmF5PFRvb2xzSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3Rvb2xzKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNsb25lSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcblxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX2l0ZW1zKSk7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=