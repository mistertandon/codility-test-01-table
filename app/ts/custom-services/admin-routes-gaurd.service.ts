import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { LoginService } from './../custom-services/login.service';

@Injectable()
export class AdminRoutesGaurdService implements CanActivate {

  constructor(private Router_S: Router, private LoginService_S: LoginService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.checkUserLoginStatus();

  }

  /**
   * This function is used to validate user login state and return boolean true OR false for
   * corresponding.
   */
  private checkUserLoginStatus(): boolean {

    return this.LoginService_S.checkUserLoginStatus();

  }

}