// Correct too but the custom types can not work as function types
// type AddFn = (a: number, b: number) => number

interface AddFn {
  // Anonymous function expecting two numbers and returning one number
  (a: number, b: number): number;
}
let add: AddFn;

add = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
  // The outputName is an optional property
  // It can be present but it is not mandatory
  outputName?: string;
}

interface Greetable {
  readonly name?: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log(phrase);
    }
  }
}

let user1: Greetable;

user1 = new Person("Max");
