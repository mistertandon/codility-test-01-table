import {
    NgModule
} from '@angular/core';

import {
    Routes,
    RouterModule
} from '@angular/router';

import {
    UserComponent
} from './user.component';

import {
    UserAddComponent
} from './user-add.component';

import {
    UserEditComponent
} from './user-edit.component';

import {
    UserEditResolverService
} from './../custom-services/user-edit-resolver.service';

const USERS_ROUTES: Routes = [{
    path: 'userslist',
    component: UserComponent,

    children: [{
        path: 'users',
        component: UserAddComponent
    }, {
        path: ':id',
        component: UserEditComponent,
        resolve: {
            user: UserEditResolverService
        }
    }]

}];

@NgModule({
    imports: [RouterModule.forChild(USERS_ROUTES)],
    exports: [RouterModule],
    providers: [UserEditResolverService]
})
export class UserRoutingModule {}
