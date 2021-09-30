// ! O(n)
function smallestNumberInArray(array: number[]) {
  let smallestNumber = array[0];

  array.map((num) => {
    if (num < smallestNumber) smallestNumber = num;
  });

  return smallestNumber;
}

console.log(smallestNumberInArray([10, 5, 235, 7, -5]));
