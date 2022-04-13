// Default parameters need to be the last ones
const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

// Correct, second parameter is an optional one
console.log(add(2));
