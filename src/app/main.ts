import { faker } from '@faker-js/faker';

import {
  addProduct,
  findProducts,
  products,
  updateProduct,
} from './products/product.service';

addProduct({
  title: faker.commerce.productName(),
  stock: faker.datatype.number({ min: 10, max: 100 }),
  size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
  categoryId: faker.datatype.uuid(),
  image: '',
  description: faker.commerce.productDescription(),
  color: faker.color.human(),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: faker.datatype.array() as string[],
});

console.log(products);

const product = products[0];
updateProduct(product.id, { title: 'New title', stock: 80 });

console.log(products);

findProducts({ stock: 10, color: 'red', createdAt: new Date() });
// Cannot assign to 'id' becauuse it is a read-only
// products[0].id = 15;
