// Would result into `person` as "basic-object" infered type, without known "name" or "age" properties
// const person: object { ... }
// More complete but not necessary description
const person = {
  name: "Nicolas",
  age: 27,
  hobbies: ["Sports", "Cooking"], // hobbies: string[]
};

// Correct but should not be used
// let favoritesActivities = any[];

// Set an empty array of strings
let favoritesActivities: string[];
// favoritesActivities = 'Sports' // Wrong, "Cannot assign type 'string' to 'string[]'
// favoritesActivities = ['Sports', 1] // Wrong, "Cannot assign type 'number' to 'string'
favoritesActivities = ["Swiming", "Hiking"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  // console.log(hobby.map()); // Wrong, "Property 'map' does not exist for type 'string'
}
