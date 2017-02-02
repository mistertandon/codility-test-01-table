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
    PostModule
} from './post-module/post.module';

import {
    AppComponent
} from './app.component';

import {
    HeroesModule
} from './heroes/heroes.module';

import {
    CrisisCenterModule
} from './crisis-center/crisis-center.module';

import {
    ContactMessageComponent
} from './contact/contact-message.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        CrisisCenterModule,
        PostModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent, ContactMessageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
