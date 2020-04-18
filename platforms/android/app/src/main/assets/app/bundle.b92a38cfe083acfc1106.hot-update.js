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
            console.log(_this.questionJson);
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
            console.log(_this._items);
        }, function (e) {
            console.log(e);
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
            _this.toolsJson = response.content.toJSON();
            var i;
            for (i = 0; i < _this.toolsJson.length; i++) {
                _this._tools.push({
                    id: _this.toolsJson.i.id,
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
            console.log(_this._tools);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNRO0FBQ047QUFDd0Q7QUF3QnJHO0lBZ0dJO1FBOUZBLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztRQVE5QixXQUFNLEdBQUcsSUFBSSxLQUFLLEVBRXpCLENBQUM7UUFJTSxXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQ3pCLENBQUM7UUFpRkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0RBQWUsQ0FBbUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG9EQUFlLENBQW1CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFuRkQsa0NBQVksR0FBWjtRQUFBLGlCQXlCQztRQXZCRyxxRUFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTTtZQUMzQyxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUvQixJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElB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QVAsVUFBUSxJQUFlO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxpQ0FBVyxHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTyxnQ0FBVSxHQUFsQjtRQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRW5ELENBQUM7SUF0TFEsV0FBVztRQUR2QixnRUFBVSxFQUFFOztPQUNBLFdBQVcsQ0F1THZCO0lBQUQsa0JBQUM7Q0FBQTtBQXZMdUIiLCJmaWxlIjoiYnVuZGxlLmI5MmEzOGNmZTA4M2FjZmMxMTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgZ2V0RmlsZSwgZ2V0SW1hZ2UsIGdldEpTT04sIGdldFN0cmluZywgcmVxdWVzdCwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUl0ZW0ge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIGlkOiBhbnk7XHJcbiAgICBsaWtlZD86IGJvb2xlYW47XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHZpZXdlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9vbHNJdGVtIHtcclxuICAgIGlkOiBhbnk7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb21wYW55OiBzdHJpbmc7XHJcbiAgICBwcmljZTogc3RyaW5nO1xyXG4gICAgdXNlcnM6IGFueTtcclxuICAgIHBpY3R1cmU6IHN0cmluZztcclxuICAgIGVzdGFibGlzaGVkOiBib29sZWFuO1xyXG4gICAga2V5d29yZHM6IG51bWJlcltdO1xyXG4gICAgcHJvOiBzdHJpbmdbXTtcclxuICAgIGNvbjogc3RyaW5nW107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICBhcGlVcmwgPSBcImh0dHBzOi8vYXBpMy5za29lcm5lci5jb20vXCI7XHJcbiAgICBxdWVzdGlvbkpzb246IGFueTtcclxuICAgIHRvb2xzSnNvbjogYW55O1xyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+O1xyXG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcclxuXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF90b29scyQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxUb29sc0l0ZW0+PjtcclxuICAgIHByaXZhdGUgX3Rvb2xzID0gbmV3IEFycmF5PFRvb2xzSXRlbT4oXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICBnZXRRdWVzdGlvbnMoKSB7XHJcblxyXG4gICAgICAgIGdldEpTT04odGhpcy5hcGlVcmwgKyBcInF1ZXN0aW9uc1wiKS50aGVuKChyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkpzb24gPSByO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnF1ZXN0aW9uSnNvbik7XHJcblxyXG4gICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMucXVlc3Rpb25Kc29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnF1ZXN0aW9uSnNvbltpXS5pZDtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gdGhpcy5xdWVzdGlvbkpzb25baV0udGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2l0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtcygpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5faXRlbXMpO1xyXG4gICAgICAgIH0sIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFRvb2xzKCkge1xyXG5cclxuICAgICAgICBsZXQgc2VuZCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy5faXRlbXMubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgIHNlbmQgPSAgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRMaWtlZEl0ZW1zKCkpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmQpO1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMuYXBpVXJsK1wicmVzdWx0XCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHNlbmRcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNKc29uID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRvb2xzSnNvbi5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3Rvb2xzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy50b29sc0pzb24uaS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy50b29sc0pzb25baV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFueTogdGhpcy50b29sc0pzb25baV0uY29tcGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHRoaXMudG9vbHNKc29uW2ldLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyczogdGhpcy50b29sc0pzb25baV0udXNlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmU6IHRoaXMudG9vbHNKc29uW2ldLnBpY3R1cmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFibGlzaGVkOiB0aGlzLnRvb2xzSnNvbltpXS5lc3RhYmxpc2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZHM6IHRoaXMudG9vbHNKc29uW2ldLmtleXdvcmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm86IHRoaXMudG9vbHNKc29uW2ldLnBybyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uOiB0aGlzLnRvb2xzSnNvbltpXS5jb25cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxUb29sc0l0ZW0+Pih0aGlzLmNsb25lSXRlbXMxKCkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl90b29scyk7XHJcblxyXG5cclxuICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmdldFRvb2xzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2l0ZW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj4odGhpcy5jbG9uZUl0ZW1zKCkpO1xyXG4gICAgICAgIHRoaXMuX3Rvb2xzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8VG9vbHNJdGVtPj4odGhpcy5jbG9uZUl0ZW1zMSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogVG9vbHNJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmdldFZhbHVlKCkuZmluZCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5pZCA9PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmRleChpdGVtOiBJRGF0YUl0ZW0pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCkuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBpdGVtLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVbnNlZW5JdGVtcyQoKTogT2JzZXJ2YWJsZTxBcnJheTxJRGF0YUl0ZW0+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAucGlwZShtYXAoKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gIWl0ZW0udmlld2VkKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVuc2Vlbkl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gIWl0ZW0udmlld2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlZEl0ZW1zMSQoKTogT2JzZXJ2YWJsZTxBcnJheTxUb29sc0l0ZW0+PiB7XHJcbiAgICAgICAgLy8gVE9ETzogQXVzd2FobCBkZXMgVG9vbHMgYXVmZ3J1bmQgZGVyIGdld8OkaGxyZW4gRGF0ZWllblxyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuYXNPYnNlcnZhYmxlKClcclxuICAgICAgICAgICAgLnBpcGUobWFwKCh0b29sczogQXJyYXk8VG9vbHNJdGVtPikgPT4gdG9vbHMuZmlsdGVyKChpdGVtOiBUb29sc0l0ZW0pID0+IGl0ZW0pKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlrZWRJdGVtczEoKTogQXJyYXk8VG9vbHNJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogVG9vbHNJdGVtKSA9PiBpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlZEl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcclxuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAucGlwZShtYXAoKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCA9PT0gdHJ1ZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlZEl0ZW1zKCk6IEFycmF5PGFueT4ge1xyXG4gICAgICAgIGxldCBsaWtlZCA9ICB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS52aWV3ZWQpO1xyXG4gICAgICAgIGxldCBnbyA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBsaWtlZCkge1xyXG4gICAgICAgICAgICBnby5wdXNoKFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBsaWtlZFtpXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogbGlrZWRbaV0ubGlrZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ287XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2xpa2UoaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbS5saWtlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJdGVtcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dCh0aGlzLmNsb25lSXRlbXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zMSgpOiBBcnJheTxUb29sc0l0ZW0+IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl90b29scykpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9pdGVtcykpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9