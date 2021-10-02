// O(1) - best case (searched item is the last in the list)
// O(n) - average case (we don't know where the searched item is)
// O(n) - worst case (searched item is the last in the list)
function findElementPosition_InArray(arr: number[], element: number): string {
  for (const el of arr) {
    if (el === element) {
      return `Index of the element is ${arr.indexOf(el)}`;
    }
  }

  return "No such number in an array";
}

const array = [2, 7, 123, 74, 865, -15, 44];

// should return 3
console.log(findElementPosition_InArray(array, 74));

// should return 6
console.log(findElementPosition_InArray(array, 44));
