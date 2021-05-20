import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';

const URL = environment.URLEndPoint;

@Injectable()
export class ProjectsService {


  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(URL+ '/public/project');
  }

  addProject(project: Project) {
    return this.http.post(URL+'/project', project, {withCredentials: true})
  }
}
