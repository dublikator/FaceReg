import {Component, Input, OnInit} from '@angular/core';
import { EmployeeCalendar } from "../../../shared/types/calendar.types";
import { Shift } from "../../../shared/types/calendar.types";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CalendarEditComponent} from "../calendar-edit/calendar-edit.component";



@Component({
  selector: 'pp-calendar-list-item',
  templateUrl: './calendar-list-item.component.html',
  styleUrls: ['./calendar-list-item.component.scss','../calendar-list/calendar-list.component.scss']
})
export class CalendarListItemComponent implements OnInit {

  @Input() employeeCalendar!: EmployeeCalendar;
  @Input('offset') offset!:number;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    // console.log(this.employeeCalendar)
  }

  onShiftEdit(calendar: Shift) {
    const dialogRef = this.dialog.open(CalendarEditComponent,{
      data: {employeeCalendar: this.employeeCalendar, calendar: calendar},
    })
  }
}
