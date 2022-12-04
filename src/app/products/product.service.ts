import { faker } from '@faker-js/faker';
import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

const products: Product[] = [];
const addProduct = (data: CreateProductDto) => {
  const newProduct: Product = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };

  products.push(newProduct);
  return newProduct;
};

export { products, addProduct };
