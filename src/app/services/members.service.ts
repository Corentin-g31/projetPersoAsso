import {Injectable} from '@angular/core';
import {Member} from '../model/member.model';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

const URL = 'https://localhost:8000';

@Injectable()
export class MembersService {
  members: Member[] =[];


  constructor(private http: HttpClient,private router: Router) {
  }

  saveMembers(){
    this.http.put(URL + "/api/member", this.members,{ withCredentials: true });
  }

  getMembers(){
    return this.http.get<Member[]>(URL +"/api/members", { withCredentials:true});
  }

  getMember(id:number) {
    return this.http.get<Member>(URL +"/api/member/"+id, { withCredentials:true})
      .toPromise();
  }

  changeMember(member: Member){
   return this.http.put(URL + "/api/member/"+member.id, JSON.stringify(member),{ withCredentials: true,responseType: 'text'})
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
    console.log(member.id);
    console.log(URL + "/api/member/"+member.id);
    return this.http.delete(URL + "/api/member/"+member.id,{ withCredentials: true,responseType: 'text'})

  }


  addMember(member: Member) {
    return this.http.post(URL + "/api/member", JSON.stringify(member),{ withCredentials: true,responseType: 'text'})
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
}
