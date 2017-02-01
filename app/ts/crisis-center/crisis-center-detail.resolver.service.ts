import {
    Injectable
} from '@angular/core';

import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Resolve
} from '@angular/router';

import {
    CrisisCenterClass
} from './../custom-classes/crisis-center.class';

import {
    CrisisCenterService
} from './crisis-center.service';

@Injectable()
    //export class CrisisCenterResolverService implements Resolve<CrisisCenterClass> {
export class CrisisCenterDetailResolverService {

    public constructor(
        private CrisisCenterService_S: CrisisCenterService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
				
				console.log(route.params['id']);
				
    }
}
