// O(1) - best case (searched item is the last in the list)
// O(n) - average case (we don't know where the searched item is)
// O(n) - worst case (searched item is the last in the list)
function linearSearch_Cycle(arr: number[], element: number): string {
  for (const el of arr) {
    if (el === element) {
      return `Index of the element is ${arr.indexOf(el)}`;
    }
  }

  return 'No such number in an array';
}

const array = [2, 7, 123, 74, 865, -15, 44];

console.log('should return 3: ' + linearSearch_Cycle(array, 74));

console.log('should return 6: ' + linearSearch_Cycle(array, 44));
