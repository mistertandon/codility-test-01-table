import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';
import {
    HeroesRoutingModule
} from './heroes-routing.module';

import {
    HeroesService
} from './../custom-services/heroes.service';

import {
    HeroesListComponent
} from './heroes-list.component';

import {
    HeroDetailComponent
} from './hero-detail.component';

@NgModule({
    imports: [
        CommonModule,
        HeroesRoutingModule
    ],
    declarations: [
        HeroesListComponent,
        HeroDetailComponent
    ],
    providers: [HeroesService],
})
export class HeroesModule {

}
