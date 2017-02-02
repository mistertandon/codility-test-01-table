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

const USERS_ROUTES: Routes = [{
    path: 'userslist',
    component: UserComponent,

    children: [{
        path: 'adduser',
        component: UserAddComponent
    }]

}];

@NgModule({
    imports: [RouterModule.forChild(USERS_ROUTES)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
