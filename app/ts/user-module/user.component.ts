import {
    Component,
    OnInit
} from '@angular/core';

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

    public constructor(private UserService_S: UserService) {}

    ngOnInit(): void {

        this.getUsersList();
    }

    /**
     * This function is used to retrieve users list using UserService.
     *
     */
    public getUsersList(): void {

        this.UserService_S.getUsersList_USM().subscribe(userListArr => {
console.log(this.users);
            this.users = userListArr;
        });

    }
}
