import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute,
    Router
} from '@angular/router';

import {
    CrisisCenterClass
} from './../custom-classes/crisis-center.class';

@Component({
    templateUrl: "app/ts/crisis-center/crisis-center-detail.component.html",
    styleUrls: ["app/ts/crisis-center/crisis-center-detail.component.css"]
})
export class CrisisCenterDetailComponent implements OnInit {

    public crisisCenterDetail: CrisisCenterClass;

    public editCrisisCenterName: string;

    public constructor(private ActivatedRoute_S: ActivatedRoute, private Router_S: Router) {}

    ngOnInit(): void {

        this.ActivatedRoute_S.data
            .subscribe(
                (crisisInfoObj: {

                    crisis: CrisisCenterClass
                }) => {

                    this.crisisCenterDetail = crisisInfoObj.crisis;
                    this.editCrisisCenterName = crisisInfoObj.crisis.name;

                });
    }
}
