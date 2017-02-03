import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute
} from '@angular/router';

import {
    UserEditFormObject_I
} from './../custom-interfaces/user-class.interface';

import {
    UserService
} from './../custom-services/user.service';

@Component({
    templateUrl: "app/ts/user-module/user-edit.component.html",
    styleUrls: ["app/ts/user-module/user-edit.component.css"]
})
export class UserEditComponent implements OnInit {

    constructor(private ActivatedRoute_S: ActivatedRoute, private UserService_S: UserService) {}

    ngOnInit(): void {

        this.ActivatedRoute_S.data
            .subscribe((editedUserData: {
                user: UserEditFormObject_I
            }) => {

                console.log(editedUserData);
            });
    }
}
