import {NgModule} from '@angular/core'
import {CalendarListComponent} from "./calendar-list/calendar-list.component";
import {CalendarListItemComponent} from './calendar-list-item/calendar-list-item.component';
import {CommonModule} from "@angular/common";
import {CalendarEditComponent} from './calendar-edit/calendar-edit.component';
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSelectModule} from "@angular/material/select";
import {CalendarListHeadComponent} from './calendar-list-head/calendar-list-head.component';

@NgModule({
    declarations: [
        CalendarListComponent,
        CalendarListItemComponent,
        CalendarEditComponent,
        CalendarListHeadComponent,
    ],
    exports: [
        CalendarListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonToggleModule,
        MatSelectModule,
    ],
    providers: []
})
export class CalendarModule {

}
