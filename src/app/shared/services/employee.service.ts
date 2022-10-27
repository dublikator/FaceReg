import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from "../../../environments/environment";
import urlJoin from "url-join";
import {Employee, EmployeeListItem} from "../types/employee.types";
import {ItemsList} from "../types/response.types";
import {map} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private readonly prefixUrl = urlJoin(environment.apiUrl, "employee");

    constructor(private readonly http: HttpClient) {

    }

    list(page: number, size: number): Observable<ItemsList<EmployeeListItem>> {
        let params = new HttpParams().set("page", page).set("size", size);
        return this.http.get<any>(urlJoin(this.prefixUrl, "list"), {params: params}).pipe(
            map((value) => {
                    return value.data;
                }
            )
        )
    }

    byId(id: string): Observable<any> {
        return this.http.get(urlJoin(this.prefixUrl, id));
    }

    create(emloyee: Employee): Observable<any> {
        return this.http.post(this.prefixUrl, emloyee);
    }

    update(emloyee: Employee): Observable<any> {
        return this.http.put(urlJoin(this.prefixUrl, emloyee.id), emloyee);
    }

    addPhoto(employeeId: string, data: { image: string }): Observable<any> {
        return this.http.post(urlJoin(this.prefixUrl, employeeId, "add_photo"), data);
    }


}
