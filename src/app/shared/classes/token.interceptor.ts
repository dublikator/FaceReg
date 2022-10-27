import {Injectable} from "@angular/core";
import {JwtService} from "../services/jwt.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    constructor(private jwtService:JwtService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.jwtService.isAuthenticated()){
            req = req.clone({
                setHeaders:{
                    Authorization:this.jwtService.getToken()
                }
            })
        }

        return next.handle(req);

    }


}