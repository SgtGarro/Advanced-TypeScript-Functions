# Advanced TypeScript Functions
TypeScript has advanced functions that allow for a better development experience and reduce as many errors as possible.

1. [Enum](#enum)
2. [Tuple](#tuple)
3. [Unknown](#unknown)
4. [Never](#never)
5. [Nullish Coalesing](#nullish-coalesing)
6. [Default](#default)
7. [Functions overload](#functions-overload)
8. [Interfaces](#interfaces)
<br>

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
<br>

## Tuple
```ts
let myVariable: [number, string];
myVariable = [10, 'string'];
```
<br>

## Unknown
```ts
let unknownVar: unknown;
unknownVar = 'string';
unknownVar.toUpperCase();// ❌ Incorret way
if (typeof unknownVar === 'string') unknownVar.toUpperCase(); // ✅ Correct way
```
<br>

## Never
```ts
function withoutEnd() {
  while (true) {
    console.log('example');
  }
};
```
<br>

## Nullish Coalesing
```ts
function myFunction(myString?: string, myNumber?: number) {
  return {
    myString: myString ?? 'Hello',
    myNumber: myNumber ?? 10
  }
}
```
<br>

## Default
```ts
function myFunction(myString: string = 'Hello', myNumber?: number = 10) {
  return {
    myString,
    myNumber
  }
}
```
<br>

## Functions overload
```ts
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}
```
<br>

## Interfaces
* Interface
```ts
interface MyInterface {
  myString: string;
  myNumber: number;
}
```
<br>

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
<br>

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
<br>

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
<br>

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
<br>

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

