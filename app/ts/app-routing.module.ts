import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ContactMessageComponent } from './contact/contact-message.component';

const APP_ROUTE: Routes = [{
    path: 'contact',
    component: ContactMessageComponent,
    outlet: 'popup'
}, {
    path: '',
    redirectTo: '/heroeslist',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTE)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
