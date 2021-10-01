// ! O(n)
function factorial_Cycle(num: number): number {
  let factorial = 1;

  for (let i = num; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
}

// should return 6
console.log("Factorial_cycle of 3: " + factorial_Cycle(3));

// should return 120
console.log("Factorial_cycle of 5: " + factorial_Cycle(5));

//
// ----------------------------------------------------------------------------
//

// ! O(n) - for recursion we calculate time complexity by multiplying time
// ! complexity in each function call by the amount of function calls
function factorial_Recursion(num: number): number {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial_Recursion(num - 1);
  }
}

// should return 6
console.log("Factorial_recursive of 3: " + factorial_Recursion(3));

// should return 120
console.log("Factorial_recursive of 5: " + factorial_Recursion(5));
