webpackHotUpdate("bundle",{

/***/ "./core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);



var fs = __webpack_require__("../node_modules/@nativescript/core/file-system/file-system.js");
var documents = fs.knownFolders.currentApp();
var jsonFile = documents.getFile('shared/resources/sa.json');
var array;
var jsonData;
jsonFile.readText()
    .then(function (content) {
    try {
        jsonData = JSON.parse(content);
        array = new observableArrayModule.ObservableArray(jsonData);
    }
    catch (err) {
        throw new Error('Could not parse JSON file');
    }
}, function (error) {
    throw new Error('Could not read JSON file');
});
var DataService = /** @class */ (function () {
    function DataService() {
        this._items = new Array({
            id: 1,
            image: "https://cdn.gallerystore.pl/works//w777-h700/jacek-malinowski-toskania-val-d-orcia-1-malarstwo-olejne.jpg",
            title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            author: "Jacek Malinowski",
            location: "Gallerystore",
            description: "Obraz jest wyjątkową ekspresją artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra świateł i cienia za pomocą 4 kolorów oddaje złożoność jakie chciał osiągnąć artysta oraz prosty panton barw które budują całą narrację. Dużą wagę można zaobserwować w detalu, ponieważ jest to grafika wektorowa możemy dostrzec nietypowy detal włosów oraz światło, które rozświetla końcówki. Obraz przedstawia piękno kobiety, oraz drzemiącą magię jej temperamentu. Zimne barwy oddają chłód który symbolizuje żal między uczuciem wynikającym z rozstania.",
            date: "2018",
            popularity: 82,
            viewed: false,
            liked: false
        }, {
            id: 2,
            image: "https://cdn.gallerystore.pl/works//w777-h700/joanna-sulek-malinowska-chromosfera-iii-akryl.jpg",
            title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            author: "Joanna Sułek-Malinowska",
            location: "Gallerystore",
            description: "Cykl abstrakcji „Chromosfery” inspirowany jest słońcem, przestrzenią kosmiczną oraz zjawiskami meteorologicznymi. Czarne pasy sugerują ograniczenie mieszkańca ziemskiego, który nie może wznieść się ponad to co widzi z dołu. Barwny środek z symbolicznym słońcem lub planetą zmienia formy oraz kolory w zależności od pory dnia. Obrazy budowane są za pomocą płynnych linii, przenikających się na płaszczyźnie. Często układy przestrzenne rozświetlane są światłem padającym z nieoczywistego źródła. Uwydatniają się aby za chwilę zapaść się w czerń. Powierzchnia obrazów poprzez wielokrotne, precyzyjne nakładanie płaskiej plamy, zdaje się być idealnie gładka. Delikatne linie podkreślają kruchość zjawiska a jednocześnie są łącznikiem pasa barw z czarną przestrzenią.",
            date: "2016",
            popularity: 41,
            viewed: false,
            liked: false
        }, {
            id: 3,
            image: "https://cdn.gallerystore.pl/works//w777-h700/pawel-gorski-slimak-akryl.jpg",
            title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            author: "Paweł Górski",
            location: "Gallerystore",
            description: "Abstrakcyjna przyroda, piekno otaczającego nas świata, współistnienie. Akstrakcyjny, pełen kolorów obraz akrylowy na płótnie lnianym wykonany w technice enkaustyki. Enkaustyka to technika pracochłonna, która wymaga od twórcy nakładania farb na gorąco w spoiwie wosku pszczelego lub oleju. Dzięki takim zabiegom pozwala uzyskać trwałe i odporne na wilgoć rezultaty, a także zachować głębię i blask zastosowanej palety kolorystycznej. Praca doda chatakteru przestronnym wnetrzom. Obraz sprawdzi się w biurze oraz w dużym, jasnym salonie.",
            date: "2015",
            popularity: 55,
            viewed: false,
            liked: false
        }, {
            id: 4,
            image: "https://cdn.gallerystore.pl/works//w777-h700/pawel-porada-dama-malarstwo-olejne.jpg",
            title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            author: "Paweł Porada",
            location: "Gallerystore",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "2018",
            popularity: 63,
            viewed: false,
            liked: false
        }, {
            id: 5,
            image: "https://cdn.gallerystore.pl/works//w777-h700/iza-kostiukow-slady-4-malarstwo-olejne.jpg",
            title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",
            author: "Iza Kostiukow",
            location: "Gallerystore",
            description: "Abstrakcyjny obraz namalowany w technice olejnej. praca nie wymaga ramy , krawędzie płótna są zamalowane. Praca jest zabezpieczona werniksem satynowym. obraz jest sygnowany z tyłu obraz jest częścią cyklu malarskiego \" Ślady\", powstałego w 2014 roku. Praca może być dobrym prezentem np. na ślub.",
            date: "2014",
            popularity: 15,
            viewed: false,
            liked: false
        });
        this._tools = new Array();
        // console.log(toolsJson);
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems());
        this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems1());
    }
    DataService.prototype.getItems = function () {
        return this._items$.getValue();
    };
    DataService.prototype.getItem = function (id) {
        return this._items$.getValue().find(function (data) {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tools) { return tools.filter(function (item) { return item.liked === true; }); }));
    };
    DataService.prototype.getLikedItems1 = function () {
        return this._tools$.getValue().filter(function (item) { return item.liked; });
    };
    DataService.prototype.getLikedItems$ = function () {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._items$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) { return items.filter(function (item) { return item.liked === true; }); }));
    };
    DataService.prototype.getLikedItems = function () {
        return this._items$.getValue().filter(function (item) { return item.liked; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQUc3QyxJQUFJLEVBQUUsR0FBRyxtQkFBTyxDQUFDLCtEQUFhLENBQUMsQ0FBQztBQUVoQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzdDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM3RCxJQUFJLEtBQUssQ0FBQztBQUNWLElBQUksUUFBUSxDQUFDO0FBRWIsUUFBUSxDQUFDLFFBQVEsRUFBRTtLQUNsQixJQUFJLENBQUMsVUFBVSxPQUFPO0lBQ25CLElBQUk7UUFDQSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixLQUFLLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDL0Q7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztLQUNoRDtBQUNMLENBQUMsRUFBRSxVQUFVLEtBQUs7SUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFpQkg7SUF1RUk7UUFwRVEsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZpQkFBNmlCO1lBQzFqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFF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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBZTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8saUNBQVcsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ08sZ0NBQVUsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBOUlRLFdBQVc7UUFEdkIsZ0VBQVUsRUFBRTs7T0FDQSxXQUFXLENBK0l2QjtJQUFELGtCQUFDO0NBQUE7QUEvSXVCIiwiZmlsZSI6ImJ1bmRsZS40OTk1MTQ0MjkyNWNlM2IwOTEyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5LCBDaGFuZ2VkRGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xudmFyIGZzID0gcmVxdWlyZSgnZmlsZS1zeXN0ZW0nKTtcblxudmFyIGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XG52YXIganNvbkZpbGUgPSBkb2N1bWVudHMuZ2V0RmlsZSgnc2hhcmVkL3Jlc291cmNlcy9zYS5qc29uJyk7XG52YXIgYXJyYXk7XG52YXIganNvbkRhdGE7XG5cbmpzb25GaWxlLnJlYWRUZXh0KClcbi50aGVuKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgICAganNvbkRhdGEgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgICAgICBhcnJheSA9IG5ldyBvYnNlcnZhYmxlQXJyYXlNb2R1bGUuT2JzZXJ2YWJsZUFycmF5KGpzb25EYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcGFyc2UgSlNPTiBmaWxlJyk7XG4gICAgfVxufSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcmVhZCBKU09OIGZpbGUnKTtcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgY2FwdGlvbj86IHN0cmluZztcbiAgICBkYXRlOiBEYXRlIHwgc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGxpa2VkPzogYm9vbGVhbjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIHBvcHVsYXJpdHk/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB2aWV3ZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qYWNlay1tYWxpbm93c2tpLXRvc2thbmlhLXZhbC1kLW9yY2lhLTEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSmFjZWsgTWFsaW5vd3NraVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPYnJheiBqZXN0IHd5asSFdGtvd8SFIGVrc3ByZXNqxIUgYXJ0eXN0eS4gUHJhY2EgamVzdCBkZWR5a293YW55bSBwb3J0cmV0ZW0gQ21pbGkgQ29iZWxsby4gQWJzdHJha2N5am5hIGdyYSDFm3dpYXRlxYIgaSBjaWVuaWEgemEgcG9tb2PEhSA0IGtvbG9yw7N3IG9kZGFqZSB6xYJvxbxvbm/Fm8SHIGpha2llIGNoY2lhxYIgb3NpxIVnbsSFxIcgYXJ0eXN0YSBvcmF6IHByb3N0eSBwYW50b24gYmFydyBrdMOzcmUgYnVkdWrEhSBjYcWCxIUgbmFycmFjasSZLiBEdcW8xIUgd2FnxJkgbW/FvG5hIHphb2JzZXJ3b3dhxIcgdyBkZXRhbHUsIHBvbmlld2HFvCBqZXN0IHRvIGdyYWZpa2Egd2VrdG9yb3dhIG1vxbxlbXkgZG9zdHJ6ZWMgbmlldHlwb3d5IGRldGFsIHfFgm9zw7N3IG9yYXogxZt3aWF0xYJvLCBrdMOzcmUgcm96xZt3aWV0bGEga2/FhGPDs3draS4gT2JyYXogcHJ6ZWRzdGF3aWEgcGnEmWtubyBrb2JpZXR5LCBvcmF6IGRyemVtacSFY8SFIG1hZ2nEmSBqZWogdGVtcGVyYW1lbnR1LiBaaW1uZSBiYXJ3eSBvZGRhasSFIGNoxYLDs2Qga3TDs3J5IHN5bWJvbGl6dWplIMW8YWwgbWnEmWR6eSB1Y3p1Y2llbSB3eW5pa2FqxIVjeW0geiByb3pzdGFuaWEuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMThcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDgyLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL2pvYW5uYS1zdWxlay1tYWxpbm93c2thLWNocm9tb3NmZXJhLWlpaS1ha3J5bC5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSm9hbm5hIFN1xYJlay1NYWxpbm93c2thXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN5a2wgYWJzdHJha2NqaSDigJ5DaHJvbW9zZmVyeeKAnSBpbnNwaXJvd2FueSBqZXN0IHPFgm/FhGNlbSwgcHJ6ZXN0cnplbmnEhSBrb3NtaWN6bsSFIG9yYXogemphd2lza2FtaSBtZXRlb3JvbG9naWN6bnltaS4gQ3phcm5lIHBhc3kgc3VnZXJ1asSFIG9ncmFuaWN6ZW5pZSBtaWVzemthxYRjYSB6aWVtc2tpZWdvLCBrdMOzcnkgbmllIG1vxbxlIHd6bmllxZvEhyBzacSZIHBvbmFkIHRvIGNvIHdpZHppIHogZG/FgnUuIEJhcndueSDFm3JvZGVrIHogc3ltYm9saWN6bnltIHPFgm/FhGNlbSBsdWIgcGxhbmV0xIUgem1pZW5pYSBmb3JteSBvcmF6IGtvbG9yeSB3IHphbGXFvG5vxZtjaSBvZCBwb3J5IGRuaWEuIE9icmF6eSBidWRvd2FuZSBzxIUgemEgcG9tb2PEhSBwxYJ5bm55Y2ggbGluaWksIHByemVuaWthasSFY3ljaCBzacSZIG5hIHDFgmFzemN6ecW6bmllLiBDesSZc3RvIHVrxYJhZHkgcHJ6ZXN0cnplbm5lIHJvesWbd2lldGxhbmUgc8SFIMWbd2lhdMWCZW0gcGFkYWrEhWN5bSB6IG5pZW9jenl3aXN0ZWdvIMW6csOzZMWCYS4gVXd5ZGF0bmlhasSFIHNpxJkgYWJ5IHphIGNod2lsxJkgemFwYcWbxIcgc2nEmSB3IGN6ZXLFhC4gUG93aWVyemNobmlhIG9icmF6w7N3IHBvcHJ6ZXogd2llbG9rcm90bmUsIHByZWN5enlqbmUgbmFrxYJhZGFuaWUgcMWCYXNraWVqIHBsYW15LCB6ZGFqZSBzacSZIGJ5xIcgaWRlYWxuaWUgZ8WCYWRrYS4gRGVsaWthdG5lIGxpbmllIHBvZGtyZcWbbGFqxIUga3J1Y2hvxZvEhyB6amF3aXNrYSBhIGplZG5vY3plxZtuaWUgc8SFIMWCxIVjem5pa2llbSBwYXNhIGJhcncgeiBjemFybsSFIHByemVzdHJ6ZW5pxIUuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTZcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDQxLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL3Bhd2VsLWdvcnNraS1zbGltYWstYWtyeWwuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIlBhd2XFgiBHw7Nyc2tpXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpuYSBwcnp5cm9kYSwgcGlla25vIG90YWN6YWrEhWNlZ28gbmFzIMWbd2lhdGEsIHdzcMOzxYJpc3RuaWVuaWUuIEFrc3RyYWtjeWpueSwgcGXFgmVuIGtvbG9yw7N3IG9icmF6IGFrcnlsb3d5IG5hIHDFgsOzdG5pZSBsbmlhbnltIHd5a29uYW55IHcgdGVjaG5pY2UgZW5rYXVzdHlraS4gRW5rYXVzdHlrYSB0byB0ZWNobmlrYSBwcmFjb2NoxYJvbm5hLCBrdMOzcmEgd3ltYWdhIG9kIHR3w7NyY3kgbmFrxYJhZGFuaWEgZmFyYiBuYSBnb3LEhWNvIHcgc3BvaXdpZSB3b3NrdSBwc3pjemVsZWdvIGx1YiBvbGVqdS4gRHppxJlraSB0YWtpbSB6YWJpZWdvbSBwb3p3YWxhIHV6eXNrYcSHIHRyd2HFgmUgaSBvZHBvcm5lIG5hIHdpbGdvxIcgcmV6dWx0YXR5LCBhIHRha8W8ZSB6YWNob3dhxIcgZ8WCxJliacSZIGkgYmxhc2sgemFzdG9zb3dhbmVqIHBhbGV0eSBrb2xvcnlzdHljem5lai4gUHJhY2EgZG9kYSBjaGF0YWt0ZXJ1IHByemVzdHJvbm55bSB3bmV0cnpvbS4gT2JyYXogc3ByYXdkemkgc2nEmSB3IGJpdXJ6ZSBvcmF6IHcgZHXFvHltLCBqYXNueW0gc2Fsb25pZS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNVwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNTUsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtcG9yYWRhLWRhbWEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiUGF3ZcWCIFBvcmFkYVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPYnJheiBcXFwiZGFtYVxcXCIgem9zdGHFgiBuYW1hbG93YW55IG5hIHDFgsOzdG5pZSAzRCAtIGdydWJzemEgcmFtYSwgbyB3eW1pYXJhY2ggNTB4NTBjbSwgZmFyYmFtaSBvbGVqbnltaS4gTWFsb3dpZMWCbyBwcnplZHN0YXdpYSBrb2JpZXTEmSB6IGtsYXPEhSBuYSB0bGUgeiBib2dhdMSFIG9ybmFtZW50eWvEhS4gQmFyZHpvIGtvbG9yb3d5LCB6YnVkb3dhbnkgeiBwcm9zdHljaCBmb3JtIGkga3N6dGHFgnTDs3cuIEtsaW1hdGVtIGxla2tvIG5hd2nEhXp1amUgZG8gZGF3bmllanN6eWNoIGVwb2sgbHViIGRvIGRhbXkgeiB0YWxpaSBrYXJ0LiBQb3J0cmV0IGlkZWFsbmllIHphZ3JhIHcga2HFvGR5bSB3bsSZdHJ6dSBhbGUgaSByw7N3bmllxbwgcG9ka3JlxZtsaSBrYXJjaWFuZSB1cG9kb2JhbmlhLCBob2JieSBoaXN0b3J5Y3puZSBsdWIgcm96cnl3a293eSBjaGFyYWt0ZXIgb3NvYnkga3TDs3JhIGdvIHpha3VwaS4gU3lnbm93YW55IHogcHJ6b2R1IG5hendpc2tpZW0gaSBkYXTEhSBwb3dzdGFuaWEuIFd5a29uYW55IHcgcG9qZWR5bmN6eW0gZWd6ZW1wbGFyenUgY28gendpxJlrc3phIGplZ28gd2FydG/Fm8SHIGtvbGVrY2pvbmVyc2vEhS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxOFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNjMsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvaXphLWtvc3RpdWtvdy1zbGFkeS00LW1hbGFyc3R3by1vbGVqbmUuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIkl6YSBLb3N0aXVrb3dcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWJzdHJha2N5am55IG9icmF6IG5hbWFsb3dhbnkgdyB0ZWNobmljZSBvbGVqbmVqLiBwcmFjYSBuaWUgd3ltYWdhIHJhbXkgLCBrcmF3xJlkemllIHDFgsOzdG5hIHPEhSB6YW1hbG93YW5lLiBQcmFjYSBqZXN0IHphYmV6cGllY3pvbmEgd2Vybmlrc2VtIHNhdHlub3d5bS4gb2JyYXogamVzdCBzeWdub3dhbnkgeiB0ecWCdSBvYnJheiBqZXN0IGN6xJnFm2NpxIUgY3lrbHUgbWFsYXJza2llZ28gXFxcIiDFmmxhZHlcXFwiLCBwb3dzdGHFgmVnbyB3IDIwMTQgcm9rdS4gUHJhY2EgbW/FvGUgYnnEhyBkb2JyeW0gcHJlemVudGVtIG5wLiBuYSDFm2x1Yi5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogMTUsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICk7XG5cbiAgICBcbiAgICBwcml2YXRlIF90b29scyQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+PjtcbiAgICBwcml2YXRlIF90b29scyA9IG5ldyBBcnJheTxJRGF0YUl0ZW0+KCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvb2xzSnNvbik7XG4gICAgICAgIHRoaXMuX2l0ZW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj4odGhpcy5jbG9uZUl0ZW1zKCkpO1xuICAgICAgICB0aGlzLl90b29scyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtczEoKSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJRGF0YUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmluZCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWQgPT0gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEluZGV4KGl0ZW06IElEYXRhSXRlbSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCkuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBpdGVtLmlkKTtcbiAgICB9XG5cbiAgICBnZXRVbnNlZW5JdGVtcyQoKTogT2JzZXJ2YWJsZTxBcnJheTxJRGF0YUl0ZW0+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpKSk7XG4gICAgfVxuXG4gICAgZ2V0VW5zZWVuSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gIWl0ZW0udmlld2VkKTtcbiAgICB9XG5cbiAgICBnZXRMaWtlZEl0ZW1zMSQoKTogT2JzZXJ2YWJsZTxBcnJheTxJRGF0YUl0ZW0+PiB7XG4gICAgICAgIC8vIFRPRE86IEF1c3dhaGwgZGVzIFRvb2xzIGF1ZmdydW5kIGRlciBnZXfDpGhscmVuIERhdGVpZW5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5hc09ic2VydmFibGUoKVxuICAgICAgICAgICAgLnBpcGUobWFwKCh0b29sczogQXJyYXk8SURhdGFJdGVtPikgPT4gdG9vbHMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQgPT09IHRydWUpKSk7XG4gICAgfVxuXG4gICAgZ2V0TGlrZWRJdGVtczEoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCk7XG4gICAgfVxuICAgIFxuICAgIGdldExpa2VkSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xuICAgIH1cblxuICAgIGdldExpa2VkSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSXRlbShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xuICAgIH1cblxuICAgIGRpc2xpa2UoaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XG4gICAgICAgIGl0ZW0ubGlrZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xuICAgIH1cblxuICAgIHJlc2V0SXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KHRoaXMuY2xvbmVJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb25lSXRlbXMxKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl90b29scykpO1xuICAgIH0gICBcbiAgICBwcml2YXRlIGNsb25lSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX2l0ZW1zKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==