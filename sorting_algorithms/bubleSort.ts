const DESCENDING = "descending";
const ASCENDING = "ascending";
type SortingOrder = typeof ASCENDING | typeof DESCENDING;

// O(n) - best case (elements are already sorted and we go through the array without
// going into the if check)
// O(n^2) - average case (we don't know the order of the array)
// O(n^2) - worst case (elements are in a complete reverse order and we have to
// swap them all)
function bubbleSort(
  inputArray: number[],
  sortOrder: SortingOrder = ASCENDING
): number[] {
  const arr = [...inputArray];
  const length = arr.length;

  // outer cycle, sets first element to check
  for (let i = 0; i < length; i++) {
    // inner cycle, sets element with which first element will be compared
    for (let k = i + 1; k < length; k++) {
      // check if element in question is smaller/bigger
      if (
        (sortOrder === ASCENDING && arr[i] > arr[k]) ||
        (sortOrder === DESCENDING && arr[i] < arr[k])
      ) {
        // swap elements using a temporary third variable
        const swappedElement = arr[i];
        arr[i] = arr[k];
        arr[k] = swappedElement;
      }
    }
  }

  return arr;
}

const array = [6, -43, 12, 54, 823, 324, -345, 85];

// spread operators are used in these logs to log the results in a single line
console.log("Should return: \n-345,-43,6,12,54,85,324,823");
console.log(...bubbleSort(array, ASCENDING));

console.log("Should return: \n823,324,85,54,12,6,-43,-345");
console.log(...bubbleSort(array, DESCENDING));
