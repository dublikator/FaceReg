import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import urlJoin from "url-join";


@Injectable({
    providedIn: 'root'
})
export class JwtService {

    private readonly prefixUrl = environment.apiUrl;
    private token: string = "";

    constructor(private readonly http: HttpClient) {
    }

    login(username: string, password: string): Observable<any> {

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        return this.http.post(urlJoin(this.prefixUrl, "login/access-token"), formData).pipe(
            tap((answer: any) => {
                let token = [answer.token_type, answer.access_token].join(' ');
                localStorage.setItem('token', token);
                this.setToken(token);
            })
        );

    }

    logout() {
        this.setToken("");
        localStorage.clear();
    }

    setToken(token: string) {
        this.token = token;
    }

    getToken(): string {
        return this.token;
    }

    isAuthenticated(): boolean {
        return !!this.token.length;
    }

}
