import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {
  private _baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this._baseUrl + url);
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(this._baseUrl + url, data);
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(this._baseUrl + url, data);
  }

  delete(url: string) {
    this.http.delete<any>(this._baseUrl + url);
  }
}