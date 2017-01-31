import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    FormsModule
} from '@angular/forms';

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
        FormsModule,
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
