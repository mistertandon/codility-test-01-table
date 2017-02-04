import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ADMIN_ROUTES)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
