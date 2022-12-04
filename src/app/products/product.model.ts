import { BaseModel } from '../base/base.model';
import { Category } from '../category/category.model';

type Sizes = 'S' | 'M' | 'L' | 'XL';
interface Product extends BaseModel {
  stock: number;
  title: string;
  size?: Sizes;
  category: Category;
}
export { Sizes, Product };
