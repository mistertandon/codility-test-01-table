import {
    Injectable
} from '@angular/core';

import {
    Observable
} from 'rxjs/Observable';

import {
    Subscription
} from 'rxjs/Subscription';

import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';

import {
    UserService
} from './../custom-services/user.service';

import {
    UserEditFormObject_I
} from './../custom-interfaces/user-class.interface';

@Injectable()
export class UserEditResolverService implements Resolve < UserEditFormObject_I > {

    constructor(private UserService_S: UserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < UserEditFormObject_I > {

        let userId: number = +route.params['id'];

        return this.UserService_S.getUserDetail_USM(userId);

    }

}
