import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Employee, EmployeeListItem} from "../../../shared/types/employee.types";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeEditComponent} from "../employee-edit/employee-edit.component";

@Component({
    selector: 'pp-employee-list-item',
    templateUrl: './employee-list-item.component.html',
    styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent implements OnInit {

    @Input() public data!: EmployeeListItem;

    constructor() {
    }

    ngOnInit(): void {
    }


}
