import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeHomeComponent} from './employee-home/employee-home.component';
import {EmployeeDataComponent} from './employee-data/employee-data.component';
import {AuthGuard} from '../app/auth/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: EmployeeHomeComponent
  },
  {
    path: 'data', component: EmployeeDataComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
