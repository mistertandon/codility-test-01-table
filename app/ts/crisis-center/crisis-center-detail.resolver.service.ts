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
export class CrisisCenterDetailResolverService implements Resolve < CrisisCenterClass > {

    public constructor(

        private CrisisCenterService_S: CrisisCenterService

    ) {}

    /**
     * resolve function definition is developed as we have implemented Resolve interface into
     * this class. Here we'll retrieve crisis center detail on user has clicked showed on
     * crisis-list.component.html page.
     */

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let crisisCenterId: number = +route.params['id'];
        let crisisCenterRes: CrisisCenterClass;

        return this.CrisisCenterService_S.getCrisisCenterDetail_CCSM(crisisCenterId).then((crisisCenterRecord: CrisisCenterClass) => {

            return crisisCenterRecord;
        });
    }
}
