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
