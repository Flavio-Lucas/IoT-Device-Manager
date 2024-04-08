import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import {SvgDisplayModule} from "../svg-display/svg-display.module";

@NgModule({
    imports: [
        CommonModule,
        SvgDisplayModule,
    ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {}
