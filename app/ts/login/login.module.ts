import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(LOGIN_ROUTES)],
  declarations: [LoginComponent],
  exports: [RouterModule]
})
export class LoginModule {

}