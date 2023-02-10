import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./component/product/product.component";
import {ProductEditComponent} from "./component/product-edit/product-edit.component";


const routes: Routes = [
  {path:"",component:ProductComponent},
  {path:"edit/:id",component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
