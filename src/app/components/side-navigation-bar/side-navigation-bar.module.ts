import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationBarComponent } from './side-navigation-bar.component';
import {RouterModule} from "@angular/router";
import {SvgDisplayModule} from "../svg-display/svg-display.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SvgDisplayModule
    ],
  declarations: [
    SideNavigationBarComponent,
  ],
  exports: [
    SideNavigationBarComponent,
  ]
})
export class SideNavigationBarModule {}
