import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from '../../components/header/header.module';
import { SideNavigationBarModule } from '../../components/side-navigation-bar/side-navigation-bar.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SideNavigationBarModule,
  ]
})
export class HomeModule { }
