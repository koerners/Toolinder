import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { getFile, getImage, getJSON, getString, request, HttpResponse } from "tns-core-modules/http";

export interface IDataItem {
    text?: string;
    id: number;
    liked?: boolean;
    title?: string;
    viewed?: boolean;
}

export interface ToolsItem {
    author?: string;
    caption?: string;
    date?: Date | string;
    description?: string;
    id: number;
    image?: string;
    liked?: boolean;
    location?: string;
    popularity?: string | number;
    title?: string;
    viewed?: boolean;
}

@Injectable()
export class DataService {

    private _items$: BehaviorSubject<Array<IDataItem>>;
    private _items = new Array<IDataItem>(

    );

    
    private _tools$: BehaviorSubject<Array<ToolsItem>>;
    private _tools = new Array<ToolsItem>(
        {
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
        },
        {
            id: 2,
            image: "https://gesamtschulefroendenberg.de/wp-content/uploads/2015/04/moodle.jpg",
            title: "Moodle",
            author: " Martin Dougiamas",
            location: "2 - 200",
            description: "Those using the Moodle platform regularly seem to get better grades than those who rarely or never use it.",
            date: "Free version available",
            popularity: 82,
            viewed: false,
            liked: true
        }

    );
    questionJson: any;


        getQuestions(){

            const apiUrl = "https://demo2804314.mockable.io/";
        
            getJSON(apiUrl+"questions").then((r: any) => {
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

    
    
    constructor() {

        this.getQuestions();
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
            .pipe(map((tools: Array<ToolsItem>) => tools.filter((item: ToolsItem) => item.liked === true)));
    }

    getLikedItems1(): Array<ToolsItem> {
        return this._tools$.getValue().filter((item: ToolsItem) => item.liked);
    }
    
    getLikedItems$(): Observable<Array<IDataItem>> {
        // TODO: Auswahl des Tools aufgrund der gewählren Dateien
        return this._items$.asObservable()
            .pipe(map((items: Array<IDataItem>) => items.filter((item: IDataItem) => item.liked === true)));
    }

    getLikedItems(): Array<IDataItem> {
        return this._items$.getValue().filter((item: IDataItem) => item.liked);
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
