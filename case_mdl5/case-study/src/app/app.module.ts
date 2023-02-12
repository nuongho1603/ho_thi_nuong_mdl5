import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';

import { FacilityListComponent } from './component/facilityv/facility-list/facility-list.component';
import { FacilityEditComponent } from './component/facilityv/facility-edit/facility-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FacilityCreateComponent } from './component/facilityv/facility-create/facility-create.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './component/customer/customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import { HomeComponent } from './home/home.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,

    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent,
    ContractCreateComponent,
    HomeComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
