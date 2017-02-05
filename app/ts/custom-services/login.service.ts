import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {

  public isLoggedIn: boolean = false;

  public constructor() {

  }

  public login(): Observable<boolean> {

    return Observable.of(true).delay(1000).do((value) => {

      this.isLoggedIn = value;
    });
  }

  public logout(): Observable<boolean> {

    return Observable.of(false).delay(1000).do((value) => {

      this.isLoggedIn = value;
    });
  }

  public checkUserLoginStatus(): boolean {

    return this.isLoggedIn;
  }

}
