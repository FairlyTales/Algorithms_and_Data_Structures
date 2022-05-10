// O(1) - best case (searched item is in the middle of an array)
// O(log(n)) - average case
// O(log(n)) - worst case (searched item is either in the start or the end of an array)
function binarySearch_Cycle(arr: number[], element: number): number | string {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  // run the search cycle until the length of the array become 1
  while (startIndex <= endIndex) {
    // adding startIndex to correctly shift the middle index after the array was split
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // check if the current middle element is the one we are searching
    if (element === arr[middleIndex]) {
      return middleIndex;
    }

    // shift start or middle index depending on the possible position of the searched element
    if (element > arr[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return 'Error, no such element in an array';
}

// input array must be sorted before provided to the binary search algorithm
const array = [-15, 2, 7, 44, 74, 123];

console.log('Should return 2: ' + binarySearch_Cycle(array, 7));

console.log('Should return 5: ' + binarySearch_Cycle(array, 123));

console.log('Should return error: ' + binarySearch_Cycle(array, 127));
