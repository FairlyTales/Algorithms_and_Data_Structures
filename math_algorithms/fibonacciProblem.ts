// implementation of the "get the value of the Nth element of the Fibonacci
// sequence", sequence starting with: 0, 1, 1, 2, 3,...
// ! O(n) - linear time complexity
function fibonacci(elementNumber: number) {
  let currentElementValue = 0;
  let previousElements: [number, number] = [0, 1];

  // since first 2 elements of the Fibonacci Sequence are always equal to 1
  // we don't need to calculate them
  if (elementNumber === 1 || elementNumber === 2) return 1;

  for (let i = 2; i < elementNumber; i++) {
    // inner part of the loop runs N - 2 times
    currentElementValue = previousElements[0] + previousElements[1];
    previousElements[0] = previousElements[1];
    previousElements[1] = currentElementValue;
  }

  return currentElementValue;
}

// should return 21
console.log(fibonacci(9));
