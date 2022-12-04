import { BaseModel } from '../base/base.model';
import { Category } from '../category/category.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';
interface Product extends BaseModel {
  stock: number;
  title: string;
  image: string;
  description: string;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}
export { Sizes, Product };
