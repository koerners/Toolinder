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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQW1CN0M7SUF1RUk7UUFwRVEsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZpQkFBNmlCO1lBQzFqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSxnR0FBZ0c7WUFDdkcsS0FBSyxFQUFFLHdGQUF3RjtZQUMvRixNQUFNLEVBQUUseUJBQXlCO1lBQ2pDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0dkJBQTR2QjtZQUN6d0IsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsNEVBQTRFO1lBQ25GLEtBQUssRUFBRSx3RkFBd0Y7WUFDL0YsTUFBTSxFQUFFLGNBQWM7WUFDdEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHloQkFBeWhCO1lBQ3RpQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFB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QUNuRCxDQUFDO0lBQ08sZ0NBQVUsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBOUlRLFdBQVc7UUFEdkIsZ0VBQVUsRUFBRTs7T0FDQSxXQUFXLENBK0l2QjtJQUFELGtCQUFDO0NBQUE7QUEvSXVCIiwiZmlsZSI6ImJ1bmRsZS4zZDRkZGM5ODYyOWU2MDg5ZDY4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFJdGVtIHtcbiAgICBhdXRob3I6IHN0cmluZztcbiAgICBjYXB0aW9uPzogc3RyaW5nO1xuICAgIGRhdGU6IERhdGUgfCBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBpZDogbnVtYmVyO1xuICAgIGltYWdlOiBzdHJpbmc7XG4gICAgbGlrZWQ/OiBib29sZWFuO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgcG9wdWxhcml0eT86IHN0cmluZyB8IG51bWJlcjtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHZpZXdlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9pdGVtcyQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+PjtcbiAgICBwcml2YXRlIF9pdGVtcyA9IG5ldyBBcnJheTxJRGF0YUl0ZW0+KFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL2phY2VrLW1hbGlub3dza2ktdG9za2FuaWEtdmFsLWQtb3JjaWEtMS1tYWxhcnN0d28tb2xlam5lLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJKYWNlayBNYWxpbm93c2tpXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IGplc3Qgd3lqxIV0a293xIUgZWtzcHJlc2rEhSBhcnR5c3R5LiBQcmFjYSBqZXN0IGRlZHlrb3dhbnltIHBvcnRyZXRlbSBDbWlsaSBDb2JlbGxvLiBBYnN0cmFrY3lqbmEgZ3JhIMWbd2lhdGXFgiBpIGNpZW5pYSB6YSBwb21vY8SFIDQga29sb3LDs3cgb2RkYWplIHrFgm/FvG9ub8WbxIcgamFraWUgY2hjaWHFgiBvc2nEhWduxIXEhyBhcnR5c3RhIG9yYXogcHJvc3R5IHBhbnRvbiBiYXJ3IGt0w7NyZSBidWR1asSFIGNhxYLEhSBuYXJyYWNqxJkuIER1xbzEhSB3YWfEmSBtb8W8bmEgemFvYnNlcndvd2HEhyB3IGRldGFsdSwgcG9uaWV3YcW8IGplc3QgdG8gZ3JhZmlrYSB3ZWt0b3Jvd2EgbW/FvGVteSBkb3N0cnplYyBuaWV0eXBvd3kgZGV0YWwgd8WCb3PDs3cgb3JheiDFm3dpYXTFgm8sIGt0w7NyZSByb3rFm3dpZXRsYSBrb8WEY8Ozd2tpLiBPYnJheiBwcnplZHN0YXdpYSBwacSZa25vIGtvYmlldHksIG9yYXogZHJ6ZW1pxIVjxIUgbWFnacSZIGplaiB0ZW1wZXJhbWVudHUuIFppbW5lIGJhcnd5IG9kZGFqxIUgY2jFgsOzZCBrdMOzcnkgc3ltYm9saXp1amUgxbxhbCBtacSZZHp5IHVjenVjaWVtIHd5bmlrYWrEhWN5bSB6IHJvenN0YW5pYS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxOFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogODIsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvam9hbm5hLXN1bGVrLW1hbGlub3dza2EtY2hyb21vc2ZlcmEtaWlpLWFrcnlsLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJKb2FubmEgU3XFgmVrLU1hbGlub3dza2FcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3lrbCBhYnN0cmFrY2ppIOKAnkNocm9tb3NmZXJ54oCdIGluc3Bpcm93YW55IGplc3Qgc8WCb8WEY2VtLCBwcnplc3RyemVuacSFIGtvc21pY3puxIUgb3JheiB6amF3aXNrYW1pIG1ldGVvcm9sb2dpY3pueW1pLiBDemFybmUgcGFzeSBzdWdlcnVqxIUgb2dyYW5pY3plbmllIG1pZXN6a2HFhGNhIHppZW1za2llZ28sIGt0w7NyeSBuaWUgbW/FvGUgd3puaWXFm8SHIHNpxJkgcG9uYWQgdG8gY28gd2lkemkgeiBkb8WCdS4gQmFyd255IMWbcm9kZWsgeiBzeW1ib2xpY3pueW0gc8WCb8WEY2VtIGx1YiBwbGFuZXTEhSB6bWllbmlhIGZvcm15IG9yYXoga29sb3J5IHcgemFsZcW8bm/Fm2NpIG9kIHBvcnkgZG5pYS4gT2JyYXp5IGJ1ZG93YW5lIHPEhSB6YSBwb21vY8SFIHDFgnlubnljaCBsaW5paSwgcHJ6ZW5pa2FqxIVjeWNoIHNpxJkgbmEgcMWCYXN6Y3p5xbpuaWUuIEN6xJlzdG8gdWvFgmFkeSBwcnplc3RyemVubmUgcm96xZt3aWV0bGFuZSBzxIUgxZt3aWF0xYJlbSBwYWRhasSFY3ltIHogbmllb2N6eXdpc3RlZ28gxbpyw7NkxYJhLiBVd3lkYXRuaWFqxIUgc2nEmSBhYnkgemEgY2h3aWzEmSB6YXBhxZvEhyBzacSZIHcgY3plcsWELiBQb3dpZXJ6Y2huaWEgb2JyYXrDs3cgcG9wcnpleiB3aWVsb2tyb3RuZSwgcHJlY3l6eWpuZSBuYWvFgmFkYW5pZSBwxYJhc2tpZWogcGxhbXksIHpkYWplIHNpxJkgYnnEhyBpZGVhbG5pZSBnxYJhZGthLiBEZWxpa2F0bmUgbGluaWUgcG9ka3JlxZtsYWrEhSBrcnVjaG/Fm8SHIHpqYXdpc2thIGEgamVkbm9jemXFm25pZSBzxIUgxYLEhWN6bmlraWVtIHBhc2EgYmFydyB6IGN6YXJuxIUgcHJ6ZXN0cnplbmnEhS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNlwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNDEsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtZ29yc2tpLXNsaW1hay1ha3J5bC5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiUGF3ZcWCIEfDs3Jza2lcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWJzdHJha2N5am5hIHByenlyb2RhLCBwaWVrbm8gb3RhY3phasSFY2VnbyBuYXMgxZt3aWF0YSwgd3Nww7PFgmlzdG5pZW5pZS4gQWtzdHJha2N5am55LCBwZcWCZW4ga29sb3LDs3cgb2JyYXogYWtyeWxvd3kgbmEgcMWCw7N0bmllIGxuaWFueW0gd3lrb25hbnkgdyB0ZWNobmljZSBlbmthdXN0eWtpLiBFbmthdXN0eWthIHRvIHRlY2huaWthIHByYWNvY2jFgm9ubmEsIGt0w7NyYSB3eW1hZ2Egb2QgdHfDs3JjeSBuYWvFgmFkYW5pYSBmYXJiIG5hIGdvcsSFY28gdyBzcG9pd2llIHdvc2t1IHBzemN6ZWxlZ28gbHViIG9sZWp1LiBEemnEmWtpIHRha2ltIHphYmllZ29tIHBvendhbGEgdXp5c2thxIcgdHJ3YcWCZSBpIG9kcG9ybmUgbmEgd2lsZ2/EhyByZXp1bHRhdHksIGEgdGFrxbxlIHphY2hvd2HEhyBnxYLEmWJpxJkgaSBibGFzayB6YXN0b3Nvd2FuZWogcGFsZXR5IGtvbG9yeXN0eWN6bmVqLiBQcmFjYSBkb2RhIGNoYXRha3RlcnUgcHJ6ZXN0cm9ubnltIHduZXRyem9tLiBPYnJheiBzcHJhd2R6aSBzacSZIHcgYml1cnplIG9yYXogdyBkdcW8eW0sIGphc255bSBzYWxvbmllLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE1XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA1NSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9wYXdlbC1wb3JhZGEtZGFtYS1tYWxhcnN0d28tb2xlam5lLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJQYXdlxYIgUG9yYWRhXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IFxcXCJkYW1hXFxcIiB6b3N0YcWCIG5hbWFsb3dhbnkgbmEgcMWCw7N0bmllIDNEIC0gZ3J1YnN6YSByYW1hLCBvIHd5bWlhcmFjaCA1MHg1MGNtLCBmYXJiYW1pIG9sZWpueW1pLiBNYWxvd2lkxYJvIHByemVkc3Rhd2lhIGtvYmlldMSZIHoga2xhc8SFIG5hIHRsZSB6IGJvZ2F0xIUgb3JuYW1lbnR5a8SFLiBCYXJkem8ga29sb3Jvd3ksIHpidWRvd2FueSB6IHByb3N0eWNoIGZvcm0gaSBrc3p0YcWCdMOzdy4gS2xpbWF0ZW0gbGVra28gbmF3acSFenVqZSBkbyBkYXduaWVqc3p5Y2ggZXBvayBsdWIgZG8gZGFteSB6IHRhbGlpIGthcnQuIFBvcnRyZXQgaWRlYWxuaWUgemFncmEgdyBrYcW8ZHltIHduxJl0cnp1IGFsZSBpIHLDs3duaWXFvCBwb2RrcmXFm2xpIGthcmNpYW5lIHVwb2RvYmFuaWEsIGhvYmJ5IGhpc3Rvcnljem5lIGx1YiByb3pyeXdrb3d5IGNoYXJha3RlciBvc29ieSBrdMOzcmEgZ28gemFrdXBpLiBTeWdub3dhbnkgeiBwcnpvZHUgbmF6d2lza2llbSBpIGRhdMSFIHBvd3N0YW5pYS4gV3lrb25hbnkgdyBwb2plZHluY3p5bSBlZ3plbXBsYXJ6dSBjbyB6d2nEmWtzemEgamVnbyB3YXJ0b8WbxIcga29sZWtjam9uZXJza8SFLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE4XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA2MyxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9pemEta29zdGl1a293LXNsYWR5LTQtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSXphIEtvc3RpdWtvd1wiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBYnN0cmFrY3lqbnkgb2JyYXogbmFtYWxvd2FueSB3IHRlY2huaWNlIG9sZWpuZWouIHByYWNhIG5pZSB3eW1hZ2EgcmFteSAsIGtyYXfEmWR6aWUgcMWCw7N0bmEgc8SFIHphbWFsb3dhbmUuIFByYWNhIGplc3QgemFiZXpwaWVjem9uYSB3ZXJuaWtzZW0gc2F0eW5vd3ltLiBvYnJheiBqZXN0IHN5Z25vd2FueSB6IHR5xYJ1IG9icmF6IGplc3QgY3rEmcWbY2nEhSBjeWtsdSBtYWxhcnNraWVnbyBcXFwiIMWabGFkeVxcXCIsIHBvd3N0YcWCZWdvIHcgMjAxNCByb2t1LiBQcmFjYSBtb8W8ZSBiecSHIGRvYnJ5bSBwcmV6ZW50ZW0gbnAuIG5hIMWbbHViLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE0XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiAxNSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgKTtcblxuICAgIFxuICAgIHByaXZhdGUgX3Rvb2xzJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+O1xuICAgIHByaXZhdGUgX3Rvb2xzID0gbmV3IEFycmF5PElEYXRhSXRlbT4oKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9vbHNKc29uKTtcbiAgICAgICAgdGhpcy5faXRlbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMoKSk7XG4gICAgICAgIHRoaXMuX3Rvb2xzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj4odGhpcy5jbG9uZUl0ZW1zMSgpKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IElEYXRhSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maW5kKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5pZCA9PSBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW5kZXgoaXRlbTogSURhdGFJdGVtKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGl0ZW0uaWQpO1xuICAgIH1cblxuICAgIGdldFVuc2Vlbkl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5hc09ic2VydmFibGUoKVxuICAgICAgICAgICAgLnBpcGUobWFwKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4gaXRlbXMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCkpKTtcbiAgICB9XG5cbiAgICBnZXRVbnNlZW5JdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpO1xuICAgIH1cblxuICAgIGdldExpa2VkSXRlbXMxJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcbiAgICAgICAgLy8gVE9ETzogQXVzd2FobCBkZXMgVG9vbHMgYXVmZ3J1bmQgZGVyIGdld8OkaGxyZW4gRGF0ZWllblxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShtYXAoKHRvb2xzOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiB0b29scy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCA9PT0gdHJ1ZSkpKTtcbiAgICB9XG5cbiAgICBnZXRMaWtlZEl0ZW1zMSgpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0TGlrZWRJdGVtcyQoKTogT2JzZXJ2YWJsZTxBcnJheTxJRGF0YUl0ZW0+PiB7XG4gICAgICAgIC8vIFRPRE86IEF1c3dhaGwgZGVzIFRvb2xzIGF1ZmdydW5kIGRlciBnZXfDpGhscmVuIERhdGVpZW5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5hc09ic2VydmFibGUoKVxuICAgICAgICAgICAgLnBpcGUobWFwKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4gaXRlbXMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQgPT09IHRydWUpKSk7XG4gICAgfVxuXG4gICAgZ2V0TGlrZWRJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtKGl0ZW06IElEYXRhSXRlbSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgaXRlbXNbdGhpcy5nZXRJbmRleChpdGVtKV0gPSBpdGVtO1xuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XG4gICAgfVxuXG4gICAgZGlzbGlrZShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgaXRlbS5saWtlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgaXRlbXNbdGhpcy5nZXRJbmRleChpdGVtKV0gPSBpdGVtO1xuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XG4gICAgfVxuXG4gICAgcmVzZXRJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQodGhpcy5jbG9uZUl0ZW1zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xvbmVJdGVtczEoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3Rvb2xzKSk7XG4gICAgfSAgIFxuICAgIHByaXZhdGUgY2xvbmVJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5faXRlbXMpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9