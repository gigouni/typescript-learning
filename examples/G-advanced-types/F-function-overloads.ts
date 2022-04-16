type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// In this combination, TypeScript knows now that we're sure that we're expecting a number result
// So result would be able to use number native methods without type casting
const result = add(1, 5);
console.log(result.toFixed(2));

// In this combination, TypeScript knows now that we're sure that we're expecting a string result
// So result would be able to use string native methods without type casting
const otherResult = add("Max", " Swartz");
console.log(otherResult.split(" "));
