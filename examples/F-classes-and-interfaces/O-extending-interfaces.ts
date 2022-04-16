interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// Correct too if the Greetable interface wasn't extending the Named interface
// class Person implements Greetable, Named {
class Person implements Greetable {
  name: string;
  age: 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person("Max");

// Wrong, the name property is a readonly from the Greetable interface
// user1.name = 'Tom'
