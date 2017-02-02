import {
    Injectable
} from '@angular/core';

import {
    Http,
    Headers,
    RequestMethod,
    RequestOptions,
    Response
} from '@angular/http';

import {
    Observable
} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import {
    Subscription
} from 'rxjs/Subscription';

@Injectable()
export class UserService {

    private UserRestAPI = "https://reqres.in/api/users?page=3";

    constructor(private Http_S: Http) {}

    /**
     * This function is used to retireve user list from UserRestAPI.
     *
     */
    getUsersList_USM(): Observable < Subscription[] > {

        return this.Http_S.get(this.UserRestAPI).map(this.extractData);

    }

    /**
     * This function is used to extract data property from the Http response
     * object.
     *
     */
    public extractData(res: Response) {

        let body = res.json();

        return body.data || {}
    }

    /**
     * This function is used to add user using POST request.
     *
     */
    public addUser_USM(userInfo: any): Observable < Response > {

        let headersOpt: Headers;
        let requestOptions: RequestOptions;

        headersOpt = new Headers({

            'Content-Type': 'application/json'
        });

        requestOptions = new RequestOptions({

            headers: headersOpt,
            method: RequestMethod.Post,
            url: 'https://reqres.in/api/users'
        })

        return this.Http_S.post(requestOptions.url, userInfo, requestOptions)
            .map(this.extractData);

    }

}
