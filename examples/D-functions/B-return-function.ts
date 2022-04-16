// If it's not necessary, let TypeScript infers the return type of the function
// function add(n1: number, n2: number): string {
function add(n1: number, n2: number) {
  // The return type is infered by TypeScript by checking the parameters and the operations performed
  // return n1 + n2 // returns a number
  // return n1.toString() + n2 // returns a string
  return n1 + n2;
}

// Nothing is returned by the function so the void type is infered
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// combineValues will be an Any type and could be a function, then a string, then a number, ...
// let combineValues;
// combineValues = add;

// To target Function type without knowing which one yet
// But it could refers to a Function without return types (aka printResult)
// let combineValues: Function;

// The combineValues function accepts now a function without parameters returning a number
// let combineValues: () => number;

// The combineValues function accepts now a function with 2 number parameters returning a number
// let combineValues: (a: number, b: number) => number;
// combineValues = add // OK
// combineValues = printResult // KO !

// combineValues will point into the add function reference and infer the same types
let combineValues = add;

console.log(combineValues(8, 8));
