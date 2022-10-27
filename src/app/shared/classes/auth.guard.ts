import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {JwtService} from "../services/jwt.service";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn:"root"
})
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private jwt:JwtService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this.jwt.isAuthenticated()){
            return of(true);
        } else {
            this.router.navigate([''],{
                queryParams:{
                    accessDenied:true
                }
            })
            return of(false);
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(route,state);
    }
}
