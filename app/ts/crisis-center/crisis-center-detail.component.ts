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

    /**
     * This function is used to render crisis-center-detail.component view page, when user click on
     * <Go Back> button on crisis-center-detail.component view page.
     *
     */
    public renderHeroListComponent_HLCM() {

        this.Router_S.navigate(['/crisiscenter', {
            id: this.crisisCenterDetail.id
        }]);
    }


}
