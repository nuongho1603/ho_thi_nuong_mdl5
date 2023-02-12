import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {StudentComponent} from "./component/student/student.component";
import {StudenEditComponent} from "./component/studen-edit/studen-edit.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"student",component:StudentComponent},
  {path:"edit/:id",component:StudenEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
