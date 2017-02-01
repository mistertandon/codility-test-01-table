import {
    Component,
    OnInit
} from '@angular/core';

import {
    Router,
    ActivatedRoute,
    Params
} from '@angular/router';

import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

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

    public selectedCrisisCenterId: number;

    constructor(

        private CrisisCenterService_S: CrisisCenterService,
        private Router_S: Router,
        private ActivatedRoute_S: ActivatedRoute
    ) {

    }

    ngOnInit() {

        this.ActivatedRoute_S.params
            .switchMap((params: Params) => {

                this.selectedCrisisCenterId = +params['id'];

                return this.CrisisCenterService_S.getCrisisCenterList();

            }).subscribe((res: CrisisCenterClass[]) => {

                this.crisisList = res;
            });

    }

    /**
     * This funtion is used to redirect app to crisis center detail page.
     *
     */
    public renderCrisisCenterDetail(crisisInfo: CrisisCenterClass) {

        this.Router_S.navigate([crisisInfo.id], {
            relativeTo: this.ActivatedRoute_S
        });

    }

    /**
     * This function is used to determine that currently passed crisis center id 
     * recently	has been seleted or not.
     *
     **/
    public isSelectedCrisisCenter_CLCM(CrisisCenterId: number): boolean {

        let selectedCrisisCenterId: number = (this.selectedCrisisCenterId) ? this.selectedCrisisCenterId : null;

        return CrisisCenterId === selectedCrisisCenterId ? true : false;

    }




}
