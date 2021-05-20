import { Component, OnInit } from '@angular/core';

import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../services/contact.service';
import {Observable} from 'rxjs';
import {Category} from '../model/category.model';
import {Contact} from '../model/contact.model';
import {CategoryService} from '../services/category.service';
import {Member} from '../model/member.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  createContactForm: FormGroup;
  categories: Observable<Category[]>;

  constructor(private contactService: ContactService,private formBuilder: FormBuilder, private categoryServce: CategoryService) { }

  ngOnInit(): void {
    this.initForm();
    this.contact = new Contact();
    this.categories = this.categoryServce.getCategories();
    this.createContactForm.patchValue(this.contact);
  }

  get message(): AbstractControl | null { return this.createContactForm.get('message'); }
  get phone(): AbstractControl | null { return this.createContactForm.get('phone'); }
  get email(): AbstractControl | null { return this.createContactForm.get('email'); }
  get category(){ return this.createContactForm.get('category'); }

  initForm(){
    this.createContactForm = this.formBuilder.group({
      message: ['', [Validators.required,Validators.maxLength(130)]],
      phone: ['', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      email: ['', [Validators.email,Validators.required]],
      category: this.formBuilder.group(
        {
          id: ['', Validators.required],
        }
      )
    });
  }

  onAddContact() {
    this.contact = this.createContactForm.getRawValue();
    this.contactService.addContact(this.contact)
      .subscribe(
        (data)=>{
          console.log(data)
        },
        (e)=>{
          console.log(e)
        },
        ()=>{
          console.log('completion')
        }
      )
  }
}
