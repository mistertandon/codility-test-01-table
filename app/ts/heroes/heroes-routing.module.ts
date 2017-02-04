import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HeroesListComponent } from './heroes-list.component';

import { HeroDetailComponent } from './hero-detail.component';

const HEROES_ROUTES: Routes = [{
    path: 'heroeslist',
    component: HeroesListComponent
}, {
    path: 'herodetail/:id',
    component: HeroDetailComponent
}];

@NgModule({
    imports: [RouterModule.forChild(HEROES_ROUTES)],
    exports: [RouterModule]

})
export class HeroesRoutingModule { }
