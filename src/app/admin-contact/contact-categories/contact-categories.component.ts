import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../model/category.model';
import { CategoryService } from '../../services/category.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-categories',
  templateUrl: './contact-categories.component.html',
  styleUrls: ['./contact-categories.component.scss']
})
export class ContactCategoriesComponent implements OnInit {
  categories: Observable<Category[]>;
  categoryForm: FormGroup;
  category: Category;
  constructor(private categoryService: CategoryService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.categories = this.categoryService.getCategories();
    this.category = new Category();
    this.categoryForm.patchValue(this.category);
  }

  get name(): AbstractControl | null { return this.categoryForm.get('name'); }

  onAddCategory(): void {
    this.category = this.categoryForm.getRawValue();
    this.categoryService.addCategory(this.category)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('completion');
        }
      );
  }

  private initForm(): void {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]]
    });
  }

  onDeleteCategory(category: Category): void {
    if (confirm('Etes vous sur de vouloir supprimer ' + category.name)) {
      this.categoryService.removeCategory(category)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (e) => {
            console.log(e);
          },
          () => {
            this.categories = this.categoryService.getCategories();
          }
        );
    }
  }
}
