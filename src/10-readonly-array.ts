const numbers: ReadonlyArray<number> = [1, 2, 2, 2];
// numbers.push(1);
// numbers.pop();
// numbers.unshift(1);
numbers.filter((item) => {
  item % 2 === 0;
});
