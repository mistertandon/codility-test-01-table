import {
    Component,
    OnInit
} from '@angular/core';

import {
    Router
} from '@angular/router';

import {
    CrisisCenterClass
} from './../custom-classes/crisis-center.class';

import {
    CrisisCenterService
} from './crisis-center.service';

@Component({
    templateUrl: "app/ts/crisis-center/crisis-list.component.html",
    styleUrls: ["app/ts/crisis-center/crisis-list.component.css"],

})
export class CrisisListComponent implements OnInit {

    /**
     * crisisList: Used to store crisis information array.
     *
     **/
    public crisisList: CrisisCenterClass[];

    constructor(private CrisisCenterService_S: CrisisCenterService, private Router_S: Router) {

    }

    ngOnInit() {

        this.CrisisCenterService_S.getCrisisCenterList()
            .then(
                (crisisInfoArr) => {

                    this.crisisList = crisisInfoArr;
                });
    }

    /**
     * This funtion is used to redirect app to crisis center detail page.
     *
     */
    public renderCrisisCenterDetail(crisisInfo: CrisisCenterClass): void {

        this.Router_S.navigate(['/crisiscenter/detail']);

    }
}
