import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';

const URL = environment.URLEndPoint;

@Injectable()
export class MembersService {


  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]>{
    return this.http.get(URL+ '/public/project');
  }

}
