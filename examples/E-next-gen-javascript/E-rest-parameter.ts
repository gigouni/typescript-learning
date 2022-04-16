const add = (...numbers: number[]) => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

console.log(add(5, 10));
console.log(add(5, 10, 2, 3.7));
console.log(add(5, 10, 2, 3.7, 4, 89, 1235345));
