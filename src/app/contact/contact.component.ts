import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/contact.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  createContactForm: FormGroup;
  categories: ;

  constructor(private contactService: ContactService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.contact = new Contact();
  }

  initForm(){
    this.createContactForm = this.formBuilder.group({
      message: ['', [Validators.required,Validators.maxLength(130)]],
      phone: ['', Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      email: ['', [Validators.email,Validators.required]],
    });
  }

  onAddContact() {
    console.log("onaddcontact")
  }
}
