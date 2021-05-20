import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from '../model/admin.model';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

const URL = environment.URLEndPoint;

@Injectable()

export class AuthService {

  isAuth = false;

  constructor(private http: HttpClient) {
  }


  login(username: string, password: string): Observable<any> {
    return this.http.post(URL + '/login_check', { username, password }, { observe: 'response', withCredentials: true });
  }

}
