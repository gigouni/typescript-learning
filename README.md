# 1. Typescript Learning

Typescript tutorials, self-taught learning, ...

<!-- TOC -->

- [1. Typescript Learning](#1-typescript-learning)
    - [1.1. What is Typescript](#11-what-is-typescript)
    - [1.2. Installing and using Typescript](#12-installing-and-using-typescript)

<!-- /TOC -->

Online resource: https://www.youtube.com/watch?v=BwuLxPH8IDs

## 1.1. What is Typescript

- Youtube timecode: [https://youtu.be/BwuLxPH8IDs?t=118](https://youtu.be/BwuLxPH8IDs?t=118)
- Typescript = JavaScript superset
- Typescript is compiled to JavaScript
- In JavaScript, developers can still write invalid code ([_simple example: '2' + '3' = '23' instead of '5'_](https://youtu.be/BwuLxPH8IDs?t=384))
- Typescript is a tool that helps developers write better code

## 1.2. Installing and using Typescript

- Youtube timecode: [https://youtu.be/BwuLxPH8IDs?t=391](https://youtu.be/BwuLxPH8IDs?t=391)
- Official website: [Typescript - Download TypeScript](https://www.typescriptlang.org/download)
- Prerequisites: Node.js + npm installed (+ `node_modules/bin` folder added to your system PATH)

```bash
npm install -g typescript
```

- Compile `*.ts` files with the command

```bash
cd examples/2-typescript-basics
tsc using-ts.ts
```

- Convert a string parameter `num1` to a number one as `+num1`
- Typescript add
  - types
  - next-gen JavaScript features (compiled down for older platforms/browsers)
  - non-JavaScript features like Interfaces or Generic
  - meta-programming features like decorators
  - ruch configuration options
  - modern tooling that helps even in non-typescript projects
