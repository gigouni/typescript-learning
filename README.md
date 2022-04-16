# 1. TypeScript Learning

TypeScript tutorials, self-taught learning, ...

<!-- TOC -->

- [1. TypeScript Learning](#1-typescript-learning)
    - [1.1. How to run examples](#11-how-to-run-examples)
    - [1.2. What is TypeScript](#12-what-is-typescript)
    - [1.3. Installing and using TypeScript](#13-installing-and-using-typescript)
    - [1.4. IDE](#14-ide)
    - [1.5. Lite-server](#15-lite-server)
    - [1.6. Types](#16-types)
        - [1.6.1. Core types](#161-core-types)
        - [1.6.2. Type inference](#162-type-inference)
    - [1.7. Troubleshooting data types](#17-troubleshooting-data-types)
    - [1.8. Configuring the Typescript compiler](#18-configuring-the-typescript-compiler)
        - [1.8.1. Watch](#181-watch)
        - [1.8.2. Several files to watch/compile](#182-several-files-to-watchcompile)
        - [1.8.3. Sourcemaps](#183-sourcemaps)
    - [1.9. Next gen Javascript](#19-next-gen-javascript)
    - [1.10. Classes and interfaces](#110-classes-and-interfaces)
        - [1.10.1. Object-oriented Programming](#1101-object-oriented-programming)
        - [1.10.2. Access modifiers](#1102-access-modifiers)
        - [1.10.3. Keywords](#1103-keywords)
        - [1.10.4. Interfaces](#1104-interfaces)
            - [1.10.4.1. Why](#11041-why)
    - [1.11. Generics](#111-generics)
        - [1.11.1. Constraints](#1111-constraints)
    - [1.12. Decorators](#112-decorators)
        - [1.12.1. Factory decorators](#1121-factory-decorators)
        - [1.12.2. Validators](#1122-validators)
    - [1.13. Webpack](#113-webpack)
        - [1.13.1. Why](#1131-why)
            - [1.13.1.1. "Normal" setup](#11311-normal-setup)
            - [1.13.1.2. With Webpack](#11312-with-webpack)
        - [1.13.2. Dependencies and settings](#1132-dependencies-and-settings)

<!-- /TOC -->

TypeScript Course for Beginners 2021: https://www.youtube.com/watch?v=BwuLxPH8IDs

## 1.1. How to run examples

tl;dr

```shell
# In a first shell
npm install   # install the dependencies
npm start     # start the local server with live reload (open a new browser tab)

# In another shell
# Found the example you want to try and copy/paste its content into app.ts
npm run compile:watch

# The browser shows the result (you may need to open your dev console (F12))!
```

## 1.2. What is TypeScript

- Youtube timecode: [https://youtu.be/BwuLxPH8IDs?t=118](https://youtu.be/BwuLxPH8IDs?t=118)
- TypeScript = JavaScript superset
- TypeScript is compiled to JavaScript
- In JavaScript, developers can still write invalid code ([_simple example: '2' + '3' = '23' instead of '5'_](https://youtu.be/BwuLxPH8IDs?t=384))
- TypeScript is a tool that helps developers write better code (but only helps during development, i.e. before the code gets compiled)
- JavaScript uses "dynamic types", TypeScript uses "static types"
- TypeScript helps during development while JavaScript checks should help during runtime

## 1.3. Installing and using TypeScript

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
  - non-JavaScript features like interfaces or generic
  - meta-programming features like decorators
  - much configuration options
  - modern tooling that helps even in non-TypeScript projects

## 1.4. IDE

- Visual Studio Code: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Extensions:
  - Eslint: dbaeumer.vscode-eslint
  - Path intellisense: christian-kohler.path-intellisense
  - Prettier: esbenp.prettier-vscode

## 1.5. Lite-server

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

Now, you just have to compile the `.ts` files to see the result into your browser without refreshing the page

## 1.6. Types

### 1.6.1. Core types

- `number`: integers, floats, negative integers (1, 5.3, -10)
- `string`: text values ('Hi', "Hi", `Hi`)
- `boolean`: true or false, no "truthy"/"falsy" values like 0
- `object`: {age: 30}, any JavaScript object, more specific types (type of object) are possible
- `Array`: [1, 2, 3], any JavaScript array, type can be flexible or strict (regarding the element types)
- `Tuple`: [1, 2], JavaScript array with fixed-length and fixed-type
  - When you know the exact length of an array and the exact datatype in advance then you might want to consider a tuple of an array to get even more strictness into your app
- `Enum`: enum {NEW, OLD}, automatically enumerated global constant identifiers (_can be [upper/lower]case_)
- `Any`: \*, any kind of value, no specific type assignment (**avoid Any whenever possible**)
  - The compiler can't check anything, the `Any` datatype takes away all advantages TypeScript gives you

### 1.6.2. Type inference

TypeScript does not need to get the type of a const when setting it, the "TypeScript type inference" feature will understand which type is a certain variable, constant.

```typescript
const number1 = 5; // 5 is a number so number1 is a number constant
const myStr = "hello world"; // 'hello-world' is a string so myStr is a string constant
const isReady = true; // true is a boolean so isReady is a boolean constant
```

Datatype shouldn't be added if the value is set but it could if we don't initialize it immediately

```typescript
// Correct
let number1;

// Better
let number1: number;

// Wrong: break the inferred type: Type "'5'" is not assignable to "number"
let number2: number;
number2 = "5";
```

## 1.7. Troubleshooting data types

- `Duplicate function implementation ts(2393)` warning from the IDE: the filename.ts and filename.js are both open, close the filename.js file tab
- `Type "'5'" is not assignable to "number"` error means we're breaking the inferred type of a constant/variable

## 1.8. Configuring the Typescript compiler

### 1.8.1. Watch

To prevent running manually the compiler after each file change, use the `--watch` flag

```shell
tsc app.ts --watch
```

### 1.8.2. Several files to watch/compile

If you have several files to watch and compile, init a Typescript config file

```shell
tsc --init
```

### 1.8.3. Sourcemaps

Sourcemaps allow to "map" the `*.ts` files to their `*.js` dist file. It improves debugging on important project by allowing to debug `*.ts` files directly into the dev console's debugger.

In the `tsconfig.json` file, enable the "sourceMap" option

```json
{
  "compilerOptions": {
    // ...
    "sourceMap": true /* Create source map files for emitted JavaScript files. */
    // ...
  }
}
```

## 1.9. Next gen Javascript

Resources:

- [ECMAScript 6 compatibility table](https://kangax.github.io/compat-table/es6/)

## 1.10. Classes and interfaces

### 1.10.1. Object-oriented Programming

- **Objects**
  - The things you work with in code
  - **Instances** of classes (= based on classes)
  - Class-based creation is an alternative to using object literals
- **Classes**
  - Blueprints for objects (theoretical definition)
  - Define how objects look like, which properties and methods they have
  - Classes make creation of multiple, similar objects much easier

### 1.10.2. Access modifiers

Access modifiers can be used for properties and methods and set the accessibility of resources by other classes.

- **public**
  - Default access modifier
  - Accessible from any other classes
- **private**
  - Accessible only by the current class
  - Not accessible by the inheriting classes
- **protected**
  - Accessible by the current class and its inheriting classes _only_

### 1.10.3. Keywords

- **static**
  - Property or method which can be used without instantiate an instance of the class
- **abstract**
  - Force inheriting classes to implement the property or method to specialized its behavior
- **readonly**
  - Prevent the property to be mutate after its initialization

### 1.10.4. Interfaces

Interfaces are almost the same that the custom types usage but the interfaces leads to a clearer readability.
An interface can **implements** and **extends** several interfaces while classes can only extends one another class.

A major difference between interfaces and abstract classes is that interfaces do not implement methods, it only
provide the signatures.

Interfaces can't be instantiated and are not compiled.
Using union types or arbitrary types are not a valid use-case for interfaces.

#### 1.10.4.1. Why

We want to insure that a class has a set of methods and we want TypeScript to check methods existence.

## 1.11. Generics

> Generics are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure. When a developer makes their component a generic component, they give that component the ability to accept and enforce typing that is passed in when the component is used, which improves code flexibility, makes components reusable, and removes duplication.

[Source](https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript)

The Generics allow to inform TypeScript about the type of a property to complete the inference of the property and have a better TypeScript support while being as flexible as possible.

Utility types documentation: [https://www.typescriptlang.org/docs/handbook/utility-types.html](https://www.typescriptlang.org/docs/handbook/utility-types.html)

### 1.11.1. Constraints

While being flexible, Generics could also integrates Javascript silent errors and generate unexpected behavior.
Check the [working Generics constraints example](./examples/8-generics/3-working-with-constraints.ts)

## 1.12. Decorators

> A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

[Source](https://www.typescriptlang.org/docs/handbook/decorators.html#decorators)

### 1.12.1. Factory decorators

Factory decorators are a way to customize how the decorator is applied to a declaration.

**Documentation**: [typescriptlang.org](https://www.typescriptlang.org/docs/handbook/decorators.html#decorator-factories)

### 1.12.2. Validators

Decorators can be used to validate data too. Have a look to the [working example](./examples/9-decorators/9-validation-with-decorators.ts).

Available class validators: [typestack/class-validator](https://github.com/typestack/class-validator#table-of-contents)

## 1.13. Webpack

Webpack is a static module bundler for Javascript applications. It builds a dependency graph which maps every module the project needs and generates one ore more bundles.

**Documentation**: [Webpack concepts](https://webpack.js.org/concepts/)

### 1.13.1. Why

#### 1.13.1.1. "Normal" setup

- Multiple .ts files and imports thru HTTP requests
- Unoptimized code (not as small as possible)
- "External" development server needed (lite-server to reload our website whenever we perform a change)

#### 1.13.1.2. With Webpack

- Code bundles, less imports required
Optimized (minified) code, less code to download
More builds steeps can be added easily

### 1.13.2. Dependencies and settings

For a new Node.js project using TypeScript and Webpack, install the following modules

```shell
`npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
```

In the `tsconfig.json`

- `compilerOptions.target`: "es5" or "es6"
- `compilerOptions.module`: "es2015" or "es6"
- `compilerOptions.outDir`: "./dist"
- `compilerOptions.sourceMap`: "true"

Add a `webpack.config.js` file to the [root of the project](./webpack.config.js).
It will be the **development** config file.

In the code files, do not precise the import files extension aka `.js`

In the `index.html`, change

```html
<script src="dist/app.js" defer></script>
```

to

```html
<script src="dist/bundle.js" defer></script>
```

In the `package.json`, update the scripts

```json
{
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
    "build:prod": "webpack --config webpack.config.prod.js"
  }
}
```

Add another `webpack.config.prod.js` file to the [root of the project](./webpack.config.prod.js).
It will be the **production** config file.
