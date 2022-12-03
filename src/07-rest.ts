import { ROLES, User } from './01-enum';

const currentUser: User = {
  username: 'nicolas',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) return true;
  return false;
};

console.log(checkAdminRole());

export const checkRole = (...roles: string[]) => {
  return roles.includes(currentUser.role);
};

const rta = checkRole(ROLES.ADMIN, ROLES.CUSTOMER);
console.log('checkRoles', rta);
