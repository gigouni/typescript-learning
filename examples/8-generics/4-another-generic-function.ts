// Informs TypeScript that whatever the T type element provided to countAndDescribe method
// The element will (and have to) have a length property (like strings, arrays, etc...)
interface Lengthy {
  length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' element(s)'
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([]));
console.log(countAndDescribe(['Cooking']));

// Wrong, numbers do not have length
// console.log(countAndDescribe(15));
