import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Admin} from '../model/admin.model';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';


// const LOGIN_URL = 'http://bsolidarite.corentin-gibrat.fr/api/login_check';
const LOCAL_URL = 'https://localhost:8000/api/login_check';

@Injectable()

export class AuthService{

  isAuth : Boolean = false;

  constructor(private http: HttpClient) {
  }


  login(username: string, password: string){
    return this.http.post(LOCAL_URL, {username, password},{ observe: 'response', withCredentials: true });
  }

}
