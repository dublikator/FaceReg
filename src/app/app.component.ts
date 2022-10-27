import {Component, OnInit} from '@angular/core'
import {JwtService} from "./shared/services/jwt.service";


@Component({
    selector: 'pp-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

    constructor(private jwtService: JwtService) {
    }

    ngOnInit(): void {
        this.updateToken();
    }

    updateToken() {
        const lastToken = localStorage.getItem('token');
        if (lastToken) {
            this.jwtService.setToken(lastToken);
        }
    }

}
