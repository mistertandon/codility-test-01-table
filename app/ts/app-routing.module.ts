import {
    NgModule
} from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    CrisisCenterComponent
} from './crisis-center/crisis-center.component';

const APP_ROUTE: Routes = [{
    path: 'crisiscenter',
    component: CrisisCenterComponent
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
