import { faker } from '@faker-js/faker';

import { addProduct, products } from './products/product.service';

addProduct({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  stock: faker.datatype.number({ min: 10, max: 100 }),
  size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
  category: {
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  image: '',
  description: faker.commerce.productDescription(),
  color: faker.color.human(),
  price: parseInt(faker.commerce.price(), 10),
  isNew: faker.datatype.boolean(),
  tags: faker.datatype.array() as string[],
});

console.log(products);

// Cannot assign to 'id' becauuse it is a read-only
// products[0].id = 15;
