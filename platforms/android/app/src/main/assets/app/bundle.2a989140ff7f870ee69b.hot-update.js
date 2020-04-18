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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb3JlL2RhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ1E7QUFDTjtBQWlCN0M7SUFzRkk7UUFuRlEsV0FBTSxHQUFHLElBQUksS0FBSyxDQUN0QjtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLDJHQUEyRztZQUNsSCxLQUFLLEVBQUUsd0ZBQXdGO1lBQy9GLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZpQkFBNmlCO1lBQzFqQixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsTUFBTSxFQUFFLEtBQUs7WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmLEVBQ0Q7WUFDSSxFQUFFLEVBQUUsQ0FBQztZQUNMLEtBQUssRUFBRSxnR0FBZ0c7WUFDdkcsS0FBSyxFQUFFLHdGQUF3RjtZQUMvRixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0dkJBQTR2QjtZQUN6d0IsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZixFQUNEO1lBQ0ksRUFBRSxFQUFFLENBQUM7WUFDTCxLQUFLLEVBQUUsNEVBQTRFO1lBQ25GLEtBQUssRUFBRSx3RkFBd0Y7WUFDL0YsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUseWhCQUF5aEI7WUFDdGlCLElBQUksRUFBRSxNQUFNO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2YsRUFDRDtZQUNJLEVBQUUsRUFBRSxDQUFDO1lBQ0wsS0FBSyxFQUFFLHFGQUFxRjtZQUM1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S0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8saUNBQVcsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ08sZ0NBQVUsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBN0pRLFdBQVc7UUFEdkIsZ0VBQVUsRUFBRTs7T0FDQSxXQUFXLENBOEp2QjtJQUFELGtCQUFDO0NBQUE7QUE5SnVCIiwiZmlsZSI6ImJ1bmRsZS4yYTk4OTE0MGZmN2Y4NzBlZTY5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhSXRlbSB7XHJcbiAgICBhdXRob3I6IHN0cmluZztcclxuICAgIGNhcHRpb24/OiBzdHJpbmc7XHJcbiAgICBkYXRlOiBEYXRlIHwgc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgbGlrZWQ/OiBib29sZWFuO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIHBvcHVsYXJpdHk/OiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdmlld2VkPzogYm9vbGVhbjtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1zJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+O1xyXG4gICAgcHJpdmF0ZSBfaXRlbXMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9qYWNlay1tYWxpbm93c2tpLXRvc2thbmlhLXZhbC1kLW9yY2lhLTEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIk1laHIgRXJrbMOkcnVuZ1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogamVzdCB3eWrEhXRrb3fEhSBla3NwcmVzasSFIGFydHlzdHkuIFByYWNhIGplc3QgZGVkeWtvd2FueW0gcG9ydHJldGVtIENtaWxpIENvYmVsbG8uIEFic3RyYWtjeWpuYSBncmEgxZt3aWF0ZcWCIGkgY2llbmlhIHphIHBvbW9jxIUgNCBrb2xvcsOzdyBvZGRhamUgesWCb8W8b25vxZvEhyBqYWtpZSBjaGNpYcWCIG9zacSFZ27EhcSHIGFydHlzdGEgb3JheiBwcm9zdHkgcGFudG9uIGJhcncga3TDs3JlIGJ1ZHVqxIUgY2HFgsSFIG5hcnJhY2rEmS4gRHXFvMSFIHdhZ8SZIG1vxbxuYSB6YW9ic2Vyd293YcSHIHcgZGV0YWx1LCBwb25pZXdhxbwgamVzdCB0byBncmFmaWthIHdla3Rvcm93YSBtb8W8ZW15IGRvc3RyemVjIG5pZXR5cG93eSBkZXRhbCB3xYJvc8OzdyBvcmF6IMWbd2lhdMWCbywga3TDs3JlIHJvesWbd2lldGxhIGtvxYRjw7N3a2kuIE9icmF6IHByemVkc3Rhd2lhIHBpxJlrbm8ga29iaWV0eSwgb3JheiBkcnplbWnEhWPEhSBtYWdpxJkgamVqIHRlbXBlcmFtZW50dS4gWmltbmUgYmFyd3kgb2RkYWrEhSBjaMWCw7NkIGt0w7NyeSBzeW1ib2xpenVqZSDFvGFsIG1pxJlkenkgdWN6dWNpZW0gd3luaWthasSFY3ltIHogcm96c3RhbmlhLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMThcIixcclxuICAgICAgICAgICAgcG9wdWxhcml0eTogODIsXHJcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvam9hbm5hLXN1bGVrLW1hbGlub3dza2EtY2hyb21vc2ZlcmEtaWlpLWFrcnlsLmpwZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2V0ZXR1ciBzYWRpcHNjaW5nIGVsaXRyLCBzZWQgZGlhbSBub251bXkgZWlybW9kIHRlbXBvclwiLFxyXG4gICAgICAgICAgICBhdXRob3I6IFwiTWVociBFcmtsw6RydW5nXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkdhbGxlcnlzdG9yZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDeWtsIGFic3RyYWtjamkg4oCeQ2hyb21vc2ZlcnnigJ0gaW5zcGlyb3dhbnkgamVzdCBzxYJvxYRjZW0sIHByemVzdHJ6ZW5pxIUga29zbWljem7EhSBvcmF6IHpqYXdpc2thbWkgbWV0ZW9yb2xvZ2ljem55bWkuIEN6YXJuZSBwYXN5IHN1Z2VydWrEhSBvZ3JhbmljemVuaWUgbWllc3prYcWEY2EgemllbXNraWVnbywga3TDs3J5IG5pZSBtb8W8ZSB3em5pZcWbxIcgc2nEmSBwb25hZCB0byBjbyB3aWR6aSB6IGRvxYJ1LiBCYXJ3bnkgxZtyb2RlayB6IHN5bWJvbGljem55bSBzxYJvxYRjZW0gbHViIHBsYW5ldMSFIHptaWVuaWEgZm9ybXkgb3JheiBrb2xvcnkgdyB6YWxlxbxub8WbY2kgb2QgcG9yeSBkbmlhLiBPYnJhenkgYnVkb3dhbmUgc8SFIHphIHBvbW9jxIUgcMWCeW5ueWNoIGxpbmlpLCBwcnplbmlrYWrEhWN5Y2ggc2nEmSBuYSBwxYJhc3pjennFum5pZS4gQ3rEmXN0byB1a8WCYWR5IHByemVzdHJ6ZW5uZSByb3rFm3dpZXRsYW5lIHPEhSDFm3dpYXTFgmVtIHBhZGFqxIVjeW0geiBuaWVvY3p5d2lzdGVnbyDFunLDs2TFgmEuIFV3eWRhdG5pYWrEhSBzacSZIGFieSB6YSBjaHdpbMSZIHphcGHFm8SHIHNpxJkgdyBjemVyxYQuIFBvd2llcnpjaG5pYSBvYnJhesOzdyBwb3ByemV6IHdpZWxva3JvdG5lLCBwcmVjeXp5am5lIG5ha8WCYWRhbmllIHDFgmFza2llaiBwbGFteSwgemRhamUgc2nEmSBiecSHIGlkZWFsbmllIGfFgmFka2EuIERlbGlrYXRuZSBsaW5pZSBwb2RrcmXFm2xhasSFIGtydWNob8WbxIcgemphd2lza2EgYSBqZWRub2N6ZcWbbmllIHPEhSDFgsSFY3puaWtpZW0gcGFzYSBiYXJ3IHogY3phcm7EhSBwcnplc3RyemVuacSFLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTZcIixcclxuICAgICAgICAgICAgcG9wdWxhcml0eTogNDEsXHJcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtZ29yc2tpLXNsaW1hay1ha3J5bC5qcGdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIk1laHIgRXJrbMOkcnVuZ1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWJzdHJha2N5am5hIHByenlyb2RhLCBwaWVrbm8gb3RhY3phasSFY2VnbyBuYXMgxZt3aWF0YSwgd3Nww7PFgmlzdG5pZW5pZS4gQWtzdHJha2N5am55LCBwZcWCZW4ga29sb3LDs3cgb2JyYXogYWtyeWxvd3kgbmEgcMWCw7N0bmllIGxuaWFueW0gd3lrb25hbnkgdyB0ZWNobmljZSBlbmthdXN0eWtpLiBFbmthdXN0eWthIHRvIHRlY2huaWthIHByYWNvY2jFgm9ubmEsIGt0w7NyYSB3eW1hZ2Egb2QgdHfDs3JjeSBuYWvFgmFkYW5pYSBmYXJiIG5hIGdvcsSFY28gdyBzcG9pd2llIHdvc2t1IHBzemN6ZWxlZ28gbHViIG9sZWp1LiBEemnEmWtpIHRha2ltIHphYmllZ29tIHBvendhbGEgdXp5c2thxIcgdHJ3YcWCZSBpIG9kcG9ybmUgbmEgd2lsZ2/EhyByZXp1bHRhdHksIGEgdGFrxbxlIHphY2hvd2HEhyBnxYLEmWJpxJkgaSBibGFzayB6YXN0b3Nvd2FuZWogcGFsZXR5IGtvbG9yeXN0eWN6bmVqLiBQcmFjYSBkb2RhIGNoYXRha3RlcnUgcHJ6ZXN0cm9ubnltIHduZXRyem9tLiBPYnJheiBzcHJhd2R6aSBzacSZIHcgYml1cnplIG9yYXogdyBkdcW8eW0sIGphc255bSBzYWxvbmllLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTVcIixcclxuICAgICAgICAgICAgcG9wdWxhcml0eTogNTUsXHJcbiAgICAgICAgICAgIHZpZXdlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpa2VkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZG4uZ2FsbGVyeXN0b3JlLnBsL3dvcmtzLy93Nzc3LWg3MDAvcGF3ZWwtcG9yYWRhLWRhbWEtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIk1laHIgRXJrbMOkcnVuZ1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT2JyYXogXFxcImRhbWFcXFwiIHpvc3RhxYIgbmFtYWxvd2FueSBuYSBwxYLDs3RuaWUgM0QgLSBncnVic3phIHJhbWEsIG8gd3ltaWFyYWNoIDUweDUwY20sIGZhcmJhbWkgb2xlam55bWkuIE1hbG93aWTFgm8gcHJ6ZWRzdGF3aWEga29iaWV0xJkgeiBrbGFzxIUgbmEgdGxlIHogYm9nYXTEhSBvcm5hbWVudHlrxIUuIEJhcmR6byBrb2xvcm93eSwgemJ1ZG93YW55IHogcHJvc3R5Y2ggZm9ybSBpIGtzenRhxYJ0w7N3LiBLbGltYXRlbSBsZWtrbyBuYXdpxIV6dWplIGRvIGRhd25pZWpzenljaCBlcG9rIGx1YiBkbyBkYW15IHogdGFsaWkga2FydC4gUG9ydHJldCBpZGVhbG5pZSB6YWdyYSB3IGthxbxkeW0gd27EmXRyenUgYWxlIGkgcsOzd25pZcW8IHBvZGtyZcWbbGkga2FyY2lhbmUgdXBvZG9iYW5pYSwgaG9iYnkgaGlzdG9yeWN6bmUgbHViIHJvenJ5d2tvd3kgY2hhcmFrdGVyIG9zb2J5IGt0w7NyYSBnbyB6YWt1cGkuIFN5Z25vd2FueSB6IHByem9kdSBuYXp3aXNraWVtIGkgZGF0xIUgcG93c3RhbmlhLiBXeWtvbmFueSB3IHBvamVkeW5jenltIGVnemVtcGxhcnp1IGNvIHp3acSZa3N6YSBqZWdvIHdhcnRvxZvEhyBrb2xla2Nqb25lcnNrxIUuXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA2MyxcclxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgbGlrZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2Nkbi5nYWxsZXJ5c3RvcmUucGwvd29ya3MvL3c3NzctaDcwMC9pemEta29zdGl1a293LXNsYWR5LTQtbWFsYXJzdHdvLW9sZWpuZS5qcGdcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3JcIixcclxuICAgICAgICAgICAgYXV0aG9yOiBcIk1laHIgRXJrbMOkcnVuZ1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJHYWxsZXJ5c3RvcmVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWJzdHJha2N5am55IG9icmF6IG5hbWFsb3dhbnkgdyB0ZWNobmljZSBvbGVqbmVqLiBwcmFjYSBuaWUgd3ltYWdhIHJhbXkgLCBrcmF3xJlkemllIHDFgsOzdG5hIHPEhSB6YW1hbG93YW5lLiBQcmFjYSBqZXN0IHphYmV6cGllY3pvbmEgd2Vybmlrc2VtIHNhdHlub3d5bS4gb2JyYXogamVzdCBzeWdub3dhbnkgeiB0ecWCdSBvYnJheiBqZXN0IGN6xJnFm2NpxIUgY3lrbHUgbWFsYXJza2llZ28gXFxcIiDFmmxhZHlcXFwiLCBwb3dzdGHFgmVnbyB3IDIwMTQgcm9rdS4gUHJhY2EgbW/FvGUgYnnEhyBkb2JyeW0gcHJlemVudGVtIG5wLiBuYSDFm2x1Yi5cIixcclxuICAgICAgICAgICAgZGF0ZTogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgIHBvcHVsYXJpdHk6IDE1LFxyXG4gICAgICAgICAgICB2aWV3ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaWtlZDogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgKTtcclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgX3Rvb2xzJDogQmVoYXZpb3JTdWJqZWN0PEFycmF5PElEYXRhSXRlbT4+O1xyXG4gICAgcHJpdmF0ZSBfdG9vbHMgPSBuZXcgQXJyYXk8SURhdGFJdGVtPihcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vOG53VDFveWl0WTRuQWgxemFzZk9DSnpnc04tc3ZRdXMyS0RYaEhHaE1KclZhckFkU3UxQUdQQXlHVUxqYjU3QVNKZ1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUZWFtIFZpZXdlclwiLFxyXG4gICAgICAgICAgICBhdXRob3I6IFwiVGVhbVZpZXdlciBBR1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCIyIC0gNVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPYnJheiBqZXN0IHd5asSFdGtvd8SFIGVrc3ByZXNqxIUgYXJ0eXN0eS4gUHJhY2EgamVzdCBkZWR5a293YW55bSBwb3J0cmV0ZW0gQ21pbGkgQ29iZWxsby4gQWJzdHJha2N5am5hIGdyYSDFm3dpYXRlxYIgaSBjaWVuaWEgemEgcG9tb2PEhSA0IGtvbG9yw7N3IG9kZGFqZSB6xYJvxbxvbm/Fm8SHIGpha2llIGNoY2lhxYIgb3NpxIVnbsSFxIcgYXJ0eXN0YSBvcmF6IHByb3N0eSBwYW50b24gYmFydyBrdMOzcmUgYnVkdWrEhSBjYcWCxIUgbmFycmFjasSZLiBEdcW8xIUgd2FnxJkgbW/FvG5hIHphb2JzZXJ3b3dhxIcgdyBkZXRhbHUsIHBvbmlld2HFvCBqZXN0IHRvIGdyYWZpa2Egd2VrdG9yb3dhIG1vxbxlbXkgZG9zdHJ6ZWMgbmlldHlwb3d5IGRldGFsIHfFgm9zw7N3IG9yYXogxZt3aWF0xYJvLCBrdMOzcmUgcm96xZt3aWV0bGEga2/FhGPDs3draS4gT2JyYXogcHJ6ZWRzdGF3aWEgcGnEmWtubyBrb2JpZXR5LCBvcmF6IGRyemVtacSFY8SFIG1hZ2nEmSBqZWogdGVtcGVyYW1lbnR1LiBaaW1uZSBiYXJ3eSBvZGRhasSFIGNoxYLDs2Qga3TDs3J5IHN5bWJvbGl6dWplIMW8YWwgbWnEmWR6eSB1Y3p1Y2llbSB3eW5pa2FqxIVjeW0geiByb3pzdGFuaWEuXCIsXHJcbiAgICAgICAgICAgIGRhdGU6IFwiRnJlZSB2ZXJzaW9uIGF2YWlsYWJsZVwiLFxyXG4gICAgICAgICAgICBwb3B1bGFyaXR5OiA4MixcclxuICAgICAgICAgICAgdmlld2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgbGlrZWQ6IHRydWVcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRvb2xzSnNvbik7XHJcbiAgICAgICAgdGhpcy5faXRlbXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMoKSk7XHJcbiAgICAgICAgdGhpcy5fdG9vbHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBcnJheTxJRGF0YUl0ZW0+Pih0aGlzLmNsb25lSXRlbXMxKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJRGF0YUl0ZW0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29scyQuZ2V0VmFsdWUoKS5maW5kKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLmlkID09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4KGl0ZW06IElEYXRhSXRlbSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKS5maW5kSW5kZXgoKGVsZW1lbnQpID0+IGVsZW1lbnQuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVuc2Vlbkl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMkLmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgICAgICAgIC5waXBlKG1hcCgoaXRlbXM6IEFycmF5PElEYXRhSXRlbT4pID0+IGl0ZW1zLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VW5zZWVuSXRlbXMoKTogQXJyYXk8SURhdGFJdGVtPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5nZXRWYWx1ZSgpLmZpbHRlcigoaXRlbTogSURhdGFJdGVtKSA9PiAhaXRlbS52aWV3ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExpa2VkSXRlbXMxJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcclxuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2xzJC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAucGlwZShtYXAoKHRvb2xzOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiB0b29scy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCA9PT0gdHJ1ZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlZEl0ZW1zMSgpOiBBcnJheTxJRGF0YUl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHMkLmdldFZhbHVlKCkuZmlsdGVyKChpdGVtOiBJRGF0YUl0ZW0pID0+IGl0ZW0ubGlrZWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMaWtlZEl0ZW1zJCgpOiBPYnNlcnZhYmxlPEFycmF5PElEYXRhSXRlbT4+IHtcclxuICAgICAgICAvLyBUT0RPOiBBdXN3YWhsIGRlcyBUb29scyBhdWZncnVuZCBkZXIgZ2V3w6RobHJlbiBEYXRlaWVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zJC5hc09ic2VydmFibGUoKVxyXG4gICAgICAgICAgICAucGlwZShtYXAoKGl0ZW1zOiBBcnJheTxJRGF0YUl0ZW0+KSA9PiBpdGVtcy5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCA9PT0gdHJ1ZSkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMaWtlZEl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcyQuZ2V0VmFsdWUoKS5maWx0ZXIoKGl0ZW06IElEYXRhSXRlbSkgPT4gaXRlbS5saWtlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSXRlbShpdGVtOiBJRGF0YUl0ZW0pOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuICAgICAgICBpdGVtc1t0aGlzLmdldEluZGV4KGl0ZW0pXSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5faXRlbXMkLm5leHQoaXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2xpa2UoaXRlbTogSURhdGFJdGVtKTogdm9pZCB7XHJcbiAgICAgICAgaXRlbS5saWtlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5nZXRJdGVtcygpO1xyXG4gICAgICAgIGl0ZW1zW3RoaXMuZ2V0SW5kZXgoaXRlbSldID0gaXRlbTtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dChpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJdGVtcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyQubmV4dCh0aGlzLmNsb25lSXRlbXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zMSgpOiBBcnJheTxJRGF0YUl0ZW0+IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl90b29scykpO1xyXG4gICAgfSAgIFxyXG4gICAgcHJpdmF0ZSBjbG9uZUl0ZW1zKCk6IEFycmF5PElEYXRhSXRlbT4ge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX2l0ZW1zKSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==