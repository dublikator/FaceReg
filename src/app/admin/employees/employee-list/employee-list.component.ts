import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../shared/services/employee.service";
import {EmployeeListItem} from "../../../shared/types/employee.types";
import {PagesLoader} from "../../../shared/classes/pagesLoader";
import {MatDialog} from "@angular/material/dialog";
import {EmployeeEditComponent} from "../employee-edit/employee-edit.component";

@Component({
    selector: 'pp-employee-list',
    styleUrls: ['employee-list.component.scss','../../styles.scss'],
    templateUrl: 'employee-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent implements OnInit {

    public dataSource!: PagesLoader<EmployeeListItem>;

    constructor(private readonly employeeService: EmployeeService,
                private dialog:MatDialog) {

    }

    ngOnInit() {
        this.dataSource = new PagesLoader<EmployeeListItem>(9, this.employeeService.list.bind(this.employeeService));
    }

    onSelectItem(item: EmployeeListItem | undefined) {

        if (!item){
            return;
        }
        this.dialog.open(EmployeeEditComponent,{data:{id:item?.id}});

    }

    onAdd() {

    }
}


