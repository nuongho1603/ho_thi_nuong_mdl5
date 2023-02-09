import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProManagementComponent } from './pro-management/pro-management.component';
import { ProEditComponent } from './pro-edit/pro-edit.component';
import { ProDeleteComponent } from './pro-delete/pro-delete.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProManagementComponent,
    ProEditComponent,
    ProDeleteComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
