import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../model/category.model';
import { Observable } from 'rxjs';

const URL = environment.URLEndPoint;
@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(URL + '/public/categories', { withCredentials: true });
  }

  addCategory(category: Category): Observable<any> {
    return this.http.post(URL + '/category', category, { withCredentials: true, responseType: 'text' });
  }

  removeCategory(category: Category): Observable<any> {
    return this.http.delete(URL + '/category/' + category.id, { withCredentials: true, responseType: 'text' });
  }
}
