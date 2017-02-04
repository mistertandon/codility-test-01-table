import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';

import { UserModule } from './user-module/user.module';

import { CrisisCenterModule } from './crisis-center/crisis-center.module';

import { ContactMessageComponent } from './contact/contact-message.component';

import { AdminModule } from './admin/admin.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        CrisisCenterModule,
        UserModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent, ContactMessageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
