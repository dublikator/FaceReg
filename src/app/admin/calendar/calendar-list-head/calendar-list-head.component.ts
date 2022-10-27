import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NONE_TYPE} from "@angular/compiler";


enum PeriodType{
  Week,
  Month
};


@Component({
  selector: 'pp-calendar-list-head',
  templateUrl: './calendar-list-head.component.html',
  styleUrls: ['./calendar-list-head.component.scss','../calendar-list/calendar-list.component.scss']
})
export class CalendarListHeadComponent implements OnInit {

  @Output() onPeriodChange = new EventEmitter<Date[]>();

  @Input('offset') offset!:number;
  private periodType:PeriodType=PeriodType.Week;
  public daysAxis!:Date[];

  public weekDays = new Map<number,string>();

  constructor() {
  }

  ngOnInit(): void {
    this.currentPeriod();
    this.setWeekDays();
    this.onPeriodChange.emit([this.daysAxis[0],this.daysAxis[this.daysAxis.length-1]]);
  }

  static dateList(startDate?:Date,periodType:PeriodType=PeriodType.Week,offset:number=0):Date[]{

    let dateList:Date[] = [];
    if (!startDate) {
      startDate = new Date();
    }

    let day = startDate.getDay();
    if (day == 0) {
      day = 7;
    }

    for (let i = 0 - offset/2; i < day; i += 1) {
      let count = -day+i+1;
      dateList.push(this.nextDay(startDate,count));
    }

    for (let i = day; i < 7 + offset/2; i += 1) {
      let count = -day+i+1;
      dateList.push(this.nextDay(startDate,count));;
    }

    return dateList;

  }

  static nextDay(previousDay:Date, count:number):Date{
    let dateOffset = 24*60*60*1000;
    return new Date(previousDay.getTime()+dateOffset*count);
  }

  setWeekDays(){
    this.weekDays.set(1, 'ПН');
    this.weekDays.set(2, 'ВТ');
    this.weekDays.set(3, 'СР');
    this.weekDays.set(4, 'ЧТ');
    this.weekDays.set(5, 'ПТ');
    this.weekDays.set(6, 'СБ');
    this.weekDays.set(0, 'ВС');
  }

  nextPeriod(){
    let nextDay = CalendarListHeadComponent.nextDay(this.daysAxis[this.daysAxis.length-1],1);
    this.daysAxis = CalendarListHeadComponent.dateList(nextDay,this.periodType,this.offset);
  }

  currentPeriod(){
    this.daysAxis=CalendarListHeadComponent.dateList(undefined, this.periodType,this.offset);
  }

  previousPeriod(){
    let previousDay = CalendarListHeadComponent.nextDay(this.daysAxis[0],-1);
    this.daysAxis = CalendarListHeadComponent.dateList(previousDay,this.periodType,this.offset);
  }

  onNextPeriod() {
    this.nextPeriod();
    this.onPeriodChange.emit([this.daysAxis[0],this.daysAxis[this.daysAxis.length-1]]);
  }

  onPreviousPeriod() {
    this.previousPeriod();
    this.onPeriodChange.emit([this.daysAxis[0],this.daysAxis[this.daysAxis.length-1]]);
  }

}
