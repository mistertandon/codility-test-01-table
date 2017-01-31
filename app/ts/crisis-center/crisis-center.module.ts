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
    CrisisCenterComponent
} from './crisis-center.component';

@NgModule({
    imports: [
        CommonModule,
        CrisisCenterRoutingModule
    ],
    declarations: [CrisisCenterComponent],
})
export class CrisisCenterModule {}
