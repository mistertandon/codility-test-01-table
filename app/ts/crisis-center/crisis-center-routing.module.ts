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

const CRISIS_ROUTES: Routes = [{
    path: 'crisiscenter',
    component: CrisisCenterComponent
}];

@NgModule({
    imports: [RouterModule.forChild(CRISIS_ROUTES)],
    exports: [RouterModule]
})
export class CrisisCenterRoutingModule {

}
