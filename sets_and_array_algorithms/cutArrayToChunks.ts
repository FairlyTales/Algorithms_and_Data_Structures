// given an array of numbers and a chunk size divide the array into
// several subarrays  where each subarray is of length size

// O(n)
function arrayToChunks(inputArray: number[], chunkSize: number): number[][] {
  let chunkedArray: number[][] = [];
  let chunk: number[] = [];
  let counter = 0;

  for (const el of inputArray) {
    if (counter < chunkSize) {
      chunk.push(el);

      counter++;
    } else {
      chunkedArray.push(chunk);
      chunk = [];
      chunk.push(el);

      counter = 1;
    }

    // push final chunk to an array even if this chunk isn't full
    if (el === inputArray[inputArray.length - 1]) {
      chunkedArray.push(chunk);
    }
  }

  return chunkedArray;
}

console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(arrayToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

