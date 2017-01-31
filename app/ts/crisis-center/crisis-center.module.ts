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

@NgModule({
    imports: [
        CommonModule,
        CrisisCenterRoutingModule
    ],
    providers: [CrisisCenterService],
    declarations: [CrisisCenterComponent],
})
export class CrisisCenterModule {}
