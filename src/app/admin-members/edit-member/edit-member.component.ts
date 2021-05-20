import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MembersService} from '../../services/members.service';
import {Member} from '../../model/member.model';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  member: Member;
  memberForm: FormGroup;
  imageSrc: string = '';

  constructor(private membersService: MembersService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {

    this.membersService.getMember(+this.route.snapshot.params['id']).then(
      (member:Member) =>{
        this.member= member;
        this.memberForm.patchValue(member);
      }
    )

  }

  get surname() { return this.memberForm.get('surname'); }
  get name() {return this.memberForm.get('name');}
  get description() {return this.memberForm.get('description');}
  get phone() {return this.memberForm.get('phone');}
  get email() {return this.memberForm.get('email');}

  initForm(){
    this.memberForm = this.formBuilder.group({
      id: [],
      surname: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      name: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required,Validators.maxLength(130)]],
      phone: ['', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      email: ['', [Validators.email,Validators.required]],
    });
  }

  onEditMember() {
    let changeMember: Member = this.memberForm.getRawValue();

    if(this.imageSrc != ""){
      changeMember.photo = this.imageSrc;
    }

    this.membersService.changeMember(changeMember)
  }


  // @ts-ignore
  handleInputChange(e) {
    let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  // @ts-ignore
  handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }


}
