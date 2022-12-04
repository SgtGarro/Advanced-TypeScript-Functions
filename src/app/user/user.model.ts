enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

interface User {
  username: string;
  role: ROLES;
}

export { User, ROLES };
