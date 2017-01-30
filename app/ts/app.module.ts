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
    HeroesListComponent
} from './heroes/heroes-list.component';

import {
    CrisisCenterComponent
} from './crisis-center/crisis-center.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesListComponent,
        CrisisCenterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
