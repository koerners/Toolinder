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
            title: "Toskania",
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
            title: "Chromosfera III",
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
            title: "Ślimak",
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
            title: "Dama",
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
            title: "Ślady 4",
            author: "Iza Kostiukow",
            location: "Gallerystore",
            description: "Abstrakcyjny obraz namalowany w technice olejnej. praca nie wymaga ramy , krawędzie płótna są zamalowane. Praca jest zabezpieczona werniksem satynowym. obraz jest sygnowany z tyłu obraz jest częścią cyklu malarskiego \" Ślady\", powstałego w 2014 roku. Praca może być dobrym prezentem np. na ślub.",
            date: "2014",
            popularity: 15,
            viewed: false,
            liked: false
        }, {
            id: 6,
            image: "https://i.pinimg.com/736x/63/7a/a9/637aa953aa91cd0eb3a1b35ad065b2e1--romanticism-vitamin.jpg",
            title: "O śmierci sąsiada",
            author: "Zbigniew Rogalski",
            location: "Raster gallery",
            description: "Obraz zainspirowany autentycznym zdarzeniem - śmiercią sąsiada malarza. Ciało zmarłego zostało odnalezione dopiero po kilku dniach od zgonu w mieszkaniu, które przylegało do pracowni i mieszkania Rogalskiego.",
            date: "2017",
            popularity: 21,
            viewed: false,
            liked: false
        }, {
            id: 7,
            image: "https://img1.onebid.pl/img/216/33889_1b.jpg",
            title: "Poster for \"JAZZ Jamboree 70\"",
            author: "Jan Młodożeniec",
            location: "Ostoya",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "1970",
            popularity: 98,
            viewed: false,
            liked: false
        }, {
            id: 8,
            image: "https://uploads3.wikiart.org/00145/images/wilhelm-sasnal/shoah-forest-2003.jpg!Large.jpg",
            title: "Forest",
            author: "Wilhelm Sasnal",
            location: "Whitechapel Gallery",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "2002",
            popularity: 45,
            viewed: false,
            liked: false
        }, {
            id: 9,
            image: "https://d5wt70d4gnm1t.cloudfront.net/media/a-s/articles/2243-818175819439/wilhelm-sasnal-900x450.png",
            title: "Bathers at Asnieres,",
            author: "Wilhelm Sasnal",
            location: "Foksal Gallery Foundation Varsovie",
            description: "Obraz \"dama\" został namalowany na płótnie 3D - grubsza rama, o wymiarach 50x50cm, farbami olejnymi. Malowidło przedstawia kobietę z klasą na tle z bogatą ornamentyką. Bardzo kolorowy, zbudowany z prostych form i kształtów. Klimatem lekko nawiązuje do dawniejszych epok lub do damy z talii kart. Portret idealnie zagra w każdym wnętrzu ale i również podkreśli karciane upodobania, hobby historyczne lub rozrywkowy charakter osoby która go zakupi. Sygnowany z przodu nazwiskiem i datą powstania. Wykonany w pojedynczym egzemplarzu co zwiększa jego wartość kolekcjonerską.",
            date: "2010",
            popularity: 81,
            viewed: false,
            liked: false
        }, {
            id: 10,
            image: "https://cdn.gallerystore.pl/works//w777-h700/adam-twardowski-camila-grafika.jpg",
            title: "Lorem psium das ist die Frage, passt die hier rein?",
            author: "Adam Twardowski",
            location: "Gallerystore",
            description: "Obraz jest wyjątkową ekspresją artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra świateł i cienia za pomocą 4 kolorów oddaje złożoność jakie chciał osiągnąć artysta oraz prosty panton barw które budują całą narrację. Dużą wagę można zaobserwować w detalu, ponieważ jest to grafika wektorowa możemy dostrzec nietypowy detal włosów oraz światło, które rozświetla końcówki. Obraz przedstawia piękno kobiety, oraz drzemiącą magię jej temperamentu. Zimne barwy oddają chłód który symbolizuje żal między uczuciem wynikającym z rozstania.",
            date: "2018",
            popularity: 63,
            viewed: false,
            liked: false
        });
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQWlCN0M7SUE4SEk7UUEzSFEsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsVUFBVTtZQUNqQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw2aUJBQTZpQjtZQUMxakIsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsZ0dBQWdHO1lBQ3ZHLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsTUFBTSxFQUFFLHlCQUF5QjtZQUNqQyxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNHZCQUE0dkI7WUFDendCLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2YsRUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDRFQUE0RTtZQUNuRixLQUFLLEVBQUUsUUFBUTtZQUNmLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSx5aEJBQXloQjtZQUN0aUIsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUscUZB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SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBZTtRQUN0QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxJQUFlO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTyxnQ0FBVSxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFyTFEsV0FBVztRQUR2QixnRUFBVSxFQUFFOztPQUNBLFdBQVcsQ0FzTHZCO0lBQUQsa0JBQUM7Q0FBQTtBQXRMdUIiLCJmaWxlIjoiYnVuZGxlLmY4M2YzZWU1OTZjNjZjYmU0ZmM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XG4gICAgYXV0aG9yOiBzdHJpbmc7XG4gICAgY2FwdGlvbj86IHN0cmluZztcbiAgICBkYXRlOiBEYXRlIHwgc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGxpa2VkPzogYm9vbGVhbjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIHBvcHVsYXJpdHk/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB2aWV3ZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBfaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8SURhdGFJdGVtPj47XG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qYWNlay1tYWxpbm93c2tpLXRvc2thbmlhLXZhbC1kLW9yY2lhLTEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlRvc2thbmlhXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSmFjZWsgTWFsaW5vd3NraVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPYnJheiBqZXN0IHd5asSFdGtvd8SFIGVrc3ByZXNqxIUgYXJ0eXN0eS4gUHJhY2EgamVzdCBkZWR5a293YW55bSBwb3J0cmV0ZW0gQ21pbGkgQ29iZWxsby4gQWJzdHJha2N5am5hIGdyYSDFm3dpYXRlxYIgaSBjaWVuaWEgemEgcG9tb2PEhSA0IGtvbG9yw7N3IG9kZGFqZSB6xYJvxbxvbm/Fm8SHIGpha2llIGNoY2lhxYIgb3NpxIVnbsSFxIcgYXJ0eXN0YSBvcmF6IHByb3N0eSBwYW50b24gYmFydyBrdMOzcmUgYnVkdWrEhSBjYcWCxIUgbmFycmFjasSZLiBEdcW8xIUgd2FnxJkgbW/FvG5hIHphb2JzZXJ3b3dhxIcgdyBkZXRhbHUsIHBvbmlld2HFvCBqZXN0IHRvIGdyYWZpa2Egd2VrdG9yb3dhIG1vxbxlbXkgZG9zdHJ6ZWMgbmlldHlwb3d5IGRldGFsIHfFgm9zw7N3IG9yYXogxZt3aWF0xYJvLCBrdMOzcmUgcm96xZt3aWV0bGEga2/FhGPDs3draS4gT2JyYXogcHJ6ZWRzdGF3aWEgcGnEmWtubyBrb2JpZXR5LCBvcmF6IGRyemVtacSFY8SFIG1hZ2nEmSBqZWogdGVtcGVyYW1lbnR1LiBaaW1uZSBiYXJ3eSBvZGRhasSFIGNoxYLDs2Qga3TDs3J5IHN5bWJvbGl6dWplIMW8YWwgbWnEmWR6eSB1Y3p1Y2llbSB3eW5pa2FqxIVjeW0geiByb3pzdGFuaWEuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMThcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDgyLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL2pvYW5uYS1zdWxlay1tYWxpbm93c2thLWNocm9tb3NmZXJhLWlpaS1ha3J5bC5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkNocm9tb3NmZXJhIElJSVwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIkpvYW5uYSBTdcWCZWstTWFsaW5vd3NrYVwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDeWtsIGFic3RyYWtjamkg4oCeQ2hyb21vc2ZlcnnigJ0gaW5zcGlyb3dhbnkgamVzdCBzxYJvxYRjZW0sIHByemVzdHJ6ZW5pxIUga29zbWljem7EhSBvcmF6IHpqYXdpc2thbWkgbWV0ZW9yb2xvZ2ljem55bWkuIEN6YXJuZSBwYXN5IHN1Z2VydWrEhSBvZ3JhbmljemVuaWUgbWllc3prYcWEY2EgemllbXNraWVnbywga3TDs3J5IG5pZSBtb8W8ZSB3em5pZcWbxIcgc2nEmSBwb25hZCB0byBjbyB3aWR6aSB6IGRvxYJ1LiBCYXJ3bnkgxZtyb2RlayB6IHN5bWJvbGljem55bSBzxYJvxYRjZW0gbHViIHBsYW5ldMSFIHptaWVuaWEgZm9ybXkgb3JheiBrb2xvcnkgdyB6YWxlxbxub8WbY2kgb2QgcG9yeSBkbmlhLiBPYnJhenkgYnVkb3dhbmUgc8SFIHphIHBvbW9jxIUgcMWCeW5ueWNoIGxpbmlpLCBwcnplbmlrYWrEhWN5Y2ggc2nEmSBuYSBwxYJhc3pjennFum5pZS4gQ3rEmXN0byB1a8WCYWR5IHByemVzdHJ6ZW5uZSByb3rFm3dpZXRsYW5lIHPEhSDFm3dpYXTFgmVtIHBhZGFqxIVjeW0geiBuaWVvY3p5d2lzdGVnbyDFunLDs2TFgmEuIFV3eWRhdG5pYWrEhSBzacSZIGFieSB6YSBjaHdpbMSZIHphcGHFm8SHIHNpxJkgdyBjemVyxYQuIFBvd2llcnpjaG5pYSBvYnJhesOzdyBwb3ByemV6IHdpZWxva3JvdG5lLCBwcmVjeXp5am5lIG5ha8WCYWRhbmllIHDFgmFza2llaiBwbGFteSwgemRhamUgc2nEmSBiecSHIGlkZWFsbmllIGfFgmFka2EuIERlbGlrYXRuZSBsaW5pZSBwb2RrcmXFm2xhasSFIGtydWNob8WbxIcgemphd2lza2EgYSBqZWRub2N6ZcWbbmllIHPEhSDFgsSFY3puaWtpZW0gcGFzYSBiYXJ3IHogY3phcm7EhSBwcnplc3RyemVuacSFLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE2XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA0MSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9wYXdlbC1nb3Jza2ktc2xpbWFrLWFrcnlsLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwixZpsaW1ha1wiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIlBhd2XFgiBHw7Nyc2tpXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpuYSBwcnp5cm9kYSwgcGlla25vIG90YWN6YWrEhWNlZ28gbmFzIMWbd2lhdGEsIHdzcMOzxYJpc3RuaWVuaWUuIEFrc3RyYWtjeWpueSwgcGXFgmVuIGtvbG9yw7N3IG9icmF6IGFrcnlsb3d5IG5hIHDFgsOzdG5pZSBsbmlhbnltIHd5a29uYW55IHcgdGVjaG5pY2UgZW5rYXVzdHlraS4gRW5rYXVzdHlrYSB0byB0ZWNobmlrYSBwcmFjb2NoxYJvbm5hLCBrdMOzcmEgd3ltYWdhIG9kIHR3w7NyY3kgbmFrxYJhZGFuaWEgZmFyYiBuYSBnb3LEhWNvIHcgc3BvaXdpZSB3b3NrdSBwc3pjemVsZWdvIGx1YiBvbGVqdS4gRHppxJlraSB0YWtpbSB6YWJpZWdvbSBwb3p3YWxhIHV6eXNrYcSHIHRyd2HFgmUgaSBvZHBvcm5lIG5hIHdpbGdvxIcgcmV6dWx0YXR5LCBhIHRha8W8ZSB6YWNob3dhxIcgZ8WCxJliacSZIGkgYmxhc2sgemFzdG9zb3dhbmVqIHBhbGV0eSBrb2xvcnlzdHljem5lai4gUHJhY2EgZG9kYSBjaGF0YWt0ZXJ1IHByemVzdHJvbm55bSB3bmV0cnpvbS4gT2JyYXogc3ByYXdkemkgc2nEmSB3IGJpdXJ6ZSBvcmF6IHcgZHXFvHltLCBqYXNueW0gc2Fsb25pZS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNVwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNTUsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtcG9yYWRhLWRhbWEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkRhbWFcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJQYXdlxYIgUG9yYWRhXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IFxcXCJkYW1hXFxcIiB6b3N0YcWCIG5hbWFsb3dhbnkgbmEgcMWCw7N0bmllIDNEIC0gZ3J1YnN6YSByYW1hLCBvIHd5bWlhcmFjaCA1MHg1MGNtLCBmYXJiYW1pIG9sZWpueW1pLiBNYWxvd2lkxYJvIHByemVkc3Rhd2lhIGtvYmlldMSZIHoga2xhc8SFIG5hIHRsZSB6IGJvZ2F0xIUgb3JuYW1lbnR5a8SFLiBCYXJkem8ga29sb3Jvd3ksIHpidWRvd2FueSB6IHByb3N0eWNoIGZvcm0gaSBrc3p0YcWCdMOzdy4gS2xpbWF0ZW0gbGVra28gbmF3acSFenVqZSBkbyBkYXduaWVqc3p5Y2ggZXBvayBsdWIgZG8gZGFteSB6IHRhbGlpIGthcnQuIFBvcnRyZXQgaWRlYWxuaWUgemFncmEgdyBrYcW8ZHltIHduxJl0cnp1IGFsZSBpIHLDs3duaWXFvCBwb2RrcmXFm2xpIGthcmNpYW5lIHVwb2RvYmFuaWEsIGhvYmJ5IGhpc3Rvcnljem5lIGx1YiByb3pyeXdrb3d5IGNoYXJha3RlciBvc29ieSBrdMOzcmEgZ28gemFrdXBpLiBTeWdub3dhbnkgeiBwcnpvZHUgbmF6d2lza2llbSBpIGRhdMSFIHBvd3N0YW5pYS4gV3lrb25hbnkgdyBwb2plZHluY3p5bSBlZ3plbXBsYXJ6dSBjbyB6d2nEmWtzemEgamVnbyB3YXJ0b8WbxIcga29sZWtjam9uZXJza8SFLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE4XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA2MyxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9pemEta29zdGl1a293LXNsYWR5LTQtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIsWabGFkeSA0XCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSXphIEtvc3RpdWtvd1wiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBYnN0cmFrY3lqbnkgb2JyYXogbmFtYWxvd2FueSB3IHRlY2huaWNlIG9sZWpuZWouIHByYWNhIG5pZSB3eW1hZ2EgcmFteSAsIGtyYXfEmWR6aWUgcMWCw7N0bmEgc8SFIHphbWFsb3dhbmUuIFByYWNhIGplc3QgemFiZXpwaWVjem9uYSB3ZXJuaWtzZW0gc2F0eW5vd3ltLiBvYnJheiBqZXN0IHN5Z25vd2FueSB6IHR5xYJ1IG9icmF6IGplc3QgY3rEmcWbY2nEhSBjeWtsdSBtYWxhcnNraWVnbyBcXFwiIMWabGFkeVxcXCIsIHBvd3N0YcWCZWdvIHcgMjAxNCByb2t1LiBQcmFjYSBtb8W8ZSBiecSHIGRvYnJ5bSBwcmV6ZW50ZW0gbnAuIG5hIMWbbHViLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE0XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiAxNSxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2kucGluaW1nLmNvbS83MzZ4LzYzLzdhL2E5LzYzN2FhOTUzYWE5MWNkMGViM2ExYjM1YWQwNjViMmUxLS1yb21hbnRpY2lzbS12aXRhbWluLmpwZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiTyDFm21pZXJjaSBzxIVzaWFkYVwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIlpiaWduaWV3IFJvZ2Fsc2tpXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJSYXN0ZXIgZ2FsbGVyeVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogemFpbnNwaXJvd2FueSBhdXRlbnR5Y3pueW0gemRhcnplbmllbSAtIMWbbWllcmNpxIUgc8SFc2lhZGEgbWFsYXJ6YS4gQ2lhxYJvIHptYXLFgmVnbyB6b3N0YcWCbyBvZG5hbGV6aW9uZSBkb3BpZXJvIHBvIGtpbGt1IGRuaWFjaCBvZCB6Z29udSB3IG1pZXN6a2FuaXUsIGt0w7NyZSBwcnp5bGVnYcWCbyBkbyBwcmFjb3duaSBpIG1pZXN6a2FuaWEgUm9nYWxza2llZ28uXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTdcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDIxLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vaW1nMS5vbmViaWQucGwvaW1nLzIxNi8zMzg4OV8xYi5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlBvc3RlciBmb3IgXFxcIkpBWlogSmFtYm9yZWUgNzBcXFwiXCIsXG4gICAgICAgICAgICBhdXRob3I6IFwiSmFuIE3Fgm9kb8W8ZW5pZWNcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIk9zdG95YVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogXFxcImRhbWFcXFwiIHpvc3RhxYIgbmFtYWxvd2FueSBuYSBwxYLDs3RuaWUgM0QgLSBncnVic3phIHJhbWEsIG8gd3ltaWFyYWNoIDUweDUwY20sIGZhcmJhbWkgb2xlam55bWkuIE1hbG93aWTFgm8gcHJ6ZWRzdGF3aWEga29iaWV0xJkgeiBrbGFzxIUgbmEgdGxlIHogYm9nYXTEhSBvcm5hbWVudHlrxIUuIEJhcmR6byBrb2xvcm93eSwgemJ1ZG93YW55IHogcHJvc3R5Y2ggZm9ybSBpIGtzenRhxYJ0w7N3LiBLbGltYXRlbSBsZWtrbyBuYXdpxIV6dWplIGRvIGRhd25pZWpzenljaCBlcG9rIGx1YiBkbyBkYW15IHogdGFsaWkga2FydC4gUG9ydHJldCBpZGVhbG5pZSB6YWdyYSB3IGthxbxkeW0gd27EmXRyenUgYWxlIGkgcsOzd25pZcW8IHBvZGtyZcWbbGkga2FyY2lhbmUgdXBvZG9iYW5pYSwgaG9iYnkgaGlzdG9yeWN6bmUgbHViIHJvenJ5d2tvd3kgY2hhcmFrdGVyIG9zb2J5IGt0w7NyYSBnbyB6YWt1cGkuIFN5Z25vd2FueSB6IHByem9kdSBuYXp3aXNraWVtIGkgZGF0xIUgcG93c3RhbmlhLiBXeWtvbmFueSB3IHBvamVkeW5jenltIGVnemVtcGxhcnp1IGNvIHp3acSZa3N6YSBqZWdvIHdhcnRvxZvEhyBrb2xla2Nqb25lcnNrxIUuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjE5NzBcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDk4LFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vdXBsb2FkczMud2lraWFydC5vcmcvMDAxNDUvaW1hZ2VzL3dpbGhlbG0tc2FzbmFsL3Nob2FoLWZvcmVzdC0yMDAzLmpwZyFMYXJnZS5qcGdcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkZvcmVzdFwiLFxuICAgICAgICAgICAgYXV0aG9yOiBcIldpbGhlbG0gU2FzbmFsXCIsXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJXaGl0ZWNoYXBlbCBHYWxsZXJ5XCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPYnJheiBcXFwiZGFtYVxcXCIgem9zdGHFgiBuYW1hbG93YW55IG5hIHDFgsOzdG5pZSAzRCAtIGdydWJzemEgcmFtYSwgbyB3eW1pYXJhY2ggNTB4NTBjbSwgZmFyYmFtaSBvbGVqbnltaS4gTWFsb3dpZMWCbyBwcnplZHN0YXdpYSBrb2JpZXTEmSB6IGtsYXPEhSBuYSB0bGUgeiBib2dhdMSFIG9ybmFtZW50eWvEhS4gQmFyZHpvIGtvbG9yb3d5LCB6YnVkb3dhbnkgeiBwcm9zdHljaCBmb3JtIGkga3N6dGHFgnTDs3cuIEtsaW1hdGVtIGxla2tvIG5hd2nEhXp1amUgZG8gZGF3bmllanN6eWNoIGVwb2sgbHViIGRvIGRhbXkgeiB0YWxpaSBrYXJ0LiBQb3J0cmV0IGlkZWFsbmllIHphZ3JhIHcga2HFvGR5bSB3bsSZdHJ6dSBhbGUgaSByw7N3bmllxbwgcG9ka3JlxZtsaSBrYXJjaWFuZSB1cG9kb2JhbmlhLCBob2JieSBoaXN0b3J5Y3puZSBsdWIgcm96cnl3a293eSBjaGFyYWt0ZXIgb3NvYnkga3TDs3JhIGdvIHpha3VwaS4gU3lnbm93YW55IHogcHJ6b2R1IG5hendpc2tpZW0gaSBkYXTEhSBwb3dzdGFuaWEuIFd5a29uYW55IHcgcG9qZWR5bmN6eW0gZWd6ZW1wbGFyenUgY28gendpxJlrc3phIGplZ28gd2FydG/Fm8SHIGtvbGVrY2pvbmVyc2vEhS5cIixcbiAgICAgICAgICAgIGRhdGU6IFwiMjAwMlwiLFxuICAgICAgICAgICAgcG9wdWxhcml0eTogNDUsXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9kNXd0NzBkNGdubTF0LmNsb3VkZnJvbnQubmV0L21lZGlhL2Etcy9hcnRpY2xlcy8yMjQzLTgxODE3NTgxOTQzOS93aWxoZWxtLXNhc25hbC05MDB4NDUwLnBuZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwiQmF0aGVycyBhdCBBc25pZXJlcyxcIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJXaWxoZWxtIFNhc25hbFwiLFxuICAgICAgICAgICAgbG9jYXRpb246IFwiRm9rc2FsIEdhbGxlcnkgRm91bmRhdGlvbiBWYXJzb3ZpZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogXFxcImRhbWFcXFwiIHpvc3RhxYIgbmFtYWxvd2FueSBuYSBwxYLDs3RuaWUgM0QgLSBncnVic3phIHJhbWEsIG8gd3ltaWFyYWNoIDUweDUwY20sIGZhcmJhbWkgb2xlam55bWkuIE1hbG93aWTFgm8gcHJ6ZWRzdGF3aWEga29iaWV0xJkgeiBrbGFzxIUgbmEgdGxlIHogYm9nYXTEhSBvcm5hbWVudHlrxIUuIEJhcmR6byBrb2xvcm93eSwgemJ1ZG93YW55IHogcHJvc3R5Y2ggZm9ybSBpIGtzenRhxYJ0w7N3LiBLbGltYXRlbSBsZWtrbyBuYXdpxIV6dWplIGRvIGRhd25pZWpzenljaCBlcG9rIGx1YiBkbyBkYW15IHogdGFsaWkga2FydC4gUG9ydHJldCBpZGVhbG5pZSB6YWdyYSB3IGthxbxkeW0gd27EmXRyenUgYWxlIGkgcsOzd25pZcW8IHBvZGtyZcWbbGkga2FyY2lhbmUgdXBvZG9iYW5pYSwgaG9iYnkgaGlzdG9yeWN6bmUgbHViIHJvenJ5d2tvd3kgY2hhcmFrdGVyIG9zb2J5IGt0w7NyYSBnbyB6YWt1cGkuIFN5Z25vd2FueSB6IHByem9kdSBuYXp3aXNraWVtIGkgZGF0xIUgcG93c3RhbmlhLiBXeWtvbmFueSB3IHBvamVkeW5jenltIGVnemVtcGxhcnp1IGNvIHp3acSZa3N6YSBqZWdvIHdhcnRvxZvEhyBrb2xla2Nqb25lcnNrxIUuXCIsXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTBcIixcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDgxLFxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9hZGFtLXR3YXJkb3dza2ktY2FtaWxhLWdyYWZpa2EuanBnXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBwc2l1bSBkYXMgaXN0IGRpZSBGcmFnZSwgcGFzc3QgZGllIGhpZXIgcmVpbj9cIixcbiAgICAgICAgICAgIGF1dGhvcjogXCJBZGFtIFR3YXJkb3dza2lcIixcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogamVzdCB3eWrEhXRrb3fEhSBla3NwcmVzasSFIGFydHlzdHkuIFByYWNhIGplc3QgZGVkeWtvd2FueW0gcG9ydHJldGVtIENtaWxpIENvYmVsbG8uIEFic3RyYWtjeWpuYSBncmEgxZt3aWF0ZcWCIGkgY2llbmlhIHphIHBvbW9jxIUgNCBrb2xvcsOzdyBvZGRhamUgesWCb8W8b25vxZvEhyBqYWtpZSBjaGNpYcWCIG9zacSFZ27EhcSHIGFydHlzdGEgb3JheiBwcm9zdHkgcGFudG9uIGJhcncga3TDs3JlIGJ1ZHVqxIUgY2HFgsSFIG5hcnJhY2rEmS4gRHXFvMSFIHdhZ8SZIG1vxbxuYSB6YW9ic2Vyd293YcSHIHcgZGV0YWx1LCBwb25pZXdhxbwgamVzdCB0byBncmFmaWthIHdla3Rvcm93YSBtb8W8ZW15IGRvc3RyemVjIG5pZXR5cG93eSBkZXRhbCB3xYJvc8OzdyBvcmF6IMWbd2lhdMWCbywga3TDs3JlIHJvesWbd2lldGxhIGtvxYRjw7N3a2kuIE9icmF6IHByemVkc3Rhd2lhIHBpxJlrbm8ga29iaWV0eSwgb3JheiBkcnplbWnEhWPEhSBtYWdpxJkgamVqIHRlbXBlcmFtZW50dS4gWmltbmUgYmFyd3kgb2RkYWrEhSBjaMWCw7NkIGt0w7NyeSBzeW1ib2xpenVqZSDFvGFsIG1pxJlkenkgdWN6dWNpZW0gd3luaWthasSFY3ltIHogcm96c3RhbmlhLlwiLFxuICAgICAgICAgICAgZGF0ZTogXCIyMDE4XCIsXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA2MyxcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5faXRlbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMoKSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJRGF0YUl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmluZCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWQgPT0gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEluZGV4KGl0ZW06IElEYXRhSXRlbSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCkuZmluZEluZGV4KChlbGVtZW50KSA9PiBlbGVtZW50LmlkID09PSBpdGVtLmlkKTtcbiAgICB9XG5cbiAgICBnZXRVbnNlZW5JdGVtcyQoKTogT2JzZXJ2YWJsZTxBcnJheTxJRGF0YUl0ZW0+PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuYXNPYnNlcnZhYmxlKClcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpKSk7XG4gICAgfVxuXG4gICAgZ2V0VW5zZWVuSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gIWl0ZW0udmlld2VkKTtcbiAgICB9XG5cbiAgICBnZXRMaWtlZEl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5hc09ic2VydmFibGUoKVxuICAgICAgICAgICAgLnBpcGUobWFwKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4gaXRlbXMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQgPT09IHRydWUpKSk7XG4gICAgfVxuXG4gICAgZ2V0TGlrZWRJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkKTtcbiAgICB9XG5cbiAgICB1cGRhdGVJdGVtKGl0ZW06IElEYXRhSXRlbSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgaXRlbXNbdGhpcy5nZXRJbmRleChpdGVtKV0gPSBpdGVtO1xuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XG4gICAgfVxuXG4gICAgZGlzbGlrZShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcbiAgICAgICAgaXRlbS5saWtlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcbiAgICAgICAgaXRlbXNbdGhpcy5nZXRJbmRleChpdGVtKV0gPSBpdGVtO1xuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XG4gICAgfVxuXG4gICAgcmVzZXRJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQodGhpcy5jbG9uZUl0ZW1zKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xvbmVJdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5faXRlbXMpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9