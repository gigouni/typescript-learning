# 1. TypeScript Learning

TypeScript tutorials, self-taught learning, ...

<!-- TOC -->

- [1. TypeScript Learning](#1-typescript-learning)
    - [1.1. What is TypeScript](#11-what-is-typescript)
    - [1.2. Installing and using TypeScript](#12-installing-and-using-typescript)
    - [1.3. IDE](#13-ide)
    - [1.4. Lite-server](#14-lite-server)
    - [1.5. Types](#15-types)
        - [1.5.1. Core types](#151-core-types)
        - [1.5.2. Type inference](#152-type-inference)
    - [1.6. Troubleshooting tips](#16-troubleshooting-tips)

<!-- /TOC -->

Online resource: https://www.youtube.com/watch?v=BwuLxPH8IDs

## 1.1. What is TypeScript

- Youtube timecode: [https://youtu.be/BwuLxPH8IDs?t=118](https://youtu.be/BwuLxPH8IDs?t=118)
- TypeScript = JavaScript superset
- TypeScript is compiled to JavaScript
- In JavaScript, developers can still write invalid code ([_simple example: '2' + '3' = '23' instead of '5'_](https://youtu.be/BwuLxPH8IDs?t=384))
- TypeScript is a tool that helps developers write better code (but only helps during development, i.e. before the code gets compiled)
- JavaScript uses "dynamic types", TypeScript uses "static types"
- TypeScript helps during development while JavaScript checks should help during runtime

## 1.2. Installing and using TypeScript

- Youtube timecode: [https://youtu.be/BwuLxPH8IDs?t=391](https://youtu.be/BwuLxPH8IDs?t=391)
- Official website: [TypeScript - Download TypeScript](https://www.TypeScriptlang.org/download)
- Prerequisites: Node.js + npm installed (+ `node_modules/bin` folder added to your system PATH)

```bash
npm install -g typescript
```

- Compile `*.ts` files with the command

```bash
cd examples/2-typescript-basics
tsc using-ts.ts
```

- Convert a string parameter `num1` to a number one as `+num1` (_not in method signature_)
- TypeScript add
  - types
  - next-gen JavaScript features (compiled down for older platforms/browsers)
  - non-JavaScript features like Interfaces or Generic
  - meta-programming features like decorators
  - ruch configuration options
  - modern tooling that helps even in non-TypeScript projects

## 1.3. IDE

- Visual Studio Code: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Extensions:
  - Eslint: dbaeumer.vscode-eslint
  - Path intellisense: christian-kohler.path-intellisense
  - Prettier: esbenp.prettier-vscode

## 1.4. Lite-server

Allow live reload of the `.js` files

```shell
npm install --save-dev lite-sever
```

Add a new `"start"` npm script

```json
{
  "scripts": {
    "start": "lite-server"
  }
}
```

Run the Lite server

```shell
npm start
```

Now, you just jave to compile the `.ts` files to see the result into your browser without refreshing the page

## 1.5. Types

### 1.5.1. Core types

- Core datatypes from JavaScript + TypeScript datatypes + custom datatypes
- `number`: integers, floats, negative integers (1, 5.3, -10)
- `string`: text values ('Hi', "Hi", `Hi`)
- `boolean`: true or false, no "truthy"/"falsy" values like 0
- `object`: {age: 30}, any JavaScript object, more specific types (type of object) are possible
- `Array`: [1, 2, 3], any JavaScript array, type can be flexible or strict (regarding the element types)
- `Tuple`: [1, 2], JavaScript array with fixed-length and fixed-type
  - When you know the exact length of an array and the exact datatype in advance then you might want to consider a tuple of an array to get even more strictness into your app
- `Enum`: enum {NEW, OLD}, automatically enumerated global constant identifiers (_can be [upper/lower]case_)
- `Any`: *, any kind of value, no specific type assignment (__avoid Any whenever possible__)
  - The compiler can't check anything, the `Any` datatype takes away all advantages TypeScript gives you

### 1.5.2. Type inference

TypeScript does not need to get the type of a const when setting it, the "TypeScript type inference" feature will understand which type is a certain variable, constant.

```typescript
const number1 = 5; // 5 is a number so number1 is a number constant
const myStr = 'hello world'; // 'hello-world' is a string so myStr is a string constant
const isReady = true; // true is a string so myStr is a boolean constant
```

Datatype shoudn't be added if the value is set but it could if we don't initialize it immediatly

```typescript
// Correct
let number1;

// Better
let number1: number;

// Wrong: break the infered type: Type "5" is not assignable to "number"
let number2: number;
number2 = '5';
```

## 1.6. Troubleshooting tips

- `Duplicate function implementation ts(2393)` warning from the IDE: the filename.ts and filename.js are both open, close the filename.js file tab
- `Type "5" is not assignable to "number"` error means we're breaking the infered type of a constant/variable
