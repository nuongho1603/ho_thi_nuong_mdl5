import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {EmployeeListComponent} from "./component/employee/employee-list/employee-list.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {CustomerViewComponent} from "./component/customer/customer-view/customer-view.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"facility",component:FacilityListComponent},
  {path:"facility/edit/:id",component:FacilityEditComponent},
  {path:"create",component:FacilityCreateComponent},
  {path:"employee",component:EmployeeListComponent},
  {path:"customer",component:CustomerListComponent},
  {path:"customer/edit/:id",component:CustomerEditComponent},
  {path:"customer/view/:id",component:CustomerViewComponent},
  {path:"contract",component:ContractListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
