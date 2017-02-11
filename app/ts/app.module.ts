import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HeroesModule } from './heroes/heroes.module';
import { UserModule } from './user-module/user.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { ContactMessageComponent } from './contact/contact-message.component';
import { AdminModule } from './admin/admin.module';
import { InteractionModule } from './interaction/interaction.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        LoginModule,
        HeroesModule,
        CrisisCenterModule,
        UserModule,
        AdminModule,
        InteractionModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent, ContactMessageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
