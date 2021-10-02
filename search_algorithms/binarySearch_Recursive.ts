// O(1) - best case (searched item is in the middle of an array)
// O(log(n)) - average case
// O(log(n)) - worst case (searched item is either in the start or the end of an array)
function binarySearch_Recursive(
  arr: number[],
  element: number,
  offset: number = 0
): number | string {
  let newArray = [];
  let newOffset = 0;
  let startIndex = 0;
  let endIndex = arr.length - 1; // - 1 because first index is 0

  // if searched element bigger than biggest array element or smaller
  // than the smallest array element -> searched element isn't in the array
  if (element > arr[endIndex] || element < arr[startIndex]) {
    return "Error, no such element in an array. Searched element is outside of an array";
  }

  // Math.floor to round down the middle index if array has uneven number of elements
  const middleIndex = Math.floor((endIndex - startIndex) / 2);

  if (element === arr[middleIndex]) {
    return middleIndex + offset;
  } else if (arr.length === 1) {
    // if middle element is the last one in the reduced array and it's not the
    // required element -> searched element isn't in the array
    return "Error, no such element in the array";
  }

  if (element > arr[middleIndex]) {
    // middleIndex + 1 to exclude middleIndex from new array
    // endIndex + 1 to include endIndex in new array
    newArray = arr.slice(middleIndex + 1, endIndex + 1);

    // update offset, + 1 is needed because we have to "omit" the middle
    // element while changing the offset
    newOffset = offset + middleIndex + 1;
  } else {
    newArray = arr.slice(startIndex, middleIndex);
  }

  return binarySearch_Recursive(newArray, element, newOffset);
}

// input array must be sorted before provided to the binary search algorithm
const array = [-15, 2, 7, 44, 74, 123, 1000, 1122, 5636];

console.log("Should return error: " + binarySearch_Recursive(array, -10000));
console.log("Should return 0: " + binarySearch_Recursive(array, -15));
console.log("Should return 1: " + binarySearch_Recursive(array, 2));
console.log("Should return 2: " + binarySearch_Recursive(array, 7));
console.log("Should return 3: " + binarySearch_Recursive(array, 44));
console.log("Should return 4: " + binarySearch_Recursive(array, 74));
console.log("Should return 5: " + binarySearch_Recursive(array, 123));
console.log("Should return 5: " + binarySearch_Recursive(array, 1000));
console.log("Should return 5: " + binarySearch_Recursive(array, 1122));
console.log("Should return 5: " + binarySearch_Recursive(array, 5636));
console.log("Should return error: " + binarySearch_Recursive(array, 10000));
