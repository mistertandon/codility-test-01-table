import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    HeroesListComponent
} from './heroes-list.component';

const HEROES_ROUTES: Routes = [{
    path: 'heroeslist',
    component: HeroesListComponent
}];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(HEROES_ROUTES)],
		declarations: [HeroesListComponent],
    exports: [RouterModule]

})
export class HeroesModule {

}
