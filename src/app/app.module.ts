import { LOCALE_ID, NgModule } from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser'

import {AppComponent} from './app.component'
import {AppRoutingModule} from './app-routing.module'
import {JwtModule} from "./jwt/jwt.module";
import {SharedModule} from "./shared/shared.module";
import {HomeComponent} from './home/home.component';
import {TokenInterceptor} from "./shared/classes/token.interceptor";
import {MatTableModule} from "@angular/material/table";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    JwtModule,

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      multi:true,
      useClass:TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {

  }

}

