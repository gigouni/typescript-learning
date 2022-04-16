const hobbies = ["Sports", "Cooking"];
// Ineffective way to log array content
// console.log(hobbies[0], hobbies[1], hobbies[...])

const activeHobbies = ["Hiking"];
console.log(...activeHobbies);

activeHobbies.push(...hobbies);
console.log(...activeHobbies);

const otherHobbies = ["Swimming", ...hobbies];
console.log(...otherHobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person, name: "Tom" };
console.log(copiedPerson);
