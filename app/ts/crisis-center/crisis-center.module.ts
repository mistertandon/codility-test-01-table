import {
    NgModule,
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

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
    } 
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CRISIS_ROUTES)
    ],
    declarations: [CrisisCenterComponent],
    exports: [RouterModule]
})
export class CrisisCenterModule {}
