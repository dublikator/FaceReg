import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {JwtService} from "../../shared/services/jwt.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
    selector: 'pp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    public form!:FormGroup;
    private subscription!:Subscription;

    constructor(
        private dialogRef: MatDialogRef<LoginComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private readonly jwtService: JwtService,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.form = new FormGroup<any>({
            username:new FormControl(''),
            password:new FormControl('')
        });
        this.activatedRoute.queryParams.subscribe(
            (params:Params)=>{
                if (params['registered']){
                //   теперь вы можете войти в систему используя свои данные
                } else if (params['accessDenied']){
                    // для начала авторизуйтесь в системе
                }
            }
        );
    }

    onLogin() {
        this.subscription = this.jwtService.login(this.form.value.username,this.form.value.password).subscribe(
            (result) => {
                this.router.navigate(['/admin/95cf36dc-7f1b-49a4-a927-f342718cb167/home'])
                this.dialogRef.close();
            },
            (error) => {
                alert(error.message);
            }
        );
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
