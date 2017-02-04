import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';

import { ManageHeroesComponent } from './manage-heroes.component';

import { ManageCrisisComponent } from './manage-crisis.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    ManageHeroesComponent,
    ManageCrisisComponent
  ]
})
export class AdminModule {

}
