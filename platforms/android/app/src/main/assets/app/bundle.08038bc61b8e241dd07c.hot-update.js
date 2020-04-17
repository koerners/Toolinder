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
        this._tools = new Array({
            id: 1,
            image: "https://cdn.gallerystore.pl/works//w777-h700/jacek-malinowski-toskania-val-d-orcia-1-malarstwo-olejne.jpg",
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
            title: "Jitsti",
            author: "Paweł Górski",
            location: "Gallerystore",
            description: "Abstrakcyjna przyroda, piekno otaczającego nas świata, współistnienie. Akstrakcyjny, pełen kolorów obraz akrylowy na płótnie lnianym wykonany w technice enkaustyki. Enkaustyka to technika pracochłonna, która wymaga od twórcy nakładania farb na gorąco w spoiwie wosku pszczelego lub oleju. Dzięki takim zabiegom pozwala uzyskać trwałe i odporne na wilgoć rezultaty, a także zachować głębię i blask zastosowanej palety kolorystycznej. Praca doda chatakteru przestronnym wnetrzom. Obraz sprawdzi się w biurze oraz w dużym, jasnym salonie.",
            date: "2015",
            popularity: 55,
            viewed: false,
            liked: false
        });
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems());
        this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems());
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
    DataService.prototype.getLikedItems$ = function () {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._tools$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (tools) { return tools.filter(function (item) { return item.liked === true; }); }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQWlCN0M7SUE4R0k7UUEzR1EsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZpQkFBNmlCO1lBQzFqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSxnR0FBZ0c7WUFDdkcsS0FBSyxFQUFFLHdGQUF3RjtZQUMvRixNQUFNLEVBQUUseUJBQXlCO1lBQ2pDLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0dkJBQTR2QjtZQUN6d0IsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsNEVBQTRFO1lBQ25GLEtBQUssRUFBRSx3RkFBd0Y7WUFDL0YsTUFBTSxFQUFFLGNBQWM7WUFDdEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLHloQkFBeWhCO1lBQ3RpQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFB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QUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxnQ0FBVSxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUF4S1EsV0FBVztRQUR2QixnRUFBVSxFQUFFOztPQUNBLFdBQVcsQ0F5S3ZCO0lBQUQsa0JBQUM7Q0FBQTtBQXpLdUIiLCJmaWxlIjoiYnVuZGxlLjA4MDM4YmM2MWI4ZTI0MWRkMDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgY2FwdGlvbj86IHN0cmluZztcbiAgICBkYXRlOiBEYXRlIHwgc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGxpa2VkPzogYm9vbGVhbjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIHBvcHVsYXJpdHk/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB2aWV3ZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qYWNlay1tYWxpbm93c2tpLXRvc2thbmlhLXZhbC1kLW9yY2lhLTEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSmFjZWsgTWFsaW5vd3NraVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPYnJheiBqZXN0IHd5asSFdGtvd8SFIGVrc3ByZXNqxIUgYXJ0eXN0eS4gUHJhY2EgamVzdCBkZWR5a293YW55bSBwb3J0cmV0ZW0gQ21pbGkgQ29iZWxsby4gQWJzdHJha2N5am5hIGdyYSDFm3dpYXRlxYIgaSBjaWVuaWEgemEgcG9tb2PEhSA0IGtvbG9yw7N3IG9kZGFqZSB6xYJvxbxvbm/Fm8SHIGpha2llIGNoY2lhxYIgb3NpxIVnbsSFxIcgYXJ0eXN0YSBvcmF6IHByb3N0eSBwYW50b24gYmFydyBrdMOzcmUgYnVkdWrEhSBjYcWCxIUgbmFycmFjasSZLiBEdcW8xIUgd2FnxJkgbW/FvG5hIHphb2JzZXJ3b3dhxIcgdyBkZXRhbHUsIHBvbmlld2HFvCBqZXN0IHRvIGdyYWZpa2Egd2VrdG9yb3dhIG1vxbxlbXkgZG9zdHJ6ZWMgbmlldHlwb3d5IGRldGFsIHfFgm9zw7N3IG9yYXogxZt3aWF0xYJvLCBrdMOzcmUgcm96xZt3aWV0bGEga2/FhGPDs3draS4gT2JyYXogcHJ6ZWRzdGF3aWEgcGnEmWtubyBrb2JpZXR5LCBvcmF6IGRyemVtacSFY8SFIG1hZ2nEmSBqZWogdGVtcGVyYW1lbnR1LiBaaW1uZSBiYXJ3eSBvZGRhasSFIGNoxYLDs2Qga3TDs3J5IHN5bWJvbGl6dWplIMW8YWwgbWnEmWR6eSB1Y3p1Y2llbSB3eW5pa2FqxIVjeW0geiByb3pzdGFuaWEuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMThcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDgyLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL2pvYW5uYS1zdWxlay1tYWxpbm93c2thLWNocm9tb3NmZXJhLWlpaS1ha3J5bC5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSm9hbm5hIFN1xYJlay1NYWxpbm93c2thXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkN5a2wgYWJzdHJha2NqaSDigJ5DaHJvbW9zZmVyeeKAnSBpbnNwaXJvd2FueSBqZXN0IHPFgm/FhGNlbSwgcHJ6ZXN0cnplbmnEhSBrb3NtaWN6bsSFIG9yYXogemphd2lza2FtaSBtZXRlb3JvbG9naWN6bnltaS4gQ3phcm5lIHBhc3kgc3VnZXJ1asSFIG9ncmFuaWN6ZW5pZSBtaWVzemthxYRjYSB6aWVtc2tpZWdvLCBrdMOzcnkgbmllIG1vxbxlIHd6bmllxZvEhyBzacSZIHBvbmFkIHRvIGNvIHdpZHppIHogZG/FgnUuIEJhcndueSDFm3JvZGVrIHogc3ltYm9saWN6bnltIHPFgm/FhGNlbSBsdWIgcGxhbmV0xIUgem1pZW5pYSBmb3JteSBvcmF6IGtvbG9yeSB3IHphbGXFvG5vxZtjaSBvZCBwb3J5IGRuaWEuIE9icmF6eSBidWRvd2FuZSBzxIUgemEgcG9tb2PEhSBwxYJ5bm55Y2ggbGluaWksIHByemVuaWthasSFY3ljaCBzacSZIG5hIHDFgmFzemN6ecW6bmllLiBDesSZc3RvIHVrxYJhZHkgcHJ6ZXN0cnplbm5lIHJvesWbd2lldGxhbmUgc8SFIMWbd2lhdMWCZW0gcGFkYWrEhWN5bSB6IG5pZW9jenl3aXN0ZWdvIMW6csOzZMWCYS4gVXd5ZGF0bmlhasSFIHNpxJkgYWJ5IHphIGNod2lsxJkgemFwYcWbxIcgc2nEmSB3IGN6ZXLFhC4gUG93aWVyemNobmlhIG9icmF6w7N3IHBvcHJ6ZXogd2llbG9rcm90bmUsIHByZWN5enlqbmUgbmFrxYJhZGFuaWUgcMWCYXNraWVqIHBsYW15LCB6ZGFqZSBzacSZIGJ5xIcgaWRlYWxuaWUgZ8WCYWRrYS4gRGVsaWthdG5lIGxpbmllIHBvZGtyZcWbbGFqxIUga3J1Y2hvxZvEhyB6amF3aXNrYSBhIGplZG5vY3plxZtuaWUgc8SFIMWCxIVjem5pa2llbSBwYXNhIGJhcncgeiBjemFybsSFIHByemVzdHJ6ZW5pxIUuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTZcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDQxLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL3Bhd2VsLWdvcnNraS1zbGltYWstYWtyeWwuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIlBhd2XFgiBHw7Nyc2tpXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpuYSBwcnp5cm9kYSwgcGlla25vIG90YWN6YWrEhWNlZ28gbmFzIMWbd2lhdGEsIHdzcMOzxYJpc3RuaWVuaWUuIEFrc3RyYWtjeWpueSwgcGXFgmVuIGtvbG9yw7N3IG9icmF6IGFrcnlsb3d5IG5hIHDFgsOzdG5pZSBsbmlhbnltIHd5a29uYW55IHcgdGVjaG5pY2UgZW5rYXVzdHlraS4gRW5rYXVzdHlrYSB0byB0ZWNobmlrYSBwcmFjb2NoxYJvbm5hLCBrdMOzcmEgd3ltYWdhIG9kIHR3w7NyY3kgbmFrxYJhZGFuaWEgZmFyYiBuYSBnb3LEhWNvIHcgc3BvaXdpZSB3b3NrdSBwc3pjemVsZWdvIGx1YiBvbGVqdS4gRHppxJlraSB0YWtpbSB6YWJpZWdvbSBwb3p3YWxhIHV6eXNrYcSHIHRyd2HFgmUgaSBvZHBvcm5lIG5hIHdpbGdvxIcgcmV6dWx0YXR5LCBhIHRha8W8ZSB6YWNob3dhxIcgZ8WCxJliacSZIGkgYmxhc2sgemFzdG9zb3dhbmVqIHBhbGV0eSBrb2xvcnlzdHljem5lai4gUHJhY2EgZG9kYSBjaGF0YWt0ZXJ1IHByemVzdHJvbm55bSB3bmV0cnpvbS4gT2JyYXogc3ByYXdkemkgc2nEmSB3IGJpdXJ6ZSBvcmF6IHcgZHXFvHltLCBqYXNueW0gc2Fsb25pZS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNVwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNTUsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtcG9yYWRhLWRhbWEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiUGF3ZcWCIFBvcmFkYVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPYnJheiBcXFwiZGFtYVxcXCIgem9zdGHFgiBuYW1hbG93YW55IG5hIHDFgsOzdG5pZSAzRCAtIGdydWJzemEgcmFtYSwgbyB3eW1pYXJhY2ggNTB4NTBjbSwgZmFyYmFtaSBvbGVqbnltaS4gTWFsb3dpZMWCbyBwcnplZHN0YXdpYSBrb2JpZXTEmSB6IGtsYXPEhSBuYSB0bGUgeiBib2dhdMSFIG9ybmFtZW50eWvEhS4gQmFyZHpvIGtvbG9yb3d5LCB6YnVkb3dhbnkgeiBwcm9zdHljaCBmb3JtIGkga3N6dGHFgnTDs3cuIEtsaW1hdGVtIGxla2tvIG5hd2nEhXp1amUgZG8gZGF3bmllanN6eWNoIGVwb2sgbHViIGRvIGRhbXkgeiB0YWxpaSBrYXJ0LiBQb3J0cmV0IGlkZWFsbmllIHphZ3JhIHcga2HFvGR5bSB3bsSZdHJ6dSBhbGUgaSByw7N3bmllxbwgcG9ka3JlxZtsaSBrYXJjaWFuZSB1cG9kb2JhbmlhLCBob2JieSBoaXN0b3J5Y3puZSBsdWIgcm96cnl3a293eSBjaGFyYWt0ZXIgb3NvYnkga3TDs3JhIGdvIHpha3VwaS4gU3lnbm93YW55IHogcHJ6b2R1IG5hendpc2tpZW0gaSBkYXTEhSBwb3dzdGFuaWEuIFd5a29uYW55IHcgcG9qZWR5bmN6eW0gZWd6ZW1wbGFyenUgY28gendpxJlrc3phIGplZ28gd2FydG/Fm8SHIGtvbGVrY2pvbmVyc2vEhS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxOFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNjMsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvaXphLWtvc3RpdWtvdy1zbGFkeS00LW1hbGFyc3R3by1vbGVqbmUuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIkl6YSBLb3N0aXVrb3dcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWJzdHJha2N5am55IG9icmF6IG5hbWFsb3dhbnkgdyB0ZWNobmljZSBvbGVqbmVqLiBwcmFjYSBuaWUgd3ltYWdhIHJhbXkgLCBrcmF3xJlkemllIHDFgsOzdG5hIHPEhSB6YW1hbG93YW5lLiBQcmFjYSBqZXN0IHphYmV6cGllY3pvbmEgd2Vybmlrc2VtIHNhdHlub3d5bS4gb2JyYXogamVzdCBzeWdub3dhbnkgeiB0ecWCdSBvYnJheiBqZXN0IGN6xJnFm2NpxIUgY3lrbHUgbWFsYXJza2llZ28gXFxcIiDFmmxhZHlcXFwiLCBwb3dzdGHFgmVnbyB3IDIwMTQgcm9rdS4gUHJhY2EgbW/FvGUgYnnEhyBkb2JyeW0gcHJlemVudGVtIG5wLiBuYSDFm2x1Yi5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogMTUsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICk7XG5cbiAgICBcbiAgICBwcml2YXRlIF90b29scyQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+PjtcbiAgICBwcml2YXRlIF90b29scyA9IG5ldyBBcnJheTxJRGF0YUl0ZW0+KFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL2phY2VrLW1hbGlub3dza2ktdG9za2FuaWEtdmFsLWQtb3JjaWEtMS1tYWxhcnN0d28tb2xlam5lLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGVhbSBWaWV3ZXJcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJKYWNlayBNYWxpbm93c2tpXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IGplc3Qgd3lqxIV0a293xIUgZWtzcHJlc2rEhSBhcnR5c3R5LiBQcmFjYSBqZXN0IGRlZHlrb3dhbnltIHBvcnRyZXRlbSBDbWlsaSBDb2JlbGxvLiBBYnN0cmFrY3lqbmEgZ3JhIMWbd2lhdGXFgiBpIGNpZW5pYSB6YSBwb21vY8SFIDQga29sb3LDs3cgb2RkYWplIHrFgm/FvG9ub8WbxIcgamFraWUgY2hjaWHFgiBvc2nEhWduxIXEhyBhcnR5c3RhIG9yYXogcHJvc3R5IHBhbnRvbiBiYXJ3IGt0w7NyZSBidWR1asSFIGNhxYLEhSBuYXJyYWNqxJkuIER1xbzEhSB3YWfEmSBtb8W8bmEgemFvYnNlcndvd2HEhyB3IGRldGFsdSwgcG9uaWV3YcW8IGplc3QgdG8gZ3JhZmlrYSB3ZWt0b3Jvd2EgbW/FvGVteSBkb3N0cnplYyBuaWV0eXBvd3kgZGV0YWwgd8WCb3PDs3cgb3JheiDFm3dpYXTFgm8sIGt0w7NyZSByb3rFm3dpZXRsYSBrb8WEY8Ozd2tpLiBPYnJheiBwcnplZHN0YXdpYSBwacSZa25vIGtvYmlldHksIG9yYXogZHJ6ZW1pxIVjxIUgbWFnacSZIGplaiB0ZW1wZXJhbWVudHUuIFppbW5lIGJhcnd5IG9kZGFqxIUgY2jFgsOzZCBrdMOzcnkgc3ltYm9saXp1amUgxbxhbCBtacSZZHp5IHVjenVjaWVtIHd5bmlrYWrEhWN5bSB6IHJvenN0YW5pYS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxOFwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogODIsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qb2FubmEtc3VsZWstbWFsaW5vd3NrYS1jaHJvbW9zZmVyYS1paWktYWtyeWwuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJTa3lwZVwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIkpvYW5uYSBTdcWCZWstTWFsaW5vd3NrYVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDeWtsIGFic3RyYWtjamkg4oCeQ2hyb21vc2ZlcnnigJ0gaW5zcGlyb3dhbnkgamVzdCBzxYJvxYRjZW0sIHByemVzdHJ6ZW5pxIUga29zbWljem7EhSBvcmF6IHpqYXdpc2thbWkgbWV0ZW9yb2xvZ2ljem55bWkuIEN6YXJuZSBwYXN5IHN1Z2VydWrEhSBvZ3JhbmljemVuaWUgbWllc3prYcWEY2EgemllbXNraWVnbywga3TDs3J5IG5pZSBtb8W8ZSB3em5pZcWbxIcgc2nEmSBwb25hZCB0byBjbyB3aWR6aSB6IGRvxYJ1LiBCYXJ3bnkgxZtyb2RlayB6IHN5bWJvbGljem55bSBzxYJvxYRjZW0gbHViIHBsYW5ldMSFIHptaWVuaWEgZm9ybXkgb3JheiBrb2xvcnkgdyB6YWxlxbxub8WbY2kgb2QgcG9yeSBkbmlhLiBPYnJhenkgYnVkb3dhbmUgc8SFIHphIHBvbW9jxIUgcMWCeW5ueWNoIGxpbmlpLCBwcnplbmlrYWrEhWN5Y2ggc2nEmSBuYSBwxYJhc3pjennFum5pZS4gQ3rEmXN0byB1a8WCYWR5IHByemVzdHJ6ZW5uZSByb3rFm3dpZXRsYW5lIHPEhSDFm3dpYXTFgmVtIHBhZGFqxIVjeW0geiBuaWVvY3p5d2lzdGVnbyDFunLDs2TFgmEuIFV3eWRhdG5pYWrEhSBzacSZIGFieSB6YSBjaHdpbMSZIHphcGHFm8SHIHNpxJkgdyBjemVyxYQuIFBvd2llcnpjaG5pYSBvYnJhesOzdyBwb3ByemV6IHdpZWxva3JvdG5lLCBwcmVjeXp5am5lIG5ha8WCYWRhbmllIHDFgmFza2llaiBwbGFteSwgemRhamUgc2nEmSBiecSHIGlkZWFsbmllIGfFgmFka2EuIERlbGlrYXRuZSBsaW5pZSBwb2RrcmXFm2xhasSFIGtydWNob8WbxIcgemphd2lza2EgYSBqZWRub2N6ZcWbbmllIHPEhSDFgsSFY3puaWtpZW0gcGFzYSBiYXJ3IHogY3phcm7EhSBwcnplc3RyemVuacSFLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE2XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA0MSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9wYXdlbC1nb3Jza2ktc2xpbWFrLWFrcnlsLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiSml0c3RpXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiUGF3ZcWCIEfDs3Jza2lcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWJzdHJha2N5am5hIHByenlyb2RhLCBwaWVrbm8gb3RhY3phasSFY2VnbyBuYXMgxZt3aWF0YSwgd3Nww7PFgmlzdG5pZW5pZS4gQWtzdHJha2N5am55LCBwZcWCZW4ga29sb3LDs3cgb2JyYXogYWtyeWxvd3kgbmEgcMWCw7N0bmllIGxuaWFueW0gd3lrb25hbnkgdyB0ZWNobmljZSBlbmthdXN0eWtpLiBFbmthdXN0eWthIHRvIHRlY2huaWthIHByYWNvY2jFgm9ubmEsIGt0w7NyYSB3eW1hZ2Egb2QgdHfDs3JjeSBuYWvFgmFkYW5pYSBmYXJiIG5hIGdvcsSFY28gdyBzcG9pd2llIHdvc2t1IHBzemN6ZWxlZ28gbHViIG9sZWp1LiBEemnEmWtpIHRha2ltIHphYmllZ29tIHBvendhbGEgdXp5c2thxIcgdHJ3YcWCZSBpIG9kcG9ybmUgbmEgd2lsZ2/EhyByZXp1bHRhdHksIGEgdGFrxbxlIHphY2hvd2HEhyBnxYLEmWJpxJkgaSBibGFzayB6YXN0b3Nvd2FuZWogcGFsZXR5IGtvbG9yeXN0eWN6bmVqLiBQcmFjYSBkb2RhIGNoYXRha3RlcnUgcHJ6ZXN0cm9ubnltIHduZXRyem9tLiBPYnJheiBzcHJhd2R6aSBzacSZIHcgYml1cnplIG9yYXogdyBkdcW8eW0sIGphc255bSBzYWxvbmllLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE1XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA1NSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfVxuICAgXG5cbiAgICApO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9pdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtcygpKTtcbiAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMoKSk7XG5cbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IElEYXRhSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maW5kKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5pZCA9PSBpZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SW5kZXgoaXRlbTogSURhdGFJdGVtKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGl0ZW0uaWQpO1xuICAgIH1cblxuICAgIGdldFVuc2Vlbkl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5hc09ic2VydmFibGUoKVxuICAgICAgICAgICAgLnBpcGUobWFwKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4gaXRlbXMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCkpKTtcbiAgICB9XG5cbiAgICBnZXRVbnNlZW5JdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpO1xuICAgIH1cblxuICAgIGdldExpa2VkSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgodG9vbHM6IEFycmF5PElEYXRhSXRlbT4pID0+IHRvb2xzLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xuICAgIH1cblxuICAgIGdldExpa2VkSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCk7XG4gICAgfVxuXG4gICAgdXBkYXRlSXRlbShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xuICAgIH1cblxuICAgIGRpc2xpa2UoaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XG4gICAgICAgIGl0ZW0ubGlrZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xuICAgIH1cblxuICAgIHJlc2V0SXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KHRoaXMuY2xvbmVJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsb25lSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX2l0ZW1zKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==