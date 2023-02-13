import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import { HomeComponent } from './home/home.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { EmployeeListComponent } from './component/employee/employee-list/employee-list.component';
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {HttpClientModule} from "@angular/common/http";
import { CustomerViewComponent } from './component/customer/customer-view/customer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,

FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    HomeComponent,
    ContractListComponent,
    EmployeeListComponent,
    CustomerViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
