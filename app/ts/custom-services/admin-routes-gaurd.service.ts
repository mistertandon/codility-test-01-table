import { Injectable } from '@angular/core';

import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';

export class AdminRoutesGaurdService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.validateUserLogin();
  }
  
  /**
   * This function is used to validate user login state and return boolean true OR false for
   * corresponding.
   */
  private validateUserLogin(): boolean {

    return false;
  }

}