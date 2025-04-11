import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicGridModule } from 'projects/dynamic-grid/src/public-api';
import { DynamicAgComponent } from './dynamic-ag/dynamic-ag.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    ReactiveFormComponent,
    DynamicAgComponent   
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule, 
    DynamicGridModule,   
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
