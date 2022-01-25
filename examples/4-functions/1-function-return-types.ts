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
