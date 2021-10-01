// Fibonacci Sequence is a series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...
// The next number of the sequence is a sum of two previous numbers
// The task is to write a function which finds a value of a number in the
// Fibonacci Sequence

// O(2^n)
function fibonacci(elementPosition: number): number {
  if (elementPosition === 2 || elementPosition === 3) return 1;

  return (
    // recursive call which is reeeeeeeeealy bad from a performance perspective
    fibonacci(elementPosition - 1) +
    fibonacci(elementPosition - 2)
  );
}

// ! careful!  calling this function with big arguments,
// ! can easily overwhelm your computer, O(2^n) is not a joke
// should return 21
console.log(fibonacci(9));
