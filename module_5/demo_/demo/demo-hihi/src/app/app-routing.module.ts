import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {StudentEditComponent} from './component/student-edit/student-edit.component';
import {StudentListComponent} from './component/student-list/student-list.component';
import {StudentCreateComponent} from './component/student-create/student-create.component';





const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentListComponent},
  {path: 'student/edit/:id', component: StudentEditComponent},
  {path: 'student/create', component: StudentCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
