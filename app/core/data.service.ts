import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";

export interface IDataItem {
    text?: string;
    id: any;
    liked?: boolean;
    title?: string;
    viewed?: boolean;
}

export interface ToolsItem {
    id: any;
    name: string;
    company: string;
    price: string;
    users: any;
    picture: string;
    established: boolean;
    keywords: number[];
    pro: string[];
    con: string[];
}

@Injectable()
export class DataService {

    apiUrl = "https://api3.skoerner.com/";
    questionJson: any;
    toolsJson: any;




    private _items$: BehaviorSubject<Array<IDataItem>>;
    private _items = new Array<IDataItem>(

    );


    private _tools$: BehaviorSubject<Array<ToolsItem>>;
    private _tools = new Array<ToolsItem>(
    );


    getQuestions() {

        getJSON(this.apiUrl + "questions").then((r: any) => {
            this.questionJson = r;
    
            var i;
            for (i = 0; i < this.questionJson.length; i++) {
                let id = this.questionJson[i].id;
                let text = this.questionJson[i].text;

                this._items.push(
                    {
                        id: id,
                        text: text,
                        viewed: false,
                        liked: false
                    }
                )
            }
            this._items$ = new BehaviorSubject<Array<IDataItem>>(this.cloneItems());

        }, (e) => {
        });

    }



    getTools() {

        let send = null;
        if(this._items.length>1){
           send =  JSON.stringify(this.getLikedItems());
      } else{

        getJSON(this.apiUrl + "loadAll").then((r: any) => {
            this.toolsJson = r;
    
            var i;
            for (i = 0; i < this.toolsJson.length; i++) {

                this._tools.push(
                    {
                        id: this.toolsJson[i].id,
                        name: this.toolsJson[i].name,
                        company: this.toolsJson[i].company,
                        price: this.toolsJson[i].price,
                        users: this.toolsJson[i].users,
                        picture: this.toolsJson[i].picture,
                        established: this.toolsJson[i].established,
                        keywords: this.toolsJson[i].keywords,
                        pro: this.toolsJson[i].pro,
                        con: this.toolsJson[i].con
                    }
                )
            }
            this._tools$ = new BehaviorSubject<Array<ToolsItem>>(this.cloneItems1());

        }, (e) => {
            console.log(e);
        });


        return;
    }

      console.log(send);

        
        request({
            url: this.apiUrl+"result",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: send
        }).then((response) => {


            this.toolsJson = response.content.toJSON();

            var i;
            for (i = 0; i < this.toolsJson.length; i++) {

                this._tools.push(
                    {
                        id: this.toolsJson[i].id,
                        name: this.toolsJson[i].name,
                        company: this.toolsJson[i].company,
                        price: this.toolsJson[i].price,
                        users: this.toolsJson[i].users,
                        picture: this.toolsJson[i].picture,
                        established: this.toolsJson[i].established,
                        keywords: this.toolsJson[i].keywords,
                        pro: this.toolsJson[i].pro,
                        con: this.toolsJson[i].con
                    }
                )
            }
            this._tools$ = new BehaviorSubject<Array<ToolsItem>>(this.cloneItems1());
            console.log(this._tools);

        }, (e) => {
            console.log(e);
        });
        
    }


    constructor() {

        this.getQuestions();
        this.getTools();
        this._items$ = new BehaviorSubject<Array<IDataItem>>(this.cloneItems());
        this._tools$ = new BehaviorSubject<Array<ToolsItem>>(this.cloneItems1());
    }

    getItems(): Array<IDataItem> {
        return this._items$.getValue();
    }

    getItem(id: number): ToolsItem {
        return this._tools$.getValue().find((data) => {
            return data.id == id;
        });
    }

    getIndex(item: IDataItem): number {
        return this.getItems().findIndex((element) => element.id === item.id);
    }

    getUnseenItems$(): Observable<Array<IDataItem>> {
        return this._items$.asObservable()
            .pipe(map((items: Array<IDataItem>) => items.filter((item: IDataItem) => !item.viewed)));
    }

    getUnseenItems(): Array<IDataItem> {
        return this._items$.getValue().filter((item: IDataItem) => !item.viewed);
    }

    getLikedItems1$(): Observable<Array<ToolsItem>> {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._tools$.asObservable()
            .pipe(map((tools: Array<ToolsItem>) => tools.filter((item: ToolsItem) => item)));
    }

    getLikedItems1(): Array<ToolsItem> {
        return this._tools$.getValue().filter((item: ToolsItem) => item);
    }

    getLikedItems$(): Observable<Array<IDataItem>> {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._items$.asObservable()
            .pipe(map((items: Array<IDataItem>) => items.filter((item: IDataItem) => item.liked === true)));
    }

    getLikedItems(): Array<any> {
        let liked =  this._items$.getValue().filter((item: IDataItem) => item.viewed);
        let go = new Array<any>();
        for (var i in liked) {
            go.push(
                {
                    q_id: liked[i].id,
                    response: liked[i].liked
                }
            )
        }
        return go;
    }

    updateItem(item: IDataItem): void {
        const items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    }

    dislike(item: IDataItem): void {
        item.liked = false;
        const items = this.getItems();
        items[this.getIndex(item)] = item;
        this._items$.next(items);
    }

    resetItems(): void {
        this._items$.next(this.cloneItems());
    }

    private cloneItems1(): Array<ToolsItem> {
        return JSON.parse(JSON.stringify(this._tools));
    }
    private cloneItems(): Array<IDataItem> {

        return JSON.parse(JSON.stringify(this._items));

    }
}
