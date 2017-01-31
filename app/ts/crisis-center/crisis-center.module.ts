import {
    NgModule,
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    RouterModule
} from '@angular/router';

import {
    CrisisCenterRoutingModule
} from './crisis-center-routing.module';

import {
    CrisisCenterService
} from './crisis-center.service';

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

@NgModule({
    imports: [
        CommonModule,
        CrisisCenterRoutingModule,
        RouterModule
    ],
    providers: [
        CrisisCenterService
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisCenterHomeComponent,
        CrisisCenterDetailComponent
    ],
    exports: [RouterModule]
})
export class CrisisCenterModule {}
