import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService, IDataItem, ToolsItem } from "../core/data.service";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view";
import { Page } from "ui/page";
import { isIOS } from "tns-core-modules/platform";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";

export interface Keyworda {
    keyword?: string;
    citations?: any;


}
@Component({
    selector: "ItemDetail",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: ToolsItem;
    opacity: number = 1;
    keywordsArray: any;



    constructor(
        private data: DataService,
        private route: ActivatedRoute,
        private page: Page
    ) {

        this.keywordsArray = new Array<Keyworda>();
        
    }

    getKeyword(id: any) {
        const apiUrl = "https://api3.skoerner.com/";
        let response;

        getJSON(apiUrl + "keyword/" + id).then((r: any) => {
            response = r;

            this.keywordsArray.push(
                {
                    keyword: response[0].keyword,
                    citations: response[0].citations[0],

                }
            )

        }, (e) => {
            console.log(e);

        });

    }


    onTap(src: string){
    }



    ngOnInit(): void {
        const id = this.route.snapshot.queryParams['id'];
        this.item = this.data.getItem(id);

        this.getKeyword(1);
        this.getKeyword(2);
        this.getKeyword(3);








        if (isIOS) {
            this.page.actionBarHidden = true;
        }
    }




    onScroll(args: ScrollEventData) {
        if (args.scrollY > 0 && args.scrollY < 230) {
            this.opacity = 1 - (args.scrollY * 0.0043);
        } else if (args.scrollY < 0) {
            this.opacity = 1;
        }
    }
}
