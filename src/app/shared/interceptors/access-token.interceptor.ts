import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this._authService.getAccessToken()
      .pipe(
        mergeMap(accessToken => {
          if (accessToken)
            req = req.clone({
              headers: req.headers.append('Authorization', `Bearer ${accessToken}`)
            });

          return next.handle(req);
        })
      );
  }
}