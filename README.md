# Advanced TypeScript Functions

## Enum
```ts
enum ROLES {
  ADMIN, //ADMIN = 0
  SELLER, // ADMIN = 1
  CUSTOMER, // ADMIN = 2
}
```
```ts
enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}
```
## Tuple
```ts
let myVariable: [number, string];
myVariable = [10, 'string'];
```
## Unknown
```ts
let unknownVar: unknown;
unknownVar = 'string';
unknownVar.toUpperCase();// ❌ Incorret way
if (typeof unknownVar === 'string') unknownVar.toUpperCase(); // ✅ Correct way
```
## Never
```ts
function withoutEnd() {
  while (true) {
    console.log('example');
  }
};
```
## Nullish Coalesing
```ts
function myFunction(myString?: string, myNumber?: number) {
  return {
    myString: myString ?? 'Hello',
    myNumber: myNumber ?? 10
  }
}
```
## Default
```ts
function myFunction(myString: string = 'Hello', myNumber?: number = 10) {
  return {
    myString,
    myNumber
  }
}
```
## Functions overload
```ts
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}
```
## Interfaces
* Interface
```ts
interface MyInterface {
  myString: string;
  myNumber: number;
}
```
* Extends
``` ts
interface MyInterface {
  myString: string;
  myNumber: number;
}

interface MyInterface2 extends MyInterface {
  myBoolean: boolean;
}

// MyInterface2 {
//   myString: string;
//   myNumber: number;
//   myBoolean: boolean;
// }
```
* Interface Omit
```ts
interface MyInterface {
  myString: string;
  myNumber: number;
}

interface MyInterface2 extends Omit<MyInterface, 'myString'> {
  myBoolean: boolean;
}

// MyInterface2 {
//   myNumber: number;
//   myBoolean: boolean;
// }
```
* Interface Partial
```ts
interface MyInterface {
  myString: string;
  myNumber: number;
}

interface MyInterface2 extends Partial<MyInterface> {}

// MyInterface2 {
//   myString?: string;
//   myNumber?: number;
// }
```
* Interface Required
```ts
interface MyInterface {
  myString?: string;
  myNumber?: number;
}

interface MyInterface2 extends Required<MyInterface> {}

// MyInterface2 {
//   myString: string;
//   myNumber: number;
// }
```
* Interface Readonly
```ts
interface MyInterface {
  myString: string;
  myNumber: number;
}

interface MyInterface2 extends Readonly<MyInterface> {}

// MyInterface2 {
//   readonly myString: string;
//   readonly myNumber: number;
// }
```

