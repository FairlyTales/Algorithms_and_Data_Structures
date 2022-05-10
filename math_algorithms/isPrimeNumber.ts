// O(1) - best case
// O(sqrt(n)) - average case
function isPrimeNumber(n: number) {
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;

  // we use square root of a number to decrease the number of iteration
  // because if the square root of a number is not a prime number then the
  // number itself also is not a prime
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// should return true
console.log('5 is a prime number: ' + isPrimeNumber(5));

// should return false
console.log('9 is a prime number: ' + isPrimeNumber(9));

// should return true
console.log('2147483647 is a prime number: ' + isPrimeNumber(2147483647));
