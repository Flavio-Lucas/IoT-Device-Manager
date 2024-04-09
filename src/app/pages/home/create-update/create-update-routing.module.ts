import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateComponent } from './create-update.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateUpdateRoutingModule { }
