import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FacilityListComponent} from "./component/facilityv/facility-list/facility-list.component";
import {HomeComponent} from "./home/home.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {ContractCreateComponent} from "./component/contract/contract-create/contract-create.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"facility",component:FacilityListComponent},
  // {path:"home",component:FacilityListComponent},
  {path:"customer",component:CustomerListComponent},
  {path:"contract",component:ContractCreateComponent},
  // {path:"employee",component:FacilityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
