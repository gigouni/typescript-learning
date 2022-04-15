// Correct, would force TypeScript to accept that we need what were are doing (usage of <!>)
// <!> allows to tell TypeScript that the expression in front of it will never yield null
// const userInputElement = document.getElementById('user-input')!;

// Correct, would cast the next element to the provided one
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// Correct, would cast the next element to the provided one
// const userInputElement = document.getElementById('user-input')! as <HTMLInputElement>;

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  // Prefered syntax, insure preventing runtime error if the element is not found
  (userInputElement as HTMLInputElement).value = "Hi there!";
}
