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
    ReactiveFormsModule
} from '@angular/forms';

import {
    UserRoutingModule
} from './user-routing.module';

import {
    UserService
} from './../custom-services/user.service';

import {
    UserComponent
} from './user.component';

import {
    UserAddComponent
} from './user-add.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent,
        UserAddComponent
    ],
    providers: [
        UserService
    ]

})
export class UserModule {}
