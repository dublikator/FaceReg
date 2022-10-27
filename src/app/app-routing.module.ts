import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./shared/classes/auth.guard";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule )},
  { path: 'recognize', loadChildren: () => import('./recognize/recognize.module').then(m => m.RecognizeModule ) },
]

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
