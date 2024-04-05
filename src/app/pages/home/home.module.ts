import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import {HeaderModule} from "../../components/header/header.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeaderModule,
    ]
})
export class HomeModule { }
