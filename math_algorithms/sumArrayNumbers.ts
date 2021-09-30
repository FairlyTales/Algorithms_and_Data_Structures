// ! O(n), we can't decrease the complexity if the number of elements in
// an array isn't predetermined
function sumNumbers(numbers: number[]) {
  let sum: number = 0;

  numbers.map((num) => {
    sum += num;
  });

  return sum;
}

// ! O(1), but it works only with the fixed size arrays
function sumFixedSizeArray(numbers: [number, number, number, number]) {
  return numbers[0] + numbers[1] + numbers[2] + numbers[3];
}

console.log(sumNumbers([1, 2, 3]));
console.log(sumFixedSizeArray([1, 2, 3, 4]));
