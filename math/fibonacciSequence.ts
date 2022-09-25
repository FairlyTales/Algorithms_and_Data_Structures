// Fibonacci Sequence is a series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
// The next number of the sequence is a sum of two previous numbers
// The task is to write a function which finds a value of a number in the
// Fibonacci Sequence

// O(n)
function fibonacci(elementPosition: number) {
  let currentElementValue = 0;
  let previousElements: [number, number] = [0, 1];

  // since first elements are always: 0, 1, 1, 2 we can do this check:
  if (elementPosition === 1 || elementPosition === 2) return 1;

  for (let i = 2; i < elementPosition; i++) {
    currentElementValue = previousElements[0] + previousElements[1];
    previousElements[0] = previousElements[1];
    previousElements[1] = currentElementValue;
  }

  return currentElementValue;
}

// should return 21
console.log(fibonacci(9));
