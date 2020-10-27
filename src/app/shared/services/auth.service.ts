import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

import { DataService } from './data.service';
import { IUser, Role } from '../models';

@Injectable()
export class AuthService {
  private _user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);
  private _userObservable = this._user.asObservable();

  constructor(
    private _dataService: DataService,
    private _router: Router
  ) {
    this.loadUserFromLocalStorage();
  }

  getUser(): Observable<IUser> {
    return this._userObservable;
  }

  setUser(user: IUser): void {
    this._user.next(user);
  }

  getAccessToken(): Observable<string> {
    return this._userObservable.pipe(
      take(1),
      map(user => user && user.accessToken)
    );
  }

  handleAuthentication(userRes: IUser): void {
    if (!(userRes))
      return;

    this.setUser(userRes);
    localStorage.setItem('user', JSON.stringify(userRes));
  }

  signOut(): void {
    this.setUser(null);
    localStorage.removeItem('user');
    this._router.navigate(['/']);
  }

  signIn(email: string, password: string): Observable<any> {
    return this._dataService.post<any>('/login', {
      identifier: email, password
    })
      .pipe(
        map(authRes => {
          if (authRes.user) {
            this.handleAuthentication(authRes);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  signUp(email: string, password: string, role: Role): Observable<IUser> {
    return this._dataService.post<IUser>('/register', {
      username: email, email, password, auth_role: role
    })
      .pipe(
        tap(authRes => {
          this.handleAuthentication(authRes);
        })
      );
  }

  loadUserFromLocalStorage(): void {
    const user: IUser = JSON.parse(localStorage.getItem('user'));
    if (!user)
      return;
    this.setUser(user);
  }

  isAuthenticated(): Observable<boolean> {
    return this.getUser()
      .pipe(
        map(user => {
          return !!user;
        })
      );
  }

  hasRole(role: Role): Observable<boolean> {
    return this.getUser()
      .pipe(
        map(user => user.roles.includes(role))
      );
  }
}