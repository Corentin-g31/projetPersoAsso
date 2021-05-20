import { Injectable } from '@angular/core';
import { Member } from '../model/member.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const URL = environment.URLEndPoint;

@Injectable()
export class MembersService {
  members: Member[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  saveMembers(): void {
    this.http.put(URL + '/api/member', this.members, { withCredentials: true });
  }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(URL + '/members', { withCredentials: true });
  }

  getMember(id: number): Promise<Member> {
    return this.http.get<Member>(URL + '/member/' + id, { withCredentials: true })
      .toPromise();
  }

  changeMember(member: Member): Subscription {
    return this.http.put(URL + '/member/' + member.id, JSON.stringify(member), { withCredentials: true, responseType: 'text' })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (e) => {
          console.log(e);
        },
        () => {
          this.router.navigate(['/adminMembers']);
        }
      );
  }

  removeMember(member: Member): Observable<any> {
    return this.http.delete(URL + '/member/' + member.id, { withCredentials: true, responseType: 'text' });
  }

  addMember(member: Member): Observable<any> {
    return this.http.post(URL + '/member', member, { withCredentials: true, responseType: 'text' });
  }
}
