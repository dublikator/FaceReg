import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeListItemComponent} from './employee-list-item/employee-list-item.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
    declarations: [
        EmployeeListComponent,
        EmployeeListItemComponent,
        EmployeeEditComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        ReactiveFormsModule,
        InfiniteScrollModule,
        ScrollingModule,
    ],
    exports:[
        EmployeeListComponent
    ]
})
export class EmployeesModule {
}
