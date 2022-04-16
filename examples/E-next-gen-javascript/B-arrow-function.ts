const add = (a: number, b: number) => {
  return a + b;
};

const add2 = (a: number, b: number) => a + b;

console.log(add(2, 5));
console.log(add2(2, 5));

const printOutput = (output: string | number) => console.log(output);
const printOutput2: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(add(5, 2));

const button = document.querySelector("button");
if (button) {
  // If you got no parameters, you have to use an empty pair of parenthesis: () => { ... }
  // button.addEventListener('click', () => {})
  button.addEventListener("click", (event) => console.log(event));
}
