import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicAgComponent } from './dynamic-ag/dynamic-ag.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'dynamic-ag', component: DynamicAgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
