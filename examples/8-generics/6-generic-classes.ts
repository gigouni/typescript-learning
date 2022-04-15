// Using a Generic <T> type here allow to lock the expected data type all along the life of the instance
// If we are referencing an union each time, the DataStorage type could expect strings while the addItem method expects number
// And the removeItem could expect boolean
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // Prevent to remove last element if the provided element is not found
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Tom");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(45);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());

// ==========================================================================================================================
// Wrong
// The object here will lead to issues when removing elements from the list
// The objects, in Javascript, are references
// When looking for the index of the element in the array with <this.data.splice(this.data.indexOf(item), 1);>
// None will be found because the comparison of reference will fail and return -1 (element not found)
// And so the last item of the list will be remove, whatever its value
// ==========================================================================================================================
// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Tom'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// ==========================================================================================================================
// Correct
// The object maxObj is passed by reference while looking for its index for its deletion
// The element is found and the index is correct, and so the method works as expected
// It may not be possible in every cases and need to be prevent (constraint the expected T type)
//
// However, the <const fixedObjStorage = new DataStorage<object>()> object usage does not match the expected
// <string | number | boolean> data type and so is refused
// ==========================================================================================================================
// const fixedObjStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// fixedObjStorage.addItem(maxObj);
// fixedObjStorage.addItem({name: 'Tom'});
// // ...
// fixedObjStorage.removeItem(maxObj);
// console.log(fixedObjStorage.getItems());
