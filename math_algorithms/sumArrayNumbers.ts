// O(n)
function sumNumbers(numbers: number[]) {
  let sum: number = 0;

  // yeah, could've used the .reduce() here, but wanted to keep it simple
  numbers.map((num) => {
    sum += num;
  });

  return sum;
}

// O(1), but it works only for the fixed size arrays
function sumFixedSizeArray(numbers: [number, number, number]) {
  return numbers[0] + numbers[1] + numbers[2];
}

// should return 6
console.log(sumNumbers([1, 2, 3]));

// should return 6
console.log(sumFixedSizeArray([1, 2, 3]));
