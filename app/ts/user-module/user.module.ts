import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    HttpModule,
    JsonpModule
} from '@angular/http';

import {
    UserRoutingModule
} from './user-routing.module';

import {
    UserService
} from './../custom-services/user.service';

import {
    UserComponent
} from './user.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        UserRoutingModule
    ],
    declarations: [UserComponent],
    providers: [
        UserService
    ]

})
export class UserModule {}
