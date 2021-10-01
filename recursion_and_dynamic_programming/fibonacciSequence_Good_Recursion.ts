// Fibonacci Sequence is a series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
// The next number of the sequence is a sum of two previous numbers
// The task is to write a function which finds a value of a number in the
// Fibonacci Sequence

interface MemoizationObject {
  [key: number]: number;
}

// O(n) - a great improvement compared to the solution without memo
function fibonacci(
  elementPosition: number,
  memo: MemoizationObject = {}
): number {
  let result = 0;

  // if the calculation result is already in memo we don't need co calculate
  // it again and can just use the existing value
  if (memo[elementPosition]) {
    return memo[elementPosition];
  }

  if (elementPosition === 2 || elementPosition === 3) {
    result = 1;
  } else {
    result =
      fibonacci(elementPosition - 1, memo) +
      fibonacci(elementPosition - 2, memo);
  }

  // updating memo with a freshly calculated number
  memo[elementPosition] = result;

  return result;
}

// should return 21
console.log(fibonacci(9));

// should return 927372692193079200000
// yep, after adding the memoization we can run with number that big, just
// like with the cycle approach
console.log(fibonacci(103));
