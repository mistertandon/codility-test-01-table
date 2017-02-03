import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';
import {
    Subscription
} from 'rxjs/Subscription';

import {
    UserService
} from './../custom-services/user.service';

@Component({
    templateUrl: "app/ts/user-module/user.component.html",
    styleUrls: ["app/ts/user-module/user.component.css"]
})
export class UserComponent implements OnInit {

    public users: Subscription[];

    public constructor(private UserService_S: UserService, private Router_S: Router, private ActivatedRoute_S: ActivatedRoute) {}

    ngOnInit(): void {

        this.getUsersList();
    }

    /**
     * This function is used to retrieve users list using UserService.
     *
     */
    public getUsersList(): void {

        this.UserService_S.getUsersList_USM().subscribe(userListArr => {

            this.users = userListArr;
        });

    }

    public activateUserEditRoute(userId: number | string): void {

				/**
         * This is an alternative way to navigate user-edit.component
         *
       	 * this.Router_S.navigate(['userslist', userId]);
         */

        this.Router_S.navigate([userId], {relativeTo: this.ActivatedRoute_S});

    }

}
