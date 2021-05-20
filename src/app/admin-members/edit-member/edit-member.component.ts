import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersService } from '../../services/members.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Member} from '../../model/member.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  member: Member;
  memberForm: FormGroup;
  imageSrc = '';

  constructor(private membersService: MembersService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {

    this.membersService.getMember(+this.route.snapshot.params.id).then(
      (member: Member) => {
        this.member = member;
        this.memberForm.patchValue(member);
      }
    );

  }

  get surname(): AbstractControl | null { return this.memberForm.get('surname'); }
  get name(): AbstractControl | null { return this.memberForm.get('name'); }
  get description(): AbstractControl | null { return this.memberForm.get('description'); }
  get phone(): AbstractControl | null { return this.memberForm.get('phone'); }
  get email(): AbstractControl | null { return this.memberForm.get('email'); }

  initForm(): void {
    this.memberForm = this.formBuilder.group({
      id: [],
      surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      description: ['', [Validators.required, Validators.maxLength(130)]],
      phone: ['', Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      email: ['', [Validators.email, Validators.required]],
    });
  }

  onEditMember(): void {
    const changeMember: Member = this.memberForm.getRawValue();

    if (this.imageSrc !== ''){
      changeMember.photo = this.imageSrc;
    }

    this.membersService.changeMember(changeMember);
  }


  // @ts-ignore
  handleInputChange(e): void {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  // @ts-ignore
  handleReaderLoaded(e): void {
    const reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc);
  }
}
