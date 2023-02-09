import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProManagementComponent} from "./pro-management/pro-management.component";
import {ProEditComponent} from "./pro-edit/pro-edit.component";
import {ProDeleteComponent} from "./pro-delete/pro-delete.component";


const routes: Routes = [
  {path:"",component: ProManagementComponent},
  {path:"edit/:id",component: ProEditComponent},
  {path:"delete/:id",component: ProDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
