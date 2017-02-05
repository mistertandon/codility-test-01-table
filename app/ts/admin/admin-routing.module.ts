import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { ManageHeroesComponent } from './manage-heroes.component';

import { ManageCrisisComponent } from './manage-crisis.component';

import { AdminRoutesGaurdService } from './../custom-services/admin-routes-gaurd.service';

const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminRoutesGaurdService],
    children: [
      {
        path: 'heroes',
        component: ManageHeroesComponent
      },
      {
        path: 'crisis',
        component: ManageCrisisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule],
  providers: [AdminRoutesGaurdService]
})
export class AdminRoutingModule {

}
