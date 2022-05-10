// O(n)
function calculateFactorial(num: number): number {
  if (num === 1) {
    return 1;
  } else {
    // here we are using 'num *' to pass the value through the recursion
    return num * calculateFactorial(num - 1);
  }
}

// should return 6
console.log('Factorial of 3: ' + calculateFactorial(3));

// should return 120
console.log('Factorial of 5: ' + calculateFactorial(5));
