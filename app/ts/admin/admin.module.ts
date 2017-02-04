import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ADMIN_ROUTES)],
  declarations: [AdminComponent]
})
export class AdminModule {

}
