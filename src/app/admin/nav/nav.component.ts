import { Component, OnInit } from '@angular/core';
import {JwtService} from "../../shared/services/jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'pp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private readonly jwt:JwtService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.jwt.logout();
    this.router.navigate([""]);
  }


}
