import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {ItemsList} from "../types/response.types";

export class PagesLoader<TData> extends DataSource<TData | undefined> {

    private _cachedData = Array.from<TData>({length: this._pageSize});
    private _fetchedPages = new Set<number>();
    private readonly _dataStream = new BehaviorSubject<(TData | undefined)[]>(this._cachedData);
    private readonly _scrollSubscription = new Subscription();

    constructor(private _pageSize: number, private _loader: (pageNumber: number, pageSize: number) => Observable<ItemsList<TData>>) {
        super();
    }

    set length(value: number) {
        this._cachedData = Array.from<TData>({length: value});
    }

    get length() {
        return this._cachedData.length;
    }

    connect(collectionViewer: CollectionViewer): Observable<(TData | undefined)[]> {

        this._scrollSubscription.add(
            collectionViewer.viewChange.subscribe(range => {
                const startPage = this._getPageIndex(range.start);
                const endPage = this._getPageIndex(range.end - 1);
                for (let i = startPage; i <= endPage; i++) {
                    this._fetchPage(i);
                }
            }),
        );

        return this._dataStream;
    }

    disconnect(): void {
        this._scrollSubscription.unsubscribe();
    }

    private _getPageIndex(itemIndex: number): number {
        return  Math.floor(itemIndex / this._pageSize);
    }

    private _fetchPage(page: number) {

        if (this._fetchedPages.has(page)) {
            return;
        }

        this._fetchedPages.add(page);

        this._loader(page + 1, this._pageSize).subscribe(
            (value) => {

                if (this._pageSize == this._cachedData.length) {
                    this.length = value.total;
                }

                this._cachedData.splice(
                    page * this._pageSize,
                    this._pageSize,
                    ...value.items
                )

                this._dataStream.next(this._cachedData);

            }
        )

    }
}

