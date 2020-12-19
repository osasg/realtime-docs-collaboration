import { CanActivateChild, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { trace } from '@angular/fire/performance';

@Injectable()
export class NoAuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private _auth: AngularFireAuth,
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._auth.authState
      .pipe(
        trace('auth'),
        map(u => !!u),
        map(isAuthenticated => {
          console.log(isAuthenticated);
          if (!isAuthenticated)
            return true;
          this._router.navigate(['/']);
        })
      );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
