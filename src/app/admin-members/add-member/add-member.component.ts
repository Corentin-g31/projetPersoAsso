import { Component, OnInit } from '@angular/core';
import {MembersService} from '../../services/members.service';
import { Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Member} from '../../model/member.model';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  member: Member;
  addMemberForm: FormGroup;
  imageSrc: string = '';

  constructor(private membersService: MembersService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this. addMemberForm = this.formBuilder.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      phone: ['', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      email: ['', Validators.email],
    });
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
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  // @ts-ignore
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

  onAddMember() {
    const formValue = this.addMemberForm.value;
    this.member = new Member(
      formValue['surname'],
      formValue['name'],
      formValue['description'],
      formValue['phone'],
      formValue['email'],
      ""
    )
    if(this.imageSrc != ""){
     this.member.photo = this.imageSrc;
    }
    this.membersService.addMember(this.member);
  }
}
