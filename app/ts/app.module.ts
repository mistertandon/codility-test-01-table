import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';

import {
    RouterModule,
    Routes
} from '@angular/router';

import {
    AppComponent
} from './app.component';

import {
    HeroesListComponent
} from './heroes/heroes-list.component';

import {
    CrisisCenterComponent
} from './crisis-center/crisis-center.component';

const APP_ROUTE: Routes = [{
        'path': 'heroeslist',
        'component': HeroesListComponent
    }, {
        'path': 'crisiscenter',
        'component': CrisisCenterComponent
    }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTE)
    ],
    declarations: [
        AppComponent,
        HeroesListComponent,
        CrisisCenterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
