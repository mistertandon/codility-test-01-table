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

import {
    UserClassInterface,
    UserEditFormObject_I
} from './../custom-interfaces/user-class.interface';

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

        console.log(res);
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


    public getUserDetail_USM(userId: number): Observable < UserEditFormObject_I > {

        let requestOptions: RequestOptions;

        requestOptions = new RequestOptions({

            method: RequestMethod.Get,
            url: `https://reqres.in/api/users/${ userId }`
        });

        return this.Http_S.get(requestOptions.url, requestOptions)
            .map(this.extractData);
    }

		/**
     * This function is used to update user info by posting user
     * information to RestAPI.
     */
    public postUserDetail_USM(userInfo: UserClassInterface): Observable < Response > {

        let requestOptions: RequestOptions;

        requestOptions = new RequestOptions({

            method: RequestMethod.Put,
            //url: `https://reqres.in/api/users/${ userInfo.id }`
            url: `https://reqres.in/api/users/2`
        });
console.log(userInfo);
        return this.Http_S.put(requestOptions.url, userInfo, requestOptions)
            .map(this.extractData);
    }








}
