const withoutEnd = () => {
  while (true) {
    console.log('never stop learning');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'is a string';
  } else if (Array.isArray(input)) {
    return 'is a array';
  }
  return fail('not match');
};

console.log(example('Hello'));
console.log(example([1, 1, 1, 1]));
console.log(example(1212));
console.log(example('Hello after error'));
