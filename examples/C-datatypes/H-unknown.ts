// Would more or less leads to the same result that the unknown type
// But with Any, TypeScript will gives up the type inference and won't
//      try to apply any type strictness
// let userInput: any;

// Would be even better that the unknown type but you may not not at all the type in advance
// let userInput: string | number;

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// Would fail because userInput: unknown could be string, number, boolean, ...
// And the userName variable expects a string
// userName = userInput;
// With the unknown type, we need to add check over the variable type before assignment
if (typeof userInput === "string") {
  userName = userInput;
}
