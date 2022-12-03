const prices: (number | string)[] = [1, 3, 2, 2, 2, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user = ['nicolas', 12];
// user = ['12', 15];
user = ['nico', 12, true];
const [username, age] = user;
console.log(username);
