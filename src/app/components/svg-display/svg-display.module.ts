import {NgModule} from "@angular/core";
import {SvgDisplayComponent} from "./svg-display.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SvgDisplayComponent,
  ],
  exports: [
    SvgDisplayComponent,
  ]
})
export class SvgDisplayModule { }
