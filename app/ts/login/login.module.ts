import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginService } from './../custom-services/login.service';

import { LoginComponent } from './login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  exports: [RouterModule],
  providers: [LoginService]
})
export class LoginModule {

}