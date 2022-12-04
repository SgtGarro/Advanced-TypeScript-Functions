import { Product } from './product.model';

interface CreateProductDto
  extends Omit<
    Product,
    'id' | 'createdAt' | 'updatedAt' | 'createdAt' | 'category'
  > {
  categoryId: string | number;
}

interface UpdateProductDto extends Partial<CreateProductDto> {}

export { CreateProductDto, UpdateProductDto };

// interface UpdateProductDtoV2 extends Required<CreateProductDto> {}
