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

const USERS_ROUTES: Routes = [{
    path: 'users',
    component: UserComponent
}];

@NgModule({
    imports: [RouterModule.forChild(USERS_ROUTES)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
