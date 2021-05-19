import { Component, OnInit } from '@angular/core';
import {MembersService} from '../services/members.service';
import {Member} from '../model/member.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-members',
  templateUrl: './admin-members.component.html',
  styleUrls: ['./admin-members.component.scss']
})
export class AdminMembersComponent implements OnInit {
  members:Observable<Member[]>;

  constructor(private membersService : MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers()
  }

  onDeleteMember(member: Member) {
    if(confirm("Etes vous sur de vouloir supprimer " +member.surname + " " +member.name + " ?")){
      this.membersService.removeMember(member)
        .subscribe(
          (data)=>{
            console.log(data)
          },
          (e)=>{
            console.log(e);
          },
          ()=>{
            this.members = this.membersService.getMembers()
          }
        )
    }
  }
}
