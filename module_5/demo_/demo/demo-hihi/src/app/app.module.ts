import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { StudentCreateComponent } from './component/student-create/student-create.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
