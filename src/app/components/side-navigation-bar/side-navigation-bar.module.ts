import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavigationBarComponent } from './side-navigation-bar.component';
import { SvgDisplayModule } from '../svg-display/svg-display.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SvgDisplayModule,
    ],
  declarations: [
    SideNavigationBarComponent,
  ],
  exports: [
    SideNavigationBarComponent,
  ]
})
export class SideNavigationBarModule {}
