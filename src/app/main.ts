import { addProduct, products } from './products/product.service';

addProduct({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  updatedAt: new Date(),
  stock: 15,
  size: 'M',
  category: {
    id: '12',
    name: 'c1',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
});

// Cannot assign to 'id' becauuse it is a read-only
// products[0].id = 15;
