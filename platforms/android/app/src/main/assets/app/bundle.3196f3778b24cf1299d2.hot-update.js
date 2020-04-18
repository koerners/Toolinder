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
        }
        else {
            send = JSON.stringify({
                q_id: -1,
                response: true
            });
        }
        console.log(send);
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
            console.log(_this._tools);
        }, function (e) {
            console.log(e);
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
                q_id: liked[i].id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNRO0FBQ047QUFDd0Q7QUF3QnJHO0lBdUdJO1FBckdBLFdBQU0sR0FBRyw0QkFBNEIsQ0FBQztRQVE5QixXQUFNLEdBQUcsSUFBSSxLQUFLLEVBRXpCLENBQUM7UUFJTSxXQUFNLEdBQUcsSUFBSSxLQUFLLEVBQ3pCLENBQUM7UUF3RkUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0RBQWUsQ0FBbUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG9EQUFlLENBQW1CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUF6RkQsa0NBQVksR0FBWjtRQUFBLGlCQXdCQztRQXRCRyxxRUFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBTTtZQUMzQyxLQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUV0QixJQUFJLENBQUMsQ0FBQztZQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFFckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ1o7b0JBQ0ks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NkJBQU8sR0FBUCxVQUFRLElBQWU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGlDQUFXLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNPLGdDQUFVLEdBQWxCO1FBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQTVMUSxXQUFXO1FBRHZCLGdFQUFVLEVBQUU7O09BQ0EsV0FBVyxDQTZMdkI7SUFBRCxrQkFBQztDQUFBO0FBN0x1QiIsImZpbGUiOiJidW5kbGUuMzE5NmYzNzc4YjI0Y2YxMjk5ZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nLCByZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgaWQ6IGFueTtcclxuICAgIGxpa2VkPzogYm9vbGVhbjtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgdmlld2VkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb29sc0l0ZW0ge1xyXG4gICAgaWQ6IGFueTtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNvbXBhbnk6IHN0cmluZztcclxuICAgIHByaWNlOiBzdHJpbmc7XHJcbiAgICB1c2VyczogYW55O1xyXG4gICAgcGljdHVyZTogc3RyaW5nO1xyXG4gICAgZXN0YWJsaXNoZWQ6IGJvb2xlYW47XHJcbiAgICBrZXl3b3JkczogbnVtYmVyW107XHJcbiAgICBwcm86IHN0cmluZ1tdO1xyXG4gICAgY29uOiBzdHJpbmdbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIGFwaVVybCA9IFwiaHR0cHM6Ly9hcGkzLnNrb2VybmVyLmNvbS9cIjtcclxuICAgIHF1ZXN0aW9uSnNvbjogYW55O1xyXG4gICAgdG9vbHNKc29uOiBhbnk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XHJcbiAgICBwcml2YXRlIF9pdGVtcyA9IG5ldyBBcnJheTxJRGF0YUl0ZW0+KFxyXG5cclxuICAgICk7XHJcblxyXG5cclxuICAgIHByaXZhdGUgX3Rvb2xzJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PFRvb2xzSXRlbT4+O1xyXG4gICAgcHJpdmF0ZSBfdG9vbHMgPSBuZXcgQXJyYXk8VG9vbHNJdGVtPihcclxuICAgICk7XHJcblxyXG5cclxuICAgIGdldFF1ZXN0aW9ucygpIHtcclxuXHJcbiAgICAgICAgZ2V0SlNPTih0aGlzLmFwaVVybCArIFwicXVlc3Rpb25zXCIpLnRoZW4oKHI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSnNvbiA9IHI7XHJcbiAgICBcclxuICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnF1ZXN0aW9uSnNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5xdWVzdGlvbkpzb25baV0uaWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMucXVlc3Rpb25Kc29uW2ldLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj4odGhpcy5jbG9uZUl0ZW1zKCkpO1xyXG5cclxuICAgICAgICB9LCAoZSkgPT4ge1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFRvb2xzKCkge1xyXG5cclxuICAgICAgICBsZXQgc2VuZCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy5faXRlbXMubGVuZ3RoPjEpe1xyXG4gICAgICAgICAgIHNlbmQgPSAgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRMaWtlZEl0ZW1zKCkpO1xyXG4gICAgICB9IGVsc2V7XHJcbiAgICAgICAgICBzZW5kID0gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBxX2lkOiAtMSxcclxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IHRydWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHNlbmQpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLmFwaVVybCtcInJlc3VsdFwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHNlbmRcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNKc29uID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b29sc0pzb24ubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b29scy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMudG9vbHNKc29uW2ldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRvb2xzSnNvbltpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYW55OiB0aGlzLnRvb2xzSnNvbltpXS5jb21wYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogdGhpcy50b29sc0pzb25baV0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzOiB0aGlzLnRvb2xzSnNvbltpXS51c2VycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGljdHVyZTogdGhpcy50b29sc0pzb25baV0ucGljdHVyZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWJsaXNoZWQ6IHRoaXMudG9vbHNKc29uW2ldLmVzdGFibGlzaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogdGhpcy50b29sc0pzb25baV0ua2V5d29yZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBybzogdGhpcy50b29sc0pzb25baV0ucHJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb246IHRoaXMudG9vbHNKc29uW2ldLmNvblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl90b29scyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PFRvb2xzSXRlbT4+KHRoaXMuY2xvbmVJdGVtczEoKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3Rvb2xzKTtcclxuXHJcbiAgICAgICAgfSwgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuZ2V0VG9vbHMoKTtcclxuICAgICAgICB0aGlzLl9pdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtcygpKTtcclxuICAgICAgICB0aGlzLl90b29scyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PFRvb2xzSXRlbT4+KHRoaXMuY2xvbmVJdGVtczEoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IFRvb2xzSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5nZXRWYWx1ZSgpLmZpbmQoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWQgPT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5kZXgoaXRlbTogSURhdGFJdGVtKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VW5zZWVuSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuYXNPYnNlcnZhYmxlKClcclxuICAgICAgICAgICAgLnBpcGUobWFwKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4gaXRlbXMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVbnNlZW5JdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlrZWRJdGVtczEkKCk6IE9ic2VydmFibGU8QXJyYXk8VG9vbHNJdGVtPj4ge1xyXG4gICAgICAgIC8vIFRPRE86IEF1c3dhaGwgZGVzIFRvb2xzIGF1ZmdydW5kIGRlciBnZXfDpGhscmVuIERhdGVpZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgodG9vbHM6IEFycmF5PFRvb2xzSXRlbT4pID0+IHRvb2xzLmZpbHRlcigoaXRlbTogVG9vbHNJdGVtKSA9PiBpdGVtKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMxKCk6IEFycmF5PFRvb2xzSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IFRvb2xzSXRlbSkgPT4gaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlrZWRJdGVtcyQoKTogT2JzZXJ2YWJsZTxBcnJheTxJRGF0YUl0ZW0+PiB7XHJcbiAgICAgICAgLy8gVE9ETzogQXVzd2FobCBkZXMgVG9vbHMgYXVmZ3J1bmQgZGVyIGdld8OkaGxyZW4gRGF0ZWllblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuYXNPYnNlcnZhYmxlKClcclxuICAgICAgICAgICAgLnBpcGUobWFwKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4gaXRlbXMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQgPT09IHRydWUpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlrZWRJdGVtcygpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICBsZXQgbGlrZWQgPSAgdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0udmlld2VkKTtcclxuICAgICAgICBsZXQgZ28gPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gbGlrZWQpIHtcclxuICAgICAgICAgICAgZ28ucHVzaChcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBxX2lkOiBsaWtlZFtpXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogbGlrZWRbaV0ubGlrZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ287XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2xpa2UoaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbS5saWtlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJdGVtcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dCh0aGlzLmNsb25lSXRlbXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zMSgpOiBBcnJheTxUb29sc0l0ZW0+IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl90b29scykpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9pdGVtcykpO1xyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9