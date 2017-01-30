import {
    NgModule
} from '@angular/core';

import {
    BrowserModule
} from '@angular/platform-browser';

import {
    FormsModule
} from '@angular/forms';

import {
    AppRoutingModule
} from './app-routing.module';

import {
    AppComponent
} from './app.component';

import {
    HeroesModule
} from './heroes/heroes.module';

import {
    HeroesListComponent
} from './heroes/heroes-list.component';

import {
    CrisisCenterComponent
} from './crisis-center/crisis-center.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HeroesModule
    ],
    declarations: [
        AppComponent,
        CrisisCenterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
