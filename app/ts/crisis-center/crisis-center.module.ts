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
        CrisisListComponent
    ],
    exports: [RouterModule]
})
export class CrisisCenterModule {}




