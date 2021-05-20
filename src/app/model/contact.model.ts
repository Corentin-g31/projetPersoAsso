import { Category } from './category.model';

export class Contact {
  id: number;
  email: string;
  phone: string;
  message: string;
  category: Category;
}
