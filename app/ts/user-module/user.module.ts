import {
    NgModule
} from '@angular/core';

import {
    CommonModule
} from '@angular/common';

import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    UserComponent
} from './user.component';

const USERS_ROUTES: Routes = [{
    path: 'users',
    component: UserComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(USERS_ROUTES)
    ],
    declarations: [UserComponent],
    exports: [RouterModule]

})
export class UserModule {}
