// O(n)
function calculateFactorial(num: number): number {
  let factorial = 1;

  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
}

// should return 6
console.log('Factorial of 3: ' + calculateFactorial(3));

// should return 120
console.log('Factorial of 5: ' + calculateFactorial(5));
