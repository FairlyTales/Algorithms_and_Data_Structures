// O(n * log(n)) - in all cases
function mergeSort(inputArray: number[]): number[] {
  const arr = [...inputArray];

  // no need to sort if there is 1 element in the array
  if (arr.length < 2) {
    return arr;
  }

  // sort array only if there are 2 elements
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      return [arr[1], arr[0]];
    }
    return arr;
  }

  // split the array into two subarrays
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  // continue to split and sort the subarrays
  // the returned values will be sorted arrays
  const leftSortedArray = mergeSort(leftArray);
  const rightSortedArray = mergeSort(rightArray);

  const mergedArr = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  // put elements from left and right arrays into the merged array in the
  // correct order by comparing them at each step
  while (
    // run the loop until all indexes are checked
  leftArrayIndex < leftSortedArray.length ||
  rightArrayIndex < rightSortedArray.length
    ) {
    if (
      leftArrayIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]
    ) {
      mergedArr.push(rightSortedArray[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrayIndex]);
      leftArrayIndex++;
    }
  }

  return mergedArr;
}

const array = [6, -43, 12, 54, 823, 324, -345, 85];

// spread operators are used in these logs to log the results in a single line
console.log("Should return: \n-345,-43,6,12,54,85,324,823");
console.log(...mergeSort(array));

console.log("Should return: \n823,324,85,54,12,6,-43,-345");
console.log(...mergeSort(array));
