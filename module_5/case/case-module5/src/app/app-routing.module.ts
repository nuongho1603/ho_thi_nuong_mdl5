import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {path: "facility", component: FacilityListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
