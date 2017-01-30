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
    HeroesModule as HeroesFeaturedModule
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
        HeroesFeaturedModule
    ],
    declarations: [
        AppComponent,
        CrisisCenterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
