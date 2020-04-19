import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService, ToolsItem } from "../core/data.service";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute, NavigationExtras } from "@angular/router";
import { TouchGestureEventData } from "tns-core-modules/ui/gestures";
import { ad, ios } from "tns-core-modules/utils/utils";
import { isAndroid } from "tns-core-modules/platform";


declare var UIApplication: any;

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./favorites-list.component.html"
})
export class FavoritesListComponent implements OnDestroy {

    filteredItems: Array<ToolsItem> = [];
    private _itemsSubscription;
    private _items: Array<ToolsItem>;
    private _searchPhrase: string;

    constructor(private _dataService: DataService,
        private routerExtensions: RouterExtensions,
        private _activatedRoute: ActivatedRoute) {

     /*        setTimeout(() => {
                this._itemsSubscription = this._dataService.getLikedItems1$()
                .subscribe((items: Array<ToolsItem>) => {
                    this.setItems(items);
                });            }, 500); */
    }


    reloadTools(){

        setTimeout(() => {
            this._itemsSubscription = this._dataService.getLikedItems1$()
            .subscribe((items: Array<ToolsItem>) => {
                this.setItems(items);
            });            }, 500);

    }

    set items(items: Array<ToolsItem>) {
        this._items = items;
        console.log(items);
    }

    get items(): Array<ToolsItem> {
        return this._items;
    }

    setItems(items) {
        this.items = items;
        this.filteredItems = !!this._searchPhrase ? this.filterItems(items, this._searchPhrase) : this.items;
    }


    ngOnDestroy(): void {
        // this._itemsSubscription.unsubscribe();
    }

    onSearch(text: string) {
        this._searchPhrase = text;
        this.filteredItems = this.filterItems(this.items, text);
    }

    onClear() {
        this._searchPhrase = "";
        this.filteredItems = this.items;
        this.reloadTools();
    }

    onDislike(args) {
        this._dataService.dislike(args.item);
    }

    dismissKeyboard(args: TouchGestureEventData) {
        if (args.action == "down") {
            if (isAndroid) {
                ad.dismissSoftInput();
            } else {
                // ios.getter(UIApplication, UIApplication.sharedApplication)
                //     .keyWindow
                //     .endEditing(true);
            }
        }
    }

    private filterItems(items: Array<ToolsItem>, text: string): Array<ToolsItem> {
        return items.filter((data) => {
            return data.name.includes(text) || data.company.includes(text);
        });
    }

    private onTap(id: number) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                "id": id
            },
            relativeTo: this._activatedRoute
        };
        this.routerExtensions.navigate(['/', { outlets: { favoritesTab: ['item'] } }], navigationExtras);
    }
}
