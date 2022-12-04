import { faker } from '@faker-js/faker';
import {
  CreateProductDto,
  FindProductDto,
  UpdateProductDto,
} from './product.dto';
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

const updateProduct = (
  id: Product['id'],
  changes: UpdateProductDto
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };

  return products[index];
};

const findProducts = (dto: FindProductDto): Product[] => {
  return products;
};

export { products, addProduct, updateProduct, findProducts };
