// given an array of numbers and a chunk size divide the array into
// several subarrays  where each subarray is of length size

// O(n)
// in this version we are using the last chunk to check whether to add an element to it
// or to create a new chunk
function arrayToChunksVer2(inputArray: number[], chunkSize: number): number[][] {
  let chunkedArray: number[][] = [];

  for (const el of inputArray) {
    const lastChunk = chunkedArray[chunkedArray.length - 1];

    if (!lastChunk || lastChunk.length === chunkSize) {
      chunkedArray.push([el]);
    } else {
      lastChunk.push(el);
    }
  }

  return chunkedArray;
}

console.log(arrayToChunksVer2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(arrayToChunksVer2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(arrayToChunksVer2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(arrayToChunksVer2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

