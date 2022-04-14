interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;
// Correct too, the Person class implements the Greetable class
// let user1: Person

user1 = new Person("Max");

user1.greet("Hi there, I am");
console.log(user1);
