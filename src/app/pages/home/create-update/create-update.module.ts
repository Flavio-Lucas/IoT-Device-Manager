import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateComponent } from './create-update.component';
import { CreateUpdateRoutingModule } from './create-update-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CreateUpdateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateUpdateComponent,
  ],
  exports: [
    CreateUpdateComponent,
  ]
})
export class CreateUpdateModule { }
