// O(log(n))
function isPowerOfTwo(num: number): boolean {
  // non integers, zero and negative numbers can't be a power of two
  if (!Number.isInteger(num) || num < 1) return false;

  // if the final (after all divisions) number is two, the provided number
  // is a power of two, and we will break out of the recursion
  if (num === 2) return true;

  if (num % 2 === 0) {
    return isPowerOfTwo(num / 2);
  } else {
    // if number is not a two and not dividable by two than it's not a power ot two
    return false;
  }
}

// should return true
console.log('Recursion 16: ' + isPowerOfTwo(16));

// should return false
console.log('Recursion 45: ' + isPowerOfTwo(45));
