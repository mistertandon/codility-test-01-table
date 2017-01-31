import {
    NgModule,
} from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    CrisisCenterComponent
} from './crisis-center.component';

import {
    CrisisListComponent
} from './crisis-list.component';

import {
    CrisisCenterHomeComponent
} from './crisis-center-home.component';

import {
    CrisisCenterDetailComponent
} from './crisis-center-detail.component';

const CRISIS_ROUTES: Routes = [{
    path: 'crisiscenter',
    component: CrisisCenterComponent,
    children: [{
        path: "",
        component: CrisisListComponent,
        children: [{
            path: "",
            component: CrisisCenterHomeComponent
        }, {
            path: 'detail',
            component: CrisisCenterDetailComponent
        }]
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(CRISIS_ROUTES)],
    exports: [RouterModule]
})
export class CrisisCenterRoutingModule {

}
