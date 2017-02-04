import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdminRoutesGaurdService implements CanActivate {

  constructor(private Router_S: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.validateUserLogin();
  }

  /**
   * This function is used to validate user login state and return boolean true OR false for
   * corresponding.
   */
  private validateUserLogin(): boolean {

    if (true) {

      this.Router_S.navigate(['login']);

      return true;

    }
  }

}