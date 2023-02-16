import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ListComponent} from './component/list/list.component';
import {EditComponent} from './component/edit/edit.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'benhAn', component: ListComponent},
  {path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
