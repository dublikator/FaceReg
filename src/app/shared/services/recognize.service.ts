import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from "../../../environments/environment";
import urlJoin from "url-join";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RecognizeService {

    prefixUrl = urlJoin(environment.apiUrl, "department");

    constructor(private readonly http: HttpClient) {
    }

    recognize(departmentId: string, data: string): Observable<any> {
        return this.http.post<any>(urlJoin(this.prefixUrl, departmentId, "recognize"), {image: data})
    }

    checkIn(departmentId: string, employeeId: string): Observable<void> {
        return this.http.post<void>(urlJoin(this.prefixUrl, departmentId, employeeId, "check_in"), {})
    }

    checkOut(departmentId: string, employeeId: string): Observable<void> {
        return this.http.post<void>(urlJoin(this.prefixUrl, departmentId, employeeId, "check_out"), {})
    }
}
