import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin.component'
import {EmployeeListComponent} from "./employees/employee-list/employee-list.component";
import {HomeComponent} from "./home/home.component";
import {CalendarListComponent} from "./calendar/calendar-list/calendar-list.component";


const routes: Routes = [
  {
    path: ':customerId',
    component: AdminComponent,
    children:[
      {
        path: 'employees',
        component: EmployeeListComponent
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path: 'calendar',
        component: CalendarListComponent
      },
    ]
  },

]

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class AdminRoutingModule {
}
