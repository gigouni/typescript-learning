const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Nicolas",
  age: 27,
  hobbies: ["Sports", "Cooking"], // hobbies: string[]
  role: [2, "author"], // role: (string | number)[]
};

// person.role[1] = 10; // Wrong, cannot assign a number to a string type
// person.role.push('admin'); // Works but is an Exception, shouldn't be used, leads to ambiguities
person.role = [17, "operator"];

console.log(person);
