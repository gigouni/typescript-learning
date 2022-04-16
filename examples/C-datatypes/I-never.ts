let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// Would be correct because the function does not return but by specifying the
//      never type, we known that the function will crash and will NEVER return anything (even undefined)
//      even if we're console.log(generateError('test', 500))
// function generateError(message: string, code: number): void {
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };

  // With a never type, a whlie (true) {} loop would be OK too
}

generateError('An error occurred!', 500)
