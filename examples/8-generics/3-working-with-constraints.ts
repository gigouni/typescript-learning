// Wrong, nothing prevent developer from passing a number or a string to the method
// which would lead to an error while using the Object.assign(...) method, expecting two objects
// function merge<T, U>(objA: T, objB: U) {

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// Wrong, 30 is not an object, check from the constraint above
// const mergedObj = merge({ name: "Max" }, 30);
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);
