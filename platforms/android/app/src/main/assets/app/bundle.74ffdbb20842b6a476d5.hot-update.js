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
            author: "Mehr Erklärung",
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
            author: "Mehr Erklärung",
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
            author: "Mehr Erklärung",
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
            author: "Mehr Erklärung",
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
            author: "Mehr Erklärung",
            location: "Gallerystore",
            description: "Abstrakcyjny obraz namalowany w technice olejnej. praca nie wymaga ramy , krawędzie płótna są zamalowane. Praca jest zabezpieczona werniksem satynowym. obraz jest sygnowany z tyłu obraz jest częścią cyklu malarskiego \" Ślady\", powstałego w 2014 roku. Praca może być dobrym prezentem np. na ślub.",
            date: "2014",
            popularity: 15,
            viewed: false,
            liked: false
        });
        this._tools = new Array({
            id: 1,
            image: "https://lh3.googleusercontent.com/8nwT1oyitY4nAh1zasfOCJzgsN-svQus2KDXhHGhMJrVarAdSu1AGPAyGULjb57ASJg",
            title: "Team Viewer",
            author: "Jacek Malinowski",
            location: "Gallerystore",
            description: "Obraz jest wyjątkową ekspresją artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra świateł i cienia za pomocą 4 kolorów oddaje złożoność jakie chciał osiągnąć artysta oraz prosty panton barw które budują całą narrację. Dużą wagę można zaobserwować w detalu, ponieważ jest to grafika wektorowa możemy dostrzec nietypowy detal włosów oraz światło, które rozświetla końcówki. Obraz przedstawia piękno kobiety, oraz drzemiącą magię jej temperamentu. Zimne barwy oddają chłód który symbolizuje żal między uczuciem wynikającym z rozstania.",
            date: "2018",
            popularity: 82,
            viewed: false,
            liked: true
        }, {
            id: 2,
            image: "https://cdn.gallerystore.pl/works//w777-h700/joanna-sulek-malinowska-chromosfera-iii-akryl.jpg",
            title: "Skype",
            author: "Mehr Erklärung",
            location: "Gallerystore",
            description: "Cykl abstrakcji „Chromosfery” inspirowany jest słońcem, przestrzenią kosmiczną oraz zjawiskami meteorologicznymi. Czarne pasy sugerują ograniczenie mieszkańca ziemskiego, który nie może wznieść się ponad to co widzi z dołu. Barwny środek z symbolicznym słońcem lub planetą zmienia formy oraz kolory w zależności od pory dnia. Obrazy budowane są za pomocą płynnych linii, przenikających się na płaszczyźnie. Często układy przestrzenne rozświetlane są światłem padającym z nieoczywistego źródła. Uwydatniają się aby za chwilę zapaść się w czerń. Powierzchnia obrazów poprzez wielokrotne, precyzyjne nakładanie płaskiej plamy, zdaje się być idealnie gładka. Delikatne linie podkreślają kruchość zjawiska a jednocześnie są łącznikiem pasa barw z czarną przestrzenią.",
            date: "2016",
            popularity: 41,
            viewed: false,
            liked: false
        }, {
            id: 3,
            image: "https://cdn.gallerystore.pl/works//w777-h700/pawel-gorski-slimak-akryl.jpg",
            title: "Jitsti",
            author: "Paweł Górski",
            location: "Gallerystore",
            description: "Abstrakcyjna przyroda, piekno otaczającego nas świata, współistnienie. Akstrakcyjny, pełen kolorów obraz akrylowy na płótnie lnianym wykonany w technice enkaustyki. Enkaustyka to technika pracochłonna, która wymaga od twórcy nakładania farb na gorąco w spoiwie wosku pszczelego lub oleju. Dzięki takim zabiegom pozwala uzyskać trwałe i odporne na wilgoć rezultaty, a także zachować głębię i blask zastosowanej palety kolorystycznej. Praca doda chatakteru przestronnym wnetrzom. Obraz sprawdzi się w biurze oraz w dużym, jasnym salonie.",
            date: "2015",
            popularity: 55,
            viewed: false,
            liked: false
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQWlCN0M7SUE0R0k7UUF6R1EsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZpQkFBNmlCO1lBQzFqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSxnR0FBZ0c7WUFDdkcsS0FBSyxFQUFFLHdGQUF3RjtZQUMvRixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0dkJBQTR2QjtZQUN6d0IsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsNEVBQTRFO1lBQ25GLEtBQUssRUFBRSx3RkFBd0Y7WUFDL0YsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUseWhCQUF5aEI7WUFDdGlCLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2YsRUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxF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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgY2FwdGlvbj86IHN0cmluZztcbiAgICBkYXRlOiBEYXRlIHwgc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGxpa2VkPzogYm9vbGVhbjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIHBvcHVsYXJpdHk/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB2aWV3ZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qYWNlay1tYWxpbm93c2tpLXRvc2thbmlhLXZhbC1kLW9yY2lhLTEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiTWVociBFcmtsw6RydW5nXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IGplc3Qgd3lqxIV0a293xIUgZWtzcHJlc2rEhSBhcnR5c3R5LiBQcmFjYSBqZXN0IGRlZHlrb3dhbnltIHBvcnRyZXRlbSBDbWlsaSBDb2JlbGxvLiBBYnN0cmFrY3lqbmEgZ3JhIMWbd2lhdGXFgiBpIGNpZW5pYSB6YSBwb21vY8SFIDQga29sb3LDs3cgb2RkYWplIHrFgm/FvG9ub8WbxIcgamFraWUgY2hjaWHFgiBvc2nEhWduxIXEhyBhcnR5c3RhIG9yYXogcHJvc3R5IHBhbnRvbiBiYXJ3IGt0w7NyZSBidWR1asSFIGNhxYLEhSBuYXJyYWNqxJkuIER1xbzEhSB3YWfEmSBtb8W8bmEgemFvYnNlcndvd2HEhyB3IGRldGFsdSwgcG9uaWV3YcW8IGplc3QgdG8gZ3JhZmlrYSB3ZWt0b3Jvd2EgbW/FvGVteSBkb3N0cnplYyBuaWV0eXBvd3kgZGV0YWwgd8WCb3PDs3cgb3JheiDFm3dpYXTFgm8sIGt0w7NyZSByb3rFm3dpZXRsYSBrb8WEY8Ozd2tpLiBPYnJheiBwcnplZHN0YXdpYSBwacSZa25vIGtvYmlldHksIG9yYXogZHJ6ZW1pxIVjxIUgbWFnacSZIGplaiB0ZW1wZXJhbWVudHUuIFppbW5lIGJhcnd5IG9kZGFqxIUgY2jFgsOzZCBrdMOzcnkgc3ltYm9saXp1amUgxbxhbCBtacSZZHp5IHVjenVjaWVtIHd5bmlrYWrEhWN5bSB6IHJvenN0YW5pYS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxOFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogODIsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvam9hbm5hLXN1bGVrLW1hbGlub3dza2EtY2hyb21vc2ZlcmEtaWlpLWFrcnlsLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJNZWhyIEVya2zDpHJ1bmdcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3lrbCBhYnN0cmFrY2ppIOKAnkNocm9tb3NmZXJ54oCdIGluc3Bpcm93YW55IGplc3Qgc8WCb8WEY2VtLCBwcnplc3RyemVuacSFIGtvc21pY3puxIUgb3JheiB6amF3aXNrYW1pIG1ldGVvcm9sb2dpY3pueW1pLiBDemFybmUgcGFzeSBzdWdlcnVqxIUgb2dyYW5pY3plbmllIG1pZXN6a2HFhGNhIHppZW1za2llZ28sIGt0w7NyeSBuaWUgbW/FvGUgd3puaWXFm8SHIHNpxJkgcG9uYWQgdG8gY28gd2lkemkgeiBkb8WCdS4gQmFyd255IMWbcm9kZWsgeiBzeW1ib2xpY3pueW0gc8WCb8WEY2VtIGx1YiBwbGFuZXTEhSB6bWllbmlhIGZvcm15IG9yYXoga29sb3J5IHcgemFsZcW8bm/Fm2NpIG9kIHBvcnkgZG5pYS4gT2JyYXp5IGJ1ZG93YW5lIHPEhSB6YSBwb21vY8SFIHDFgnlubnljaCBsaW5paSwgcHJ6ZW5pa2FqxIVjeWNoIHNpxJkgbmEgcMWCYXN6Y3p5xbpuaWUuIEN6xJlzdG8gdWvFgmFkeSBwcnplc3RyemVubmUgcm96xZt3aWV0bGFuZSBzxIUgxZt3aWF0xYJlbSBwYWRhasSFY3ltIHogbmllb2N6eXdpc3RlZ28gxbpyw7NkxYJhLiBVd3lkYXRuaWFqxIUgc2nEmSBhYnkgemEgY2h3aWzEmSB6YXBhxZvEhyBzacSZIHcgY3plcsWELiBQb3dpZXJ6Y2huaWEgb2JyYXrDs3cgcG9wcnpleiB3aWVsb2tyb3RuZSwgcHJlY3l6eWpuZSBuYWvFgmFkYW5pZSBwxYJhc2tpZWogcGxhbXksIHpkYWplIHNpxJkgYnnEhyBpZGVhbG5pZSBnxYJhZGthLiBEZWxpa2F0bmUgbGluaWUgcG9ka3JlxZtsYWrEhSBrcnVjaG/Fm8SHIHpqYXdpc2thIGEgamVkbm9jemXFm25pZSBzxIUgxYLEhWN6bmlraWVtIHBhc2EgYmFydyB6IGN6YXJuxIUgcHJ6ZXN0cnplbmnEhS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNlwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNDEsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtZ29yc2tpLXNsaW1hay1ha3J5bC5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiTWVociBFcmtsw6RydW5nXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpuYSBwcnp5cm9kYSwgcGlla25vIG90YWN6YWrEhWNlZ28gbmFzIMWbd2lhdGEsIHdzcMOzxYJpc3RuaWVuaWUuIEFrc3RyYWtjeWpueSwgcGXFgmVuIGtvbG9yw7N3IG9icmF6IGFrcnlsb3d5IG5hIHDFgsOzdG5pZSBsbmlhbnltIHd5a29uYW55IHcgdGVjaG5pY2UgZW5rYXVzdHlraS4gRW5rYXVzdHlrYSB0byB0ZWNobmlrYSBwcmFjb2NoxYJvbm5hLCBrdMOzcmEgd3ltYWdhIG9kIHR3w7NyY3kgbmFrxYJhZGFuaWEgZmFyYiBuYSBnb3LEhWNvIHcgc3BvaXdpZSB3b3NrdSBwc3pjemVsZWdvIGx1YiBvbGVqdS4gRHppxJlraSB0YWtpbSB6YWJpZWdvbSBwb3p3YWxhIHV6eXNrYcSHIHRyd2HFgmUgaSBvZHBvcm5lIG5hIHdpbGdvxIcgcmV6dWx0YXR5LCBhIHRha8W8ZSB6YWNob3dhxIcgZ8WCxJliacSZIGkgYmxhc2sgemFzdG9zb3dhbmVqIHBhbGV0eSBrb2xvcnlzdHljem5lai4gUHJhY2EgZG9kYSBjaGF0YWt0ZXJ1IHByemVzdHJvbm55bSB3bmV0cnpvbS4gT2JyYXogc3ByYXdkemkgc2nEmSB3IGJpdXJ6ZSBvcmF6IHcgZHXFvHltLCBqYXNueW0gc2Fsb25pZS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNVwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNTUsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtcG9yYWRhLWRhbWEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiTWVociBFcmtsw6RydW5nXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IFxcXCJkYW1hXFxcIiB6b3N0YcWCIG5hbWFsb3dhbnkgbmEgcMWCw7N0bmllIDNEIC0gZ3J1YnN6YSByYW1hLCBvIHd5bWlhcmFjaCA1MHg1MGNtLCBmYXJiYW1pIG9sZWpueW1pLiBNYWxvd2lkxYJvIHByemVkc3Rhd2lhIGtvYmlldMSZIHoga2xhc8SFIG5hIHRsZSB6IGJvZ2F0xIUgb3JuYW1lbnR5a8SFLiBCYXJkem8ga29sb3Jvd3ksIHpidWRvd2FueSB6IHByb3N0eWNoIGZvcm0gaSBrc3p0YcWCdMOzdy4gS2xpbWF0ZW0gbGVra28gbmF3acSFenVqZSBkbyBkYXduaWVqc3p5Y2ggZXBvayBsdWIgZG8gZGFteSB6IHRhbGlpIGthcnQuIFBvcnRyZXQgaWRlYWxuaWUgemFncmEgdyBrYcW8ZHltIHduxJl0cnp1IGFsZSBpIHLDs3duaWXFvCBwb2RrcmXFm2xpIGthcmNpYW5lIHVwb2RvYmFuaWEsIGhvYmJ5IGhpc3Rvcnljem5lIGx1YiByb3pyeXdrb3d5IGNoYXJha3RlciBvc29ieSBrdMOzcmEgZ28gemFrdXBpLiBTeWdub3dhbnkgeiBwcnpvZHUgbmF6d2lza2llbSBpIGRhdMSFIHBvd3N0YW5pYS4gV3lrb25hbnkgdyBwb2plZHluY3p5bSBlZ3plbXBsYXJ6dSBjbyB6d2nEmWtzemEgamVnbyB3YXJ0b8WbxIcga29sZWtjam9uZXJza8SFLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE4XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA2MyxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9pemEta29zdGl1a293LXNsYWR5LTQtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiTWVociBFcmtsw6RydW5nXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpueSBvYnJheiBuYW1hbG93YW55IHcgdGVjaG5pY2Ugb2xlam5lai4gcHJhY2EgbmllIHd5bWFnYSByYW15ICwga3Jhd8SZZHppZSBwxYLDs3RuYSBzxIUgemFtYWxvd2FuZS4gUHJhY2EgamVzdCB6YWJlenBpZWN6b25hIHdlcm5pa3NlbSBzYXR5bm93eW0uIG9icmF6IGplc3Qgc3lnbm93YW55IHogdHnFgnUgb2JyYXogamVzdCBjesSZxZtjacSFIGN5a2x1IG1hbGFyc2tpZWdvIFxcXCIgxZpsYWR5XFxcIiwgcG93c3RhxYJlZ28gdyAyMDE0IHJva3UuIFByYWNhIG1vxbxlIGJ5xIcgZG9icnltIHByZXplbnRlbSBucC4gbmEgxZtsdWIuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTRcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDE1LFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICApO1xuXG4gICAgXG4gICAgcHJpdmF0ZSBfdG9vbHMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XG4gICAgcHJpdmF0ZSBfdG9vbHMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vOG53VDFveWl0WTRuQWgxemFzZk9DSnpnc04tc3ZRdXMyS0RYaEhHaE1KclZhckFkU3UxQUdQQXlHVUxqYjU3QVNKZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGVhbSBWaWV3ZXJcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJKYWNlayBNYWxpbm93c2tpXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IGplc3Qgd3lqxIV0a293xIUgZWtzcHJlc2rEhSBhcnR5c3R5LiBQcmFjYSBqZXN0IGRlZHlrb3dhbnltIHBvcnRyZXRlbSBDbWlsaSBDb2JlbGxvLiBBYnN0cmFrY3lqbmEgZ3JhIMWbd2lhdGXFgiBpIGNpZW5pYSB6YSBwb21vY8SFIDQga29sb3LDs3cgb2RkYWplIHrFgm/FvG9ub8WbxIcgamFraWUgY2hjaWHFgiBvc2nEhWduxIXEhyBhcnR5c3RhIG9yYXogcHJvc3R5IHBhbnRvbiBiYXJ3IGt0w7NyZSBidWR1asSFIGNhxYLEhSBuYXJyYWNqxJkuIER1xbzEhSB3YWfEmSBtb8W8bmEgemFvYnNlcndvd2HEhyB3IGRldGFsdSwgcG9uaWV3YcW8IGplc3QgdG8gZ3JhZmlrYSB3ZWt0b3Jvd2EgbW/FvGVteSBkb3N0cnplYyBuaWV0eXBvd3kgZGV0YWwgd8WCb3PDs3cgb3JheiDFm3dpYXTFgm8sIGt0w7NyZSByb3rFm3dpZXRsYSBrb8WEY8Ozd2tpLiBPYnJheiBwcnplZHN0YXdpYSBwacSZa25vIGtvYmlldHksIG9yYXogZHJ6ZW1pxIVjxIUgbWFnacSZIGplaiB0ZW1wZXJhbWVudHUuIFppbW5lIGJhcnd5IG9kZGFqxIUgY2jFgsOzZCBrdMOzcnkgc3ltYm9saXp1amUgxbxhbCBtacSZZHp5IHVjenVjaWVtIHd5bmlrYWrEhWN5bSB6IHJvenN0YW5pYS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxOFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogODIsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IHRydWVcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qb2FubmEtc3VsZWstbWFsaW5vd3NrYS1jaHJvbW9zZmVyYS1paWktYWtyeWwuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJTa3lwZVwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIk1laHIgRXJrbMOkcnVuZ1wiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDeWtsIGFic3RyYWtjamkg4oCeQ2hyb21vc2ZlcnnigJ0gaW5zcGlyb3dhbnkgamVzdCBzxYJvxYRjZW0sIHByemVzdHJ6ZW5pxIUga29zbWljem7EhSBvcmF6IHpqYXdpc2thbWkgbWV0ZW9yb2xvZ2ljem55bWkuIEN6YXJuZSBwYXN5IHN1Z2VydWrEhSBvZ3JhbmljemVuaWUgbWllc3prYcWEY2EgemllbXNraWVnbywga3TDs3J5IG5pZSBtb8W8ZSB3em5pZcWbxIcgc2nEmSBwb25hZCB0byBjbyB3aWR6aSB6IGRvxYJ1LiBCYXJ3bnkgxZtyb2RlayB6IHN5bWJvbGljem55bSBzxYJvxYRjZW0gbHViIHBsYW5ldMSFIHptaWVuaWEgZm9ybXkgb3JheiBrb2xvcnkgdyB6YWxlxbxub8WbY2kgb2QgcG9yeSBkbmlhLiBPYnJhenkgYnVkb3dhbmUgc8SFIHphIHBvbW9jxIUgcMWCeW5ueWNoIGxpbmlpLCBwcnplbmlrYWrEhWN5Y2ggc2nEmSBuYSBwxYJhc3pjennFum5pZS4gQ3rEmXN0byB1a8WCYWR5IHByemVzdHJ6ZW5uZSByb3rFm3dpZXRsYW5lIHPEhSDFm3dpYXTFgmVtIHBhZGFqxIVjeW0geiBuaWVvY3p5d2lzdGVnbyDFunLDs2TFgmEuIFV3eWRhdG5pYWrEhSBzacSZIGFieSB6YSBjaHdpbMSZIHphcGHFm8SHIHNpxJkgdyBjemVyxYQuIFBvd2llcnpjaG5pYSBvYnJhesOzdyBwb3ByemV6IHdpZWxva3JvdG5lLCBwcmVjeXp5am5lIG5ha8WCYWRhbmllIHDFgmFza2llaiBwbGFteSwgemRhamUgc2nEmSBiecSHIGlkZWFsbmllIGfFgmFka2EuIERlbGlrYXRuZSBsaW5pZSBwb2RrcmXFm2xhasSFIGtydWNob8WbxIcgemphd2lza2EgYSBqZWRub2N6ZcWbbmllIHPEhSDFgsSFY3puaWtpZW0gcGFzYSBiYXJ3IHogY3phcm7EhSBwcnplc3RyemVuacSFLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE2XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA0MSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9wYXdlbC1nb3Jza2ktc2xpbWFrLWFrcnlsLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiSml0c3RpXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiUGF3ZcWCIEfDs3Jza2lcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWJzdHJha2N5am5hIHByenlyb2RhLCBwaWVrbm8gb3RhY3phasSFY2VnbyBuYXMgxZt3aWF0YSwgd3Nww7PFgmlzdG5pZW5pZS4gQWtzdHJha2N5am55LCBwZcWCZW4ga29sb3LDs3cgb2JyYXogYWtyeWxvd3kgbmEgcMWCw7N0bmllIGxuaWFueW0gd3lrb25hbnkgdyB0ZWNobmljZSBlbmthdXN0eWtpLiBFbmthdXN0eWthIHRvIHRlY2huaWthIHByYWNvY2jFgm9ubmEsIGt0w7NyYSB3eW1hZ2Egb2QgdHfDs3JjeSBuYWvFgmFkYW5pYSBmYXJiIG5hIGdvcsSFY28gdyBzcG9pd2llIHdvc2t1IHBzemN6ZWxlZ28gbHViIG9sZWp1LiBEemnEmWtpIHRha2ltIHphYmllZ29tIHBvendhbGEgdXp5c2thxIcgdHJ3YcWCZSBpIG9kcG9ybmUgbmEgd2lsZ2/EhyByZXp1bHRhdHksIGEgdGFrxbxlIHphY2hvd2HEhyBnxYLEmWJpxJkgaSBibGFzayB6YXN0b3Nvd2FuZWogcGFsZXR5IGtvbG9yeXN0eWN6bmVqLiBQcmFjYSBkb2RhIGNoYXRha3RlcnUgcHJ6ZXN0cm9ubnltIHduZXRyem9tLiBPYnJheiBzcHJhd2R6aSBzacSZIHcgYml1cnplIG9yYXogdyBkdcW8eW0sIGphc255bSBzYWxvbmllLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE1XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA1NSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfVxuXG5cbiAgICApO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b29sc0pzb24pO1xuICAgICAgICB0aGlzLl9pdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtcygpKTtcbiAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMxKCkpO1xuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogSURhdGFJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbmQoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmlkID09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRJbmRleChpdGVtOiBJRGF0YUl0ZW0pOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gaXRlbS5pZCk7XG4gICAgfVxuXG4gICAgZ2V0VW5zZWVuSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShtYXAoKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gIWl0ZW0udmlld2VkKSkpO1xuICAgIH1cblxuICAgIGdldFVuc2Vlbkl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCk7XG4gICAgfVxuXG4gICAgZ2V0TGlrZWRJdGVtczEkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgodG9vbHM6IEFycmF5PElEYXRhSXRlbT4pID0+IHRvb2xzLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xuICAgIH1cblxuICAgIGdldExpa2VkSXRlbXMxKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQpO1xuICAgIH1cbiAgICBcbiAgICBnZXRMaWtlZEl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcbiAgICAgICAgLy8gVE9ETzogQXVzd2FobCBkZXMgVG9vbHMgYXVmZ3J1bmQgZGVyIGdld8OkaGxyZW4gRGF0ZWllblxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXG4gICAgICAgICAgICAucGlwZShtYXAoKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCA9PT0gdHJ1ZSkpKTtcbiAgICB9XG5cbiAgICBnZXRMaWtlZEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUl0ZW0oaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KGl0ZW1zKTtcbiAgICB9XG5cbiAgICBkaXNsaWtlKGl0ZW06IElEYXRhSXRlbSk6IHZvaWQge1xuICAgICAgICBpdGVtLmxpa2VkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KGl0ZW1zKTtcbiAgICB9XG5cbiAgICByZXNldEl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dCh0aGlzLmNsb25lSXRlbXMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zMSgpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5fdG9vbHMpKTtcbiAgICB9ICAgXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9pdGVtcykpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=