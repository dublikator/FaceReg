import {NgModule} from '@angular/core'

import {AdminRoutingModule} from './admin-routing.module'
import {AdminComponent} from './admin.component'
import {NavComponent} from './nav/nav.component';
import {HomeComponent} from './home/home.component';
import {CalendarModule} from "./calendar/calendar.module";
import {EmployeesModule} from "./employees/employees.module";


@NgModule({
    declarations: [
        AdminComponent,
        NavComponent,
        HomeComponent,
    ],
    exports: [
        AdminComponent
    ],
    imports: [
        AdminRoutingModule,
        CalendarModule,
        EmployeesModule,

    ],
    providers: []
})
export class AdminModule {
}
