// =============================================================================
// Example with a failing TypeScript support
// The merge between two unknown objects id providing another unknown object
// Without any data structure so TypeScript cannot provide useful support
// =============================================================================
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Max" }, { age: 30 }));

const mergedObj = merge({ name: "Max" }, { age: 30 });
// Wrong, TypeScript cannot access name or age properties because it does not known the merge result
// console.log(mergedObj.age);

// =============================================================================
// Example with a succeeding TypeScript support
// With the merge of two different Generic allow TypeScript to provide type support
// We do not provide a full data structure of T or U to stay flexible
// about the actual data structure of the merged objects
// =============================================================================
// T or U could have other names but by conventions, T and U are preferred
function merge2<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Max" }, { age: 30 });
console.log(mergedObj2.age);
