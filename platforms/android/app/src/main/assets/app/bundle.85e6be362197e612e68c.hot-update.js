webpackHotUpdate("bundle",{

/***/ "./core/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/operators/index.js");



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
            author: "TeamViewer AG",
            location: "2 - 5",
            description: "Obraz jest wyjątkową ekspresją artysty. Praca jest dedykowanym portretem Cmili Cobello. Abstrakcyjna gra świateł i cienia za pomocą 4 kolorów oddaje złożoność jakie chciał osiągnąć artysta oraz prosty panton barw które budują całą narrację. Dużą wagę można zaobserwować w detalu, ponieważ jest to grafika wektorowa możemy dostrzec nietypowy detal włosów oraz światło, które rozświetla końcówki. Obraz przedstawia piękno kobiety, oraz drzemiącą magię jej temperamentu. Zimne barwy oddają chłód który symbolizuje żal między uczuciem wynikającym z rozstania.",
            date: "Free version available",
            popularity: 82,
            viewed: false,
            liked: true
        }, {
            id: 2,
            image: "https://gesamtschulefroendenberg.de/wp-content/uploads/2015/04/moodle.jpg",
            title: "Moodle",
            author: " Martin Dougiamas",
            location: "2 - 200",
            description: "Those using the Moodle platform regularly seem to get better <br> grades than those who rarely or never use it.",
            date: "Free version available",
            popularity: 82,
            viewed: false,
            liked: true
        });
        // console.log(toolsJson);
        this._items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems());
        this._tools$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cloneItems1());
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQWlCN0M7SUFrR0k7UUEvRlEsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZpQkFBNmlCO1lBQzFqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSxnR0FBZ0c7WUFDdkcsS0FBSyxFQUFFLHdGQUF3RjtZQUMvRixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0dkJBQTR2QjtZQUN6d0IsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsNEVBQTRFO1lBQ25GLEtBQUssRUFBRSx3RkFBd0Y7WUFDL0YsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUseWhCQUF5aEI7WUFDdGlCLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2YsRUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLHFGQUFxRjtZQUM1RixLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZqQkFBNmpCO1lBQzFrQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSx5RkFBeUY7WUFDaEcsS0FBSyxFQUFFLHdGQUF3RjtZQUMvRixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyU0FBMlM7WUFDeFQsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUVKLENBQUM7UUFJTSxXQUFNLEdBQUcsSUFBSSxLQUFLLENBQ3RCO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsdUdBQXVHO1lBQzlHLEtBQUssRUFBRSxhQUFhO1lBQ3BCLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSw2aUJBQTZpQjtZQUMxakIsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLElBQUk7U0FDZCxFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsMkVBQTJFO1lBQ2xGLEtBQUssRUFBRSxRQUFRO1lBQ2YsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsaUhBQWlIO1lBQzlILElBQUksRUFBRSx3QkFBd0I7WUFDOUIsVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FHSixDQUFDO1FBR0UsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxvREFBZSxDQUFtQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksb0RBQWUsQ0FBbUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDckMsT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFPLElBQUssY0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO2FBQzdCLElBQUksQ0FBQywwREFBRyxDQUFDLFVBQUMsS0FBdUIsSUFBSyxZQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBZSxJQUFLLFFBQUMsSUFBSSxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELG9DQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBZSxJQUFLLFFBQUMsSUFBSSxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNJLHlEQUF5RDtRQUN6RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO2FBQzdCLElBQUksQ0FBQywwREFBRyxDQUFDLFVBQUMsS0FBdUIsSUFBSyxZQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBZSxJQUFLLFdBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFuQixDQUFtQixDQUFDLEVBQXRELENBQXNELENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQWUsSUFBSyxXQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0kseURBQXlEO1FBQ3pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7YUFDN0IsSUFBSSxDQUFDLDBEQUFHLENBQUMsVUFBQyxLQUF1QixJQUFLLFlBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFlLElBQUssV0FBSSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQW5CLENBQW1CLENBQUMsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBZSxJQUFLLFdBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxJQUFlO1FBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLElBQWU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVPLGlDQUFXLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNPLGdDQUFVLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQXpLUSxXQUFXO1FBRHZCLGdFQUFVLEVBQUU7O09BQ0EsV0FBVyxDQTBLdkI7SUFBRCxrQkFBQztDQUFBO0FBMUt1QiIsImZpbGUiOiJidW5kbGUuODVlNmJlMzYyMTk3ZTYxMmU2OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YUl0ZW0ge1xyXG4gICAgYXV0aG9yPzogc3RyaW5nO1xyXG4gICAgY2FwdGlvbj86IHN0cmluZztcclxuICAgIGRhdGU/OiBEYXRlIHwgc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBsaWtlZD86IGJvb2xlYW47XHJcbiAgICBsb2NhdGlvbj86IHN0cmluZztcclxuICAgIHBvcHVsYXJpdHk/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxuICAgIHZpZXdlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9pdGVtcyQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+PjtcclxuICAgIHByaXZhdGUgX2l0ZW1zID0gbmV3IEFycmF5PElEYXRhSXRlbT4oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvamFjZWstbWFsaW5vd3NraS10b3NrYW5pYS12YWwtZC1vcmNpYS0xLW1hbGFyc3R3by1vbGVqbmUuanBnXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcjogXCJNZWhyIEVya2zDpHJ1bmdcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IGplc3Qgd3lqxIV0a293xIUgZWtzcHJlc2rEhSBhcnR5c3R5LiBQcmFjYSBqZXN0IGRlZHlrb3dhbnltIHBvcnRyZXRlbSBDbWlsaSBDb2JlbGxvLiBBYnN0cmFrY3lqbmEgZ3JhIMWbd2lhdGXFgiBpIGNpZW5pYSB6YSBwb21vY8SFIDQga29sb3LDs3cgb2RkYWplIHrFgm/FvG9ub8WbxIcgamFraWUgY2hjaWHFgiBvc2nEhWduxIXEhyBhcnR5c3RhIG9yYXogcHJvc3R5IHBhbnRvbiBiYXJ3IGt0w7NyZSBidWR1asSFIGNhxYLEhSBuYXJyYWNqxJkuIER1xbzEhSB3YWfEmSBtb8W8bmEgemFvYnNlcndvd2HEhyB3IGRldGFsdSwgcG9uaWV3YcW8IGplc3QgdG8gZ3JhZmlrYSB3ZWt0b3Jvd2EgbW/FvGVteSBkb3N0cnplYyBuaWV0eXBvd3kgZGV0YWwgd8WCb3PDs3cgb3JheiDFm3dpYXTFgm8sIGt0w7NyZSByb3rFm3dpZXRsYSBrb8WEY8Ozd2tpLiBPYnJheiBwcnplZHN0YXdpYSBwacSZa25vIGtvYmlldHksIG9yYXogZHJ6ZW1pxIVjxIUgbWFnacSZIGplaiB0ZW1wZXJhbWVudHUuIFppbW5lIGJhcnd5IG9kZGFqxIUgY2jFgsOzZCBrdMOzcnkgc3ltYm9saXp1amUgxbxhbCBtacSZZHp5IHVjenVjaWVtIHd5bmlrYWrEhWN5bSB6IHJvenN0YW5pYS5cIixcclxuICAgICAgICAgICAgZGF0ZTogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDgyLFxyXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL2pvYW5uYS1zdWxlay1tYWxpbm93c2thLWNocm9tb3NmZXJhLWlpaS1ha3J5bC5qcGdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIk1laHIgRXJrbMOkcnVuZ1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ3lrbCBhYnN0cmFrY2ppIOKAnkNocm9tb3NmZXJ54oCdIGluc3Bpcm93YW55IGplc3Qgc8WCb8WEY2VtLCBwcnplc3RyemVuacSFIGtvc21pY3puxIUgb3JheiB6amF3aXNrYW1pIG1ldGVvcm9sb2dpY3pueW1pLiBDemFybmUgcGFzeSBzdWdlcnVqxIUgb2dyYW5pY3plbmllIG1pZXN6a2HFhGNhIHppZW1za2llZ28sIGt0w7NyeSBuaWUgbW/FvGUgd3puaWXFm8SHIHNpxJkgcG9uYWQgdG8gY28gd2lkemkgeiBkb8WCdS4gQmFyd255IMWbcm9kZWsgeiBzeW1ib2xpY3pueW0gc8WCb8WEY2VtIGx1YiBwbGFuZXTEhSB6bWllbmlhIGZvcm15IG9yYXoga29sb3J5IHcgemFsZcW8bm/Fm2NpIG9kIHBvcnkgZG5pYS4gT2JyYXp5IGJ1ZG93YW5lIHPEhSB6YSBwb21vY8SFIHDFgnlubnljaCBsaW5paSwgcHJ6ZW5pa2FqxIVjeWNoIHNpxJkgbmEgcMWCYXN6Y3p5xbpuaWUuIEN6xJlzdG8gdWvFgmFkeSBwcnplc3RyemVubmUgcm96xZt3aWV0bGFuZSBzxIUgxZt3aWF0xYJlbSBwYWRhasSFY3ltIHogbmllb2N6eXdpc3RlZ28gxbpyw7NkxYJhLiBVd3lkYXRuaWFqxIUgc2nEmSBhYnkgemEgY2h3aWzEmSB6YXBhxZvEhyBzacSZIHcgY3plcsWELiBQb3dpZXJ6Y2huaWEgb2JyYXrDs3cgcG9wcnpleiB3aWVsb2tyb3RuZSwgcHJlY3l6eWpuZSBuYWvFgmFkYW5pZSBwxYJhc2tpZWogcGxhbXksIHpkYWplIHNpxJkgYnnEhyBpZGVhbG5pZSBnxYJhZGthLiBEZWxpa2F0bmUgbGluaWUgcG9ka3JlxZtsYWrEhSBrcnVjaG/Fm8SHIHpqYXdpc2thIGEgamVkbm9jemXFm25pZSBzxIUgxYLEhWN6bmlraWVtIHBhc2EgYmFydyB6IGN6YXJuxIUgcHJ6ZXN0cnplbmnEhS5cIixcclxuICAgICAgICAgICAgZGF0ZTogXCIyMDE2XCIsXHJcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDQxLFxyXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL3Bhd2VsLWdvcnNraS1zbGltYWstYWtyeWwuanBnXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcjogXCJNZWhyIEVya2zDpHJ1bmdcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpuYSBwcnp5cm9kYSwgcGlla25vIG90YWN6YWrEhWNlZ28gbmFzIMWbd2lhdGEsIHdzcMOzxYJpc3RuaWVuaWUuIEFrc3RyYWtjeWpueSwgcGXFgmVuIGtvbG9yw7N3IG9icmF6IGFrcnlsb3d5IG5hIHDFgsOzdG5pZSBsbmlhbnltIHd5a29uYW55IHcgdGVjaG5pY2UgZW5rYXVzdHlraS4gRW5rYXVzdHlrYSB0byB0ZWNobmlrYSBwcmFjb2NoxYJvbm5hLCBrdMOzcmEgd3ltYWdhIG9kIHR3w7NyY3kgbmFrxYJhZGFuaWEgZmFyYiBuYSBnb3LEhWNvIHcgc3BvaXdpZSB3b3NrdSBwc3pjemVsZWdvIGx1YiBvbGVqdS4gRHppxJlraSB0YWtpbSB6YWJpZWdvbSBwb3p3YWxhIHV6eXNrYcSHIHRyd2HFgmUgaSBvZHBvcm5lIG5hIHdpbGdvxIcgcmV6dWx0YXR5LCBhIHRha8W8ZSB6YWNob3dhxIcgZ8WCxJliacSZIGkgYmxhc2sgemFzdG9zb3dhbmVqIHBhbGV0eSBrb2xvcnlzdHljem5lai4gUHJhY2EgZG9kYSBjaGF0YWt0ZXJ1IHByemVzdHJvbm55bSB3bmV0cnpvbS4gT2JyYXogc3ByYXdkemkgc2nEmSB3IGJpdXJ6ZSBvcmF6IHcgZHXFvHltLCBqYXNueW0gc2Fsb25pZS5cIixcclxuICAgICAgICAgICAgZGF0ZTogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDU1LFxyXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vY2RuLmdhbGxlcnlzdG9yZS5wbC93b3Jrcy8vdzc3Ny1oNzAwL3Bhd2VsLXBvcmFkYS1kYW1hLW1hbGFyc3R3by1vbGVqbmUuanBnXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcjogXCJNZWhyIEVya2zDpHJ1bmdcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9icmF6IFxcXCJkYW1hXFxcIiB6b3N0YcWCIG5hbWFsb3dhbnkgbmEgcMWCw7N0bmllIDNEIC0gZ3J1YnN6YSByYW1hLCBvIHd5bWlhcmFjaCA1MHg1MGNtLCBmYXJiYW1pIG9sZWpueW1pLiBNYWxvd2lkxYJvIHByemVkc3Rhd2lhIGtvYmlldMSZIHoga2xhc8SFIG5hIHRsZSB6IGJvZ2F0xIUgb3JuYW1lbnR5a8SFLiBCYXJkem8ga29sb3Jvd3ksIHpidWRvd2FueSB6IHByb3N0eWNoIGZvcm0gaSBrc3p0YcWCdMOzdy4gS2xpbWF0ZW0gbGVra28gbmF3acSFenVqZSBkbyBkYXduaWVqc3p5Y2ggZXBvayBsdWIgZG8gZGFteSB6IHRhbGlpIGthcnQuIFBvcnRyZXQgaWRlYWxuaWUgemFncmEgdyBrYcW8ZHltIHduxJl0cnp1IGFsZSBpIHLDs3duaWXFvCBwb2RrcmXFm2xpIGthcmNpYW5lIHVwb2RvYmFuaWEsIGhvYmJ5IGhpc3Rvcnljem5lIGx1YiByb3pyeXdrb3d5IGNoYXJha3RlciBvc29ieSBrdMOzcmEgZ28gemFrdXBpLiBTeWdub3dhbnkgeiBwcnpvZHUgbmF6d2lza2llbSBpIGRhdMSFIHBvd3N0YW5pYS4gV3lrb25hbnkgdyBwb2plZHluY3p5bSBlZ3plbXBsYXJ6dSBjbyB6d2nEmWtzemEgamVnbyB3YXJ0b8WbxIcga29sZWtjam9uZXJza8SFLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMThcIixcclxuICAgICAgICAgICAgcG9wdWxhcml0eTogNjMsXHJcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvaXphLWtvc3RpdWtvdy1zbGFkeS00LW1hbGFyc3R3by1vbGVqbmUuanBnXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yXCIsXHJcbiAgICAgICAgICAgIGF1dGhvcjogXCJNZWhyIEVya2zDpHJ1bmdcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiR2FsbGVyeXN0b3JlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFic3RyYWtjeWpueSBvYnJheiBuYW1hbG93YW55IHcgdGVjaG5pY2Ugb2xlam5lai4gcHJhY2EgbmllIHd5bWFnYSByYW15ICwga3Jhd8SZZHppZSBwxYLDs3RuYSBzxIUgemFtYWxvd2FuZS4gUHJhY2EgamVzdCB6YWJlenBpZWN6b25hIHdlcm5pa3NlbSBzYXR5bm93eW0uIG9icmF6IGplc3Qgc3lnbm93YW55IHogdHnFgnUgb2JyYXogamVzdCBjesSZxZtjacSFIGN5a2x1IG1hbGFyc2tpZWdvIFxcXCIgxZpsYWR5XFxcIiwgcG93c3RhxYJlZ28gdyAyMDE0IHJva3UuIFByYWNhIG1vxbxlIGJ5xIcgZG9icnltIHByZXplbnRlbSBucC4gbmEgxZtsdWIuXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiAxNSxcclxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICk7XHJcblxyXG4gICAgXHJcbiAgICBwcml2YXRlIF90b29scyQ6IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+PjtcclxuICAgIHByaXZhdGUgX3Rvb2xzID0gbmV3IEFycmF5PElEYXRhSXRlbT4oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLzhud1Qxb3lpdFk0bkFoMXphc2ZPQ0p6Z3NOLXN2UXVzMktEWGhIR2hNSnJWYXJBZFN1MUFHUEF5R1VMamI1N0FTSmdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiVGVhbSBWaWV3ZXJcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIlRlYW1WaWV3ZXIgQUdcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiMiAtIDVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogamVzdCB3eWrEhXRrb3fEhSBla3NwcmVzasSFIGFydHlzdHkuIFByYWNhIGplc3QgZGVkeWtvd2FueW0gcG9ydHJldGVtIENtaWxpIENvYmVsbG8uIEFic3RyYWtjeWpuYSBncmEgxZt3aWF0ZcWCIGkgY2llbmlhIHphIHBvbW9jxIUgNCBrb2xvcsOzdyBvZGRhamUgesWCb8W8b25vxZvEhyBqYWtpZSBjaGNpYcWCIG9zacSFZ27EhcSHIGFydHlzdGEgb3JheiBwcm9zdHkgcGFudG9uIGJhcncga3TDs3JlIGJ1ZHVqxIUgY2HFgsSFIG5hcnJhY2rEmS4gRHXFvMSFIHdhZ8SZIG1vxbxuYSB6YW9ic2Vyd293YcSHIHcgZGV0YWx1LCBwb25pZXdhxbwgamVzdCB0byBncmFmaWthIHdla3Rvcm93YSBtb8W8ZW15IGRvc3RyemVjIG5pZXR5cG93eSBkZXRhbCB3xYJvc8OzdyBvcmF6IMWbd2lhdMWCbywga3TDs3JlIHJvesWbd2lldGxhIGtvxYRjw7N3a2kuIE9icmF6IHByemVkc3Rhd2lhIHBpxJlrbm8ga29iaWV0eSwgb3JheiBkcnplbWnEhWPEhSBtYWdpxJkgamVqIHRlbXBlcmFtZW50dS4gWmltbmUgYmFyd3kgb2RkYWrEhSBjaMWCw7NkIGt0w7NyeSBzeW1ib2xpenVqZSDFvGFsIG1pxJlkenkgdWN6dWNpZW0gd3luaWthasSFY3ltIHogcm96c3RhbmlhLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIkZyZWUgdmVyc2lvbiBhdmFpbGFibGVcIixcclxuICAgICAgICAgICAgcG9wdWxhcml0eTogODIsXHJcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpa2VkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2dlc2FtdHNjaHVsZWZyb2VuZGVuYmVyZy5kZS93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8wNC9tb29kbGUuanBnXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1vb2RsZVwiLFxyXG4gICAgICAgICAgICBhdXRob3I6IFwiIE1hcnRpbiBEb3VnaWFtYXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiMiAtIDIwMFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaG9zZSB1c2luZyB0aGUgTW9vZGxlIHBsYXRmb3JtIHJlZ3VsYXJseSBzZWVtIHRvIGdldCBiZXR0ZXIgPGJyPiBncmFkZXMgdGhhbiB0aG9zZSB3aG8gcmFyZWx5IG9yIG5ldmVyIHVzZSBpdC5cIixcclxuICAgICAgICAgICAgZGF0ZTogXCJGcmVlIHZlcnNpb24gYXZhaWxhYmxlXCIsXHJcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDgyLFxyXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaWtlZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9vbHNKc29uKTtcclxuICAgICAgICB0aGlzLl9pdGVtcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtcygpKTtcclxuICAgICAgICB0aGlzLl90b29scyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+KHRoaXMuY2xvbmVJdGVtczEoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IElEYXRhSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5nZXRWYWx1ZSgpLmZpbmQoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuaWQgPT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5kZXgoaXRlbTogSURhdGFJdGVtKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpLmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VW5zZWVuSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuYXNPYnNlcnZhYmxlKClcclxuICAgICAgICAgICAgLnBpcGUobWFwKChpdGVtczogQXJyYXk8SURhdGFJdGVtPikgPT4gaXRlbXMuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRVbnNlZW5JdGVtcygpOiBBcnJheTxJRGF0YUl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+ICFpdGVtLnZpZXdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlrZWRJdGVtczEkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xyXG4gICAgICAgIC8vIFRPRE86IEF1c3dhaGwgZGVzIFRvb2xzIGF1ZmdydW5kIGRlciBnZXfDpGhscmVuIERhdGVpZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgodG9vbHM6IEFycmF5PElEYXRhSXRlbT4pID0+IHRvb2xzLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMxKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldExpa2VkSXRlbXMkKCk6IE9ic2VydmFibGU8QXJyYXk8SURhdGFJdGVtPj4ge1xyXG4gICAgICAgIC8vIFRPRE86IEF1c3dhaGwgZGVzIFRvb2xzIGF1ZmdydW5kIGRlciBnZXfDpGhscmVuIERhdGVpZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkID09PSB0cnVlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiBpdGVtLmxpa2VkKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJdGVtKGl0ZW06IElEYXRhSXRlbSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbGlrZShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBpdGVtLmxpa2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldEl0ZW1zKCk7XHJcbiAgICAgICAgaXRlbXNbdGhpcy5nZXRJbmRleChpdGVtKV0gPSBpdGVtO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEl0ZW1zKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zJC5uZXh0KHRoaXMuY2xvbmVJdGVtcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb25lSXRlbXMxKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3Rvb2xzKSk7XHJcbiAgICB9ICAgXHJcbiAgICBwcml2YXRlIGNsb25lSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5faXRlbXMpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9