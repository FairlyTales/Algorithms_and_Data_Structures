// given an array of numbers and a chunk size divide the array into
// several subarrays  where each subarray is of length size

// O(n)
// in this version we are using Array.slice() method to cut original array into chunks
function arrayToChunksVer3(inputArray: number[], chunkSize: number): number[][] {
  let chunkedArray: number[][] = [];

  for (let i = 0; i < inputArray.length; i += chunkSize) {
    const chunk = inputArray.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
}

console.log(arrayToChunksVer3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(arrayToChunksVer3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(arrayToChunksVer3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(arrayToChunksVer3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
