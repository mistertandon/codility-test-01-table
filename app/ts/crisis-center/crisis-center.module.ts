import {
    NgModule,
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

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
        CrisisCenterRoutingModule
    ],
    providers: [CrisisCenterService],
    declarations: [CrisisCenterComponent, CrisisListComponent],
})
export class CrisisCenterModule {}
