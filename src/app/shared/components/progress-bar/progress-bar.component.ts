import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {
    concatAll,
    from,
    interval,
    map, Observable, Subscription,
    take,
} from "rxjs";


@Component({
  selector: 'pp-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

    @Input("delay") public delay!:number;
    @ViewChild("bar") private bar!: ElementRef;
    private currentItem:number=0;
    private _progressColor: string="#3DC963";
    private defaultColor: string="#C4C4C4";
    private intervalSubscription!: Subscription;

    constructor() {

    }

    ngOnInit(): void {

    }

    public get progressColor(){
        return this._progressColor;
    }

    public set progressColor(value:string){
        this._progressColor = value;
    }

    public start(): void {
        let barItems =  this.bar.nativeElement.getSVGDocument().children[0].children;
        let intervalStream$ = this.intervalStream(this.logPeriod());
        this.intervalSubscription = intervalStream$.subscribe(
                v=>{
                    barItems[this.currentItem].style.fill=this.progressColor;
                    this.currentItem++;
                }
            )
    }

    public stop():void{
        this.intervalSubscription.unsubscribe();
    }

    public update(color?:string){
        this.currentItem=0;
        let barItems =  this.bar.nativeElement.getSVGDocument().children[0].children;
        for (let index in barItems){
            barItems[index].style.fill=(color==undefined) ? this.defaultColor:color;
        }
    }

    private intervalStream(periods:Array<number>):Observable<any>{
        return from(periods).pipe(
            map(t=>interval(t).pipe(take(1))),
            concatAll()
        )
    }

    private logPeriod():Array<number>{

        let barItems =  this.bar.nativeElement.getSVGDocument().children[0].children;
        let dx = 5 / barItems.length;
        let arr = [...Array(barItems.length)].map((v, i) =>  Math.log((i+1)*dx));
        let acc = arr.reduce((a,b)=>a+b);
        let ty = arr.map((v,i)=>{return this.delay/acc*v});

        return ty;

    }

}
