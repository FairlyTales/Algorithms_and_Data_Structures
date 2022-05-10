// O(log(n)) - approximate
// O(1) - best case
function isPowerOfTwo(num: number): boolean {
  if (!Number.isInteger(num) || num < 1) return false;

  let dividedNumber = num;
  let iterationCounter = 0;

  while (dividedNumber !== 1) {
    // if the number is no longer dividable by two and it's not
    // one - it's not a power of two
    if (dividedNumber % 2 !== 0) {
      console.log(`Iterations: ${iterationCounter}`);
      return false;
    }
    dividedNumber = dividedNumber / 2;

    iterationCounter++;
  }

  // if a number was divided by two until it became one - it's a power of two
  console.log(`Iterations: ${iterationCounter}`);
  return true;
}

// should return true
console.log('Cycle 16: ' + isPowerOfTwo(16));

// should return false
console.log('Cycle 45: ' + isPowerOfTwo(45));
