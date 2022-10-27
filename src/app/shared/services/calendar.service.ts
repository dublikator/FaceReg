import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeCalendar} from "../types/calendar.types";

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    private readonly prefixUrl = `${location.origin}/api/v1`

    constructor(private readonly http: HttpClient) {
        console.log()
    }

    shiftGet(date_start: Date, date_end: Date, customer_id: string, department_id: string, limit: number, offset: number): Observable<EmployeeCalendar[]> {
        return this.http.get<EmployeeCalendar[]>(this.prefixUrl + '/shift');
    }


}
