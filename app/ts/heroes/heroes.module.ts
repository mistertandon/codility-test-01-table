import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    HeroesListComponent
} from './heroes-list.component';

@NgModule({
    imports: [CommonModule],
		declarations: [HeroesListComponent]
})
export class HeroesModule {

}
