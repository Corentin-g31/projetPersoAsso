import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Contact} from '../model/contact.model';
import {Member} from '../model/member.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


const URL = environment.URLEndPoint;
@Injectable()
export class ContactService {


  constructor(private http: HttpClient) {
  }

  getContacts() {
    return this.http.get<Contact[]>(URL +"/contact", { withCredentials:true});
  }

  deleteContact(id:number){
    return this.http.delete(URL+'/contact/'+id, {withCredentials:true, responseType: 'text'});
  }
}
