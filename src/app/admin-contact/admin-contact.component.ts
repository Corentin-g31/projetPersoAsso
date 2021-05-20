import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactService } from '../services/contact.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Category } from '../model/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.scss']
})
export class AdminContactComponent implements OnInit {
  contacts: Observable<Contact[]>;
  categories: Observable<Category[]>;
  selectedOption: any;
  constructor(private contactService: ContactService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.categories = this.categoryService.getCategories();
    this.selectedOption = '';
  }

  onDeleteContact(id: number): void {
    this.contactService.deleteContact(id).subscribe(
      (data) => {
        console.log(data);
      },
      (e) => {
        console.log(e);
      },
      () => {
        console.log('suppression effectuée avec succès.');
      }
    );
  }

  filtered(contact: Contact): boolean {
    if (this.selectedOption === '') {
      return true;
    } else if (contact.category.id === this.selectedOption) {
      return true;
    }
    return false;
  }
}
