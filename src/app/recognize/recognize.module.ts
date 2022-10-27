import {NgModule} from '@angular/core'
import {CommonModule} from "@angular/common";
import {RecognizeRoutingModule} from "./recognize-routing.module";
import {RecognizeComponent} from "./recognize.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        RecognizeComponent,
    ],
    exports: [
        RecognizeComponent,
    ],
    imports: [
        CommonModule,
        RecognizeRoutingModule,
        SharedModule,
    ],
    providers: []
})
export class RecognizeModule {

}
