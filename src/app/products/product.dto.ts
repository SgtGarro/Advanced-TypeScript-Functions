import { Product } from './product.model';

export interface CreateProductDto
  extends Omit<
    Product,
    'id' | 'createdAt' | 'updatedAt' | 'createdAt' | 'category'
  > {
  categoryId: string | number;
}
