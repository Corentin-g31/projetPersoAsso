import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Contact} from '../model/contact.model';


const URL = environment.URLEndPoint;
@Injectable()
export class ContactService {


  constructor(private http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(URL + '/contact', { withCredentials: true});
  }

  deleteContact(id: number): Observable<any>{
    return this.http.delete(URL + '/contact/' + id, {withCredentials: true, responseType: 'text'});
  }

  addContact(contact: Contact) {
    return this.http.post(URL+'/public/contact', contact );
  }
}
