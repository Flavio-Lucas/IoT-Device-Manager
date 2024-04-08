import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { CreateRoutingModule } from './create-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CreateRoutingModule
  ],
  declarations: [
    CreateComponent,
  ],
  exports: [
    CreateComponent,
  ]
})
export class CreateModule { }
