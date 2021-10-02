const DESCENDING = "descending";
const ASCENDING = "ascending";
type SortingOrder = typeof ASCENDING | typeof DESCENDING;

// O(n * log(n)) - best case (if array is completely random)
// O(n * log(n)) - average case (because we probably won't get an already
// sorted array to sort)
// O(n^2) - worst case (if array is already sorted and we can't split array)
function quickSort(
  inputArray: number[],
  sortOrder: SortingOrder = ASCENDING
): number[] {
  // make a shallow copy of an inputted array
  const arr = [...inputArray];

  // break the recursion if
  if (arr.length <= 1) return arr;

  // shift removes and returns the first array element
  const pivotElement = arr.shift() as number;
  const centerArray = [pivotElement];
  const leftArray = [];
  const rightArray = [];

  // loop which will divide array elements into 3 groups: same value as a pivot,
  // smaller than pivot, bigger than pivot
  while (arr.length !== 0) {
    // extracting the next array element to compare with the pivot
    const currentElement = arr.shift() as number;

    if (
      (sortOrder === ASCENDING && currentElement < pivotElement) ||
      (sortOrder === DESCENDING && currentElement > pivotElement)
    ) {
      leftArray.push(currentElement);
    }

    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    }

    if (
      (sortOrder === ASCENDING && currentElement > pivotElement) ||
      (sortOrder === DESCENDING && currentElement < pivotElement)
    ) {
      rightArray.push(currentElement);
    }
  }

  // recursive calls which will return sorted subarrays
  const leftArraySorted = quickSort(leftArray, sortOrder);
  const rightArraySorted = quickSort(rightArray, sortOrder);

  // return array where all 3 parts are sorted inside
  return [...leftArraySorted, ...centerArray, ...rightArraySorted];
}

const array = [6, -43, 12, 54, 823, 324, -345, 85];

// spread operators are used in these logs to log the results in a single line
console.log("Should return: \n-345,-43,6,12,54,85,324,823");
console.log(...quickSort(array, ASCENDING));

console.log("Should return: \n823,324,85,54,12,6,-43,-345");
console.log(...quickSort(array, DESCENDING));
