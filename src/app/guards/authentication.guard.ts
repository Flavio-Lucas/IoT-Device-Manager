//#region Imports

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class AuthenticateGuard implements CanActivate {

  //#region Constructor

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) { }

  //#endregion

  //#region Public Methods

  public async canActivate(route: ActivatedRouteSnapshot, _: RouterStateSnapshot) {
    const { unprotectedRoute, protectedRoute, routeToRedirect } = route.data || {};

    if (!routeToRedirect)
      return true;

    const token = await this.authService.isAuthenticated();

    if (protectedRoute && token)
      return true;

    if (!token && unprotectedRoute)
      return true;

    return this.router.navigateByUrl(routeToRedirect);
  }

  //#endregion
}
