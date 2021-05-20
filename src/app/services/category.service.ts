import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/contact.model';
import {Category} from '../model/category.model';

const URL = environment.URLEndPoint;
@Injectable()
export class CategoryService {

constructor(private http: HttpClient) {
}

getCategories(){
  return this.http.get<Category[]>(URL+'/categories', {withCredentials: true})
}

  addCategory(category: Category) {
    return this.http.post(URL+'/category',category, { withCredentials: true,responseType: 'text'})
  }

  removeCategory(category: Category) {
    return this.http.delete(URL+'/category/'+category.id, { withCredentials: true,responseType: 'text'})
  }
}
