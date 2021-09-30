// ! O(log(n)) - approximate time complexity
function isPowerOfTwo_Recursion(num: number): boolean {
  // non integers, zero and negative numbers can't be a power of two
  if (!Number.isInteger(num) || num < 1) return false;

  // if the final (after all divisions) number is two, the provided number
  // is a power of two and we will break this recursion
  if (num === 2) return true;

  // if number is dividable by two call a recursion
  if (num % 2 === 0) {
    return isPowerOfTwo_Recursion(num / 2);
  } else {
    // if number is not a two and not dividable by two - it's not a
    // power ot two
    return false;
  }
}

// should return true
console.log('Recursion 16: ' + isPowerOfTwo_Recursion(16));

// should return false
console.log('Recursion 45: ' + isPowerOfTwo_Recursion(45));

//
// ----------------------------------------------------------------------------
//

// ! O(log(n)) - approximate time complexity
// ! O(1) - best case
function isPowerOfTwo_Cycle(num: number):boolean {
  if (!Number.isInteger(num) || num < 1) return false;

  let dividedNumber = num;

  // for logging number of iteration to get an idea of the time complexity
  let iterationCounter = 0;

  // we are dividing the provided number by two until it can't be divided
  // by two any longer and checking if the divided number is
  // further dividable by two
  while (dividedNumber !== 1) {
    // if the number is no longer dividable by two and it's not one - it's not
    // a power of two
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
console.log('Cycle 16: ' + isPowerOfTwo_Cycle(16));

// should return false
console.log('Cycle 45: ' + isPowerOfTwo_Cycle(45));

//
// ----------------------------------------------------------------------------
//

// ! O(1) - using bitwise operator &
function isPowerOfTwo_Bitwise(num: number):boolean {
  if (!Number.isInteger(num) || num < 1) return false;

  return (num & (num - 1)) === 0;
}

// should return true
console.log('Bitwise 16: ' + isPowerOfTwo_Bitwise(16));

// should return false
console.log('Bitwise 45: ' + isPowerOfTwo_Bitwise(45));
