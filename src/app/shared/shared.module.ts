import {NgModule} from '@angular/core';
import {ProgressBarComponent} from "./components/progress-bar/progress-bar.component";



@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  exports: [
    ProgressBarComponent
  ],
  imports: []
})
export class SharedModule { }
