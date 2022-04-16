// =========================================================================
// Array destructuring
// =========================================================================
const hobbies = ["Sports", "Cooking"];

// The more the number of elements we want, the more lines of code
// const hobby1 = hobbies[0]
// const hobby2 = hobbies[1]

// Take the first element of the array and set hobby1 variable to its value
const [hobby1, hobby2] = hobbies;

// Event Rest parameters are allowed
// const [hobby1, hobby2, ...remainingHobbies] = hobbies

// =========================================================================
// Object destructuring
// =========================================================================
const person = {
  firstName: "Max",
  age: 30,
};

const { firstName, age } = person;

// Wrong, foo does not exist in person
// const { firstName, age, foo } = person
