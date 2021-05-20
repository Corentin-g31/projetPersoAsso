import {Injectable} from '@angular/core';
import {Member} from '../model/member.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

const URL = environment.URLEndPoint;

@Injectable()
export class MembersService {
  members: Member[] =[];


  constructor(private http: HttpClient,private router: Router) {
  }

  saveMembers(){
    this.http.put(URL + "/member", this.members,{ withCredentials: true });
  }

  getMembers(){
    return this.http.get<Member[]>(URL +"/members", { withCredentials:true});
  }

  getMember(id:number) {
    return this.http.get<Member>(URL +"/member/"+id, { withCredentials:true})
      .toPromise();
  }

  changeMember(member: Member){
   return this.http.put(URL + "/member/"+member.id, JSON.stringify(member),{ withCredentials: true,responseType: 'text'})
     .subscribe(
       (data)=>{
         console.log(data)
       },
       (e)=>{
         console.log(e);
       },
       ()=>{
         this.router.navigate(['/adminMembers']);
       }
     )

  }

  removeMember(member: Member) {
    return this.http.delete(URL + "/member/"+member.id,{ withCredentials: true,responseType: 'text'})

  }


  addMember(member: Member) {
    return this.http.post(URL + "/member", member,{ withCredentials: true,responseType: 'text'})

  }
}
