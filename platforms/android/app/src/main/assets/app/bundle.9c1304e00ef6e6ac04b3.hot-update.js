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
        console.log(toolsJson);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQUc3QyxJQUFJLEVBQUUsR0FBRyxtQkFBTyxDQUFDLCtEQUFhLENBQUMsQ0FBQztBQUVoQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzdDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM3RCxJQUFJLEtBQUssQ0FBQztBQUNWLElBQUksUUFBUSxDQUFDO0FBRWIsUUFBUSxDQUFDLFFBQVEsRUFBRTtLQUNsQixJQUFJLENBQUMsVUFBVSxPQUFPO0lBQ25CLElBQUk7UUFDQSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixLQUFLLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDL0Q7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztLQUNoRDtBQUNMLENBQUMsRUFBRSxVQUFVLEtBQUs7SUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFpQkg7SUF1RUk7UUFwRVEsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZpQkFBNmlCO1lBQzFqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFF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QUUsQ0FBQztRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLElBQWU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGlDQUFXLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNPLGdDQUFVLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTlJUSxXQUFXO1FBRHZCLGdFQUFVLEVBQUU7O09BQ0EsV0FBVyxDQStJdkI7SUFBRCxrQkFBQztDQUFBO0FBL0l1QiIsImZpbGUiOiJidW5kbGUuOWMxMzA0ZTAwZWY2ZTZhYzA0YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSwgQ2hhbmdlZERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcbnZhciBmcyA9IHJlcXVpcmUoJ2ZpbGUtc3lzdGVtJyk7XG5cbnZhciBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuY3VycmVudEFwcCgpO1xudmFyIGpzb25GaWxlID0gZG9jdW1lbnRzLmdldEZpbGUoJ3NoYXJlZC9yZXNvdXJjZXMvc2EuanNvbicpO1xudmFyIGFycmF5O1xudmFyIGpzb25EYXRhO1xuXG5qc29uRmlsZS5yZWFkVGV4dCgpXG4udGhlbihmdW5jdGlvbiAoY29udGVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGpzb25EYXRhID0gSlNPTi5wYXJzZShjb250ZW50KTtcbiAgICAgICAgYXJyYXkgPSBuZXcgb2JzZXJ2YWJsZUFycmF5TW9kdWxlLk9ic2VydmFibGVBcnJheShqc29uRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHBhcnNlIEpTT04gZmlsZScpO1xuICAgIH1cbn0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IHJlYWQgSlNPTiBmaWxlJyk7XG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUl0ZW0ge1xuICAgIGF1dGhvcjogc3RyaW5nO1xuICAgIGNhcHRpb24/OiBzdHJpbmc7XG4gICAgZGF0ZTogRGF0ZSB8IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBsaWtlZD86IGJvb2xlYW47XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBwb3B1bGFyaXR5Pzogc3RyaW5nIHwgbnVtYmVyO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdmlld2VkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2l0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+O1xuICAgIHByaXZhdGUgX2l0ZW1zID0gbmV3IEFycmF5PElEYXRhSXRlbT4oXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvamFjZWstbWFsaW5vd3NraS10b3NrYW5pYS12YWwtZC1vcmNpYS0xLW1hbGFyc3R3by1vbGVqbmUuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIkphY2VrIE1hbGlub3dza2lcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogamVzdCB3eWrEhXRrb3fEhSBla3NwcmVzasSFIGFydHlzdHkuIFByYWNhIGplc3QgZGVkeWtvd2FueW0gcG9ydHJldGVtIENtaWxpIENvYmVsbG8uIEFic3RyYWtjeWpuYSBncmEgxZt3aWF0ZcWCIGkgY2llbmlhIHphIHBvbW9jxIUgNCBrb2xvcsOzdyBvZGRhamUgesWCb8W8b25vxZvEhyBqYWtpZSBjaGNpYcWCIG9zacSFZ27EhcSHIGFydHlzdGEgb3JheiBwcm9zdHkgcGFudG9uIGJhcncga3TDs3JlIGJ1ZHVqxIUgY2HFgsSFIG5hcnJhY2rEmS4gRHXFvMSFIHdhZ8SZIG1vxbxuYSB6YW9ic2Vyd293YcSHIHcgZGV0YWx1LCBwb25pZXdhxbwgamVzdCB0byBncmFmaWthIHdla3Rvcm93YSBtb8W8ZW15IGRvc3RyemVjIG5pZXR5cG93eSBkZXRhbCB3xYJvc8OzdyBvcmF6IMWbd2lhdMWCbywga3TDs3JlIHJvesWbd2lldGxhIGtvxYRjw7N3a2kuIE9icmF6IHByemVkc3Rhd2lhIHBpxJlrbm8ga29iaWV0eSwgb3JheiBkcnplbWnEhWPEhSBtYWdpxJkgamVqIHRlbXBlcmFtZW50dS4gWmltbmUgYmFyd3kgb2RkYWrEhSBjaMWCw7NkIGt0w7NyeSBzeW1ib2xpenVqZSDFvGFsIG1pxJlkenkgdWN6dWNpZW0gd3luaWthasSFY3ltIHogcm96c3RhbmlhLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE4XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA4MixcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qb2FubmEtc3VsZWstbWFsaW5vd3NrYS1jaHJvbW9zZmVyYS1paWktYWtyeWwuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIkpvYW5uYSBTdcWCZWstTWFsaW5vd3NrYVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDeWtsIGFic3RyYWtjamkg4oCeQ2hyb21vc2ZlcnnigJ0gaW5zcGlyb3dhbnkgamVzdCBzxYJvxYRjZW0sIHByemVzdHJ6ZW5pxIUga29zbWljem7EhSBvcmF6IHpqYXdpc2thbWkgbWV0ZW9yb2xvZ2ljem55bWkuIEN6YXJuZSBwYXN5IHN1Z2VydWrEhSBvZ3JhbmljemVuaWUgbWllc3prYcWEY2EgemllbXNraWVnbywga3TDs3J5IG5pZSBtb8W8ZSB3em5pZcWbxIcgc2nEmSBwb25hZCB0byBjbyB3aWR6aSB6IGRvxYJ1LiBCYXJ3bnkgxZtyb2RlayB6IHN5bWJvbGljem55bSBzxYJvxYRjZW0gbHViIHBsYW5ldMSFIHptaWVuaWEgZm9ybXkgb3JheiBrb2xvcnkgdyB6YWxlxbxub8WbY2kgb2QgcG9yeSBkbmlhLiBPYnJhenkgYnVkb3dhbmUgc8SFIHphIHBvbW9jxIUgcMWCeW5ueWNoIGxpbmlpLCBwcnplbmlrYWrEhWN5Y2ggc2nEmSBuYSBwxYJhc3pjennFum5pZS4gQ3rEmXN0byB1a8WCYWR5IHByemVzdHJ6ZW5uZSByb3rFm3dpZXRsYW5lIHPEhSDFm3dpYXTFgmVtIHBhZGFqxIVjeW0geiBuaWVvY3p5d2lzdGVnbyDFunLDs2TFgmEuIFV3eWRhdG5pYWrEhSBzacSZIGFieSB6YSBjaHdpbMSZIHphcGHFm8SHIHNpxJkgdyBjemVyxYQuIFBvd2llcnpjaG5pYSBvYnJhesOzdyBwb3ByemV6IHdpZWxva3JvdG5lLCBwcmVjeXp5am5lIG5ha8WCYWRhbmllIHDFgmFza2llaiBwbGFteSwgemRhamUgc2nEmSBiecSHIGlkZWFsbmllIGfFgmFka2EuIERlbGlrYXRuZSBsaW5pZSBwb2RrcmXFm2xhasSFIGtydWNob8WbxIcgemphd2lza2EgYSBqZWRub2N6ZcWbbmllIHPEhSDFgsSFY3puaWtpZW0gcGFzYSBiYXJ3IHogY3phcm7EhSBwcnplc3RyemVuacSFLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE2XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA0MSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9wYXdlbC1nb3Jza2ktc2xpbWFrLWFrcnlsLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJQYXdlxYIgR8OzcnNraVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBYnN0cmFrY3lqbmEgcHJ6eXJvZGEsIHBpZWtubyBvdGFjemFqxIVjZWdvIG5hcyDFm3dpYXRhLCB3c3DDs8WCaXN0bmllbmllLiBBa3N0cmFrY3lqbnksIHBlxYJlbiBrb2xvcsOzdyBvYnJheiBha3J5bG93eSBuYSBwxYLDs3RuaWUgbG5pYW55bSB3eWtvbmFueSB3IHRlY2huaWNlIGVua2F1c3R5a2kuIEVua2F1c3R5a2EgdG8gdGVjaG5pa2EgcHJhY29jaMWCb25uYSwga3TDs3JhIHd5bWFnYSBvZCB0d8OzcmN5IG5ha8WCYWRhbmlhIGZhcmIgbmEgZ29yxIVjbyB3IHNwb2l3aWUgd29za3UgcHN6Y3plbGVnbyBsdWIgb2xlanUuIER6acSZa2kgdGFraW0gemFiaWVnb20gcG96d2FsYSB1enlza2HEhyB0cndhxYJlIGkgb2Rwb3JuZSBuYSB3aWxnb8SHIHJlenVsdGF0eSwgYSB0YWvFvGUgemFjaG93YcSHIGfFgsSZYmnEmSBpIGJsYXNrIHphc3Rvc293YW5laiBwYWxldHkga29sb3J5c3R5Y3puZWouIFByYWNhIGRvZGEgY2hhdGFrdGVydSBwcnplc3Ryb25ueW0gd25ldHJ6b20uIE9icmF6IHNwcmF3ZHppIHNpxJkgdyBiaXVyemUgb3JheiB3IGR1xbx5bSwgamFzbnltIHNhbG9uaWUuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTVcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDU1LFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL3Bhd2VsLXBvcmFkYS1kYW1hLW1hbGFyc3R3by1vbGVqbmUuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIlBhd2XFgiBQb3JhZGFcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogXFxcImRhbWFcXFwiIHpvc3RhxYIgbmFtYWxvd2FueSBuYSBwxYLDs3RuaWUgM0QgLSBncnVic3phIHJhbWEsIG8gd3ltaWFyYWNoIDUweDUwY20sIGZhcmJhbWkgb2xlam55bWkuIE1hbG93aWTFgm8gcHJ6ZWRzdGF3aWEga29iaWV0xJkgeiBrbGFzxIUgbmEgdGxlIHogYm9nYXTEhSBvcm5hbWVudHlrxIUuIEJhcmR6byBrb2xvcm93eSwgemJ1ZG93YW55IHogcHJvc3R5Y2ggZm9ybSBpIGtzenRhxYJ0w7N3LiBLbGltYXRlbSBsZWtrbyBuYXdpxIV6dWplIGRvIGRhd25pZWpzenljaCBlcG9rIGx1YiBkbyBkYW15IHogdGFsaWkga2FydC4gUG9ydHJldCBpZGVhbG5pZSB6YWdyYSB3IGthxbxkeW0gd27EmXRyenUgYWxlIGkgcsOzd25pZcW8IHBvZGtyZcWbbGkga2FyY2lhbmUgdXBvZG9iYW5pYSwgaG9iYnkgaGlzdG9yeWN6bmUgbHViIHJvenJ5d2tvd3kgY2hhcmFrdGVyIG9zb2J5IGt0w7NyYSBnbyB6YWt1cGkuIFN5Z25vd2FueSB6IHByem9kdSBuYXp3aXNraWVtIGkgZGF0xIUgcG93c3RhbmlhLiBXeWtvbmFueSB3IHBvamVkeW5jenltIGVnemVtcGxhcnp1IGNvIHp3acSZa3N6YSBqZWdvIHdhcnRvxZvEhyBrb2xla2Nqb25lcnNrxIUuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMThcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDYzLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL2l6YS1rb3N0aXVrb3ctc2xhZHktNC1tYWxhcnN0d28tb2xlam5lLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJJemEgS29zdGl1a293XCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpueSBvYnJheiBuYW1hbG93YW55IHcgdGVjaG5pY2Ugb2xlam5lai4gcHJhY2EgbmllIHd5bWFnYSByYW15ICwga3Jhd8SZZHppZSBwxYLDs3RuYSBzxIUgemFtYWxvd2FuZS4gUHJhY2EgamVzdCB6YWJlenBpZWN6b25hIHdlcm5pa3NlbSBzYXR5bm93eW0uIG9icmF6IGplc3Qgc3lnbm93YW55IHogdHnFgnUgb2JyYXogamVzdCBjesSZxZtjacSFIGN5a2x1IG1hbGFyc2tpZWdvIFxcXCIgxZpsYWR5XFxcIiwgcG93c3RhxYJlZ28gdyAyMDE0IHJva3UuIFByYWNhIG1vxbxlIGJ5xIcgZG9icnltIHByZXplbnRlbSBucC4gbmEgxZtsdWIuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTRcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDE1LFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICApO1xuXG4gICAgXG4gICAgcHJpdmF0ZSBfdG9vbHMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XG4gICAgcHJpdmF0ZSBfdG9vbHMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPigpO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0b29sc0pzb24pO1xuICAgICAgICB0aGlzLl9pdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtcygpKTtcbiAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMxKCkpO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogSURhdGFJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbmQoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmlkID09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbmRleChpdGVtOiBJRGF0YUl0ZW0pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gaXRlbS5pZCk7XG4gICAgfVxuXG4gICAgZ2V0VW5zZWVuSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShtYXAoKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gIWl0ZW0udmlld2VkKSkpO1xuICAgIH1cblxuICAgIGdldFVuc2Vlbkl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCk7XG4gICAgfVxuXG4gICAgZ2V0TGlrZWRJdGVtczEkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgodG9vbHM6IEFycmF5PElEYXRhSXRlbT4pID0+IHRvb2xzLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xuICAgIH1cblxuICAgIGdldExpa2VkSXRlbXMxKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQpO1xuICAgIH1cbiAgICBcbiAgICBnZXRMaWtlZEl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcbiAgICAgICAgLy8gVE9ETzogQXVzd2FobCBkZXMgVG9vbHMgYXVmZ3J1bmQgZGVyIGdld8OkaGxyZW4gRGF0ZWllblxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShtYXAoKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCA9PT0gdHJ1ZSkpKTtcbiAgICB9XG5cbiAgICBnZXRMaWtlZEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUl0ZW0oaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KGl0ZW1zKTtcbiAgICB9XG5cbiAgICBkaXNsaWtlKGl0ZW06IElEYXRhSXRlbSk6IHZvaWQge1xuICAgICAgICBpdGVtLmxpa2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KGl0ZW1zKTtcbiAgICB9XG5cbiAgICByZXNldEl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dCh0aGlzLmNsb25lSXRlbXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zMSgpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fdG9vbHMpKTtcbiAgICB9ICAgXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9pdGVtcykpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=