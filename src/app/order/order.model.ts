import { BaseModel } from '../base/base.model';
import { Product } from '../products/product.model';
import { User } from '../user/user.model';

export interface Order extends BaseModel {
  id: string | number;
  products: Product[];
  user: User;
}
