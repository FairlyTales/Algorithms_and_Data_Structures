// calculate a running sum of an array, should return an array of numbers
// leetcode #1480

function runningSum(nums: number[]): number[] {
  const result: number[] = [];

  nums.reduce((acc, el, index) => {
    return result[index] = acc + el;
  }, 0);

  return result;
}

console.log('should return: [ 1, 3, 6, 10 ]');
console.log(runningSum([1, 2, 3, 4]));

console.log('should return: [ 3, 4, 6, 16, 17 ]');
console.log(runningSum([3, 1, 2, 10, 1]));
