import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EmployeeCalendar, Shift} from "../../../shared/types/calendar.types";

interface Data{
  employeeCalendar:EmployeeCalendar,
  calendar:Shift
}

@Component({
  selector: 'pp-calendar-edit',
  templateUrl: './calendar-edit.component.html',
  styleUrls: ['./calendar-edit.component.scss'],
})
export class CalendarEditComponent implements OnInit {

  public mode:string='EditTime';

  public foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(
      public dialogRef: MatDialogRef<CalendarEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data:Data
  ) {

  }

  ngOnInit(): void {

  }

  onPeriodEdit(){

  }

  onTimePlanEdit(){

  }

  onTimeFactEdit(){

  }

}
