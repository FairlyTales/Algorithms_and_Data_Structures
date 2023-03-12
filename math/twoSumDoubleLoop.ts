/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

// O(n^2)
function twoSumDoubleLoop(nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];

      if (sum === target) {
        return [i, j];
      }
    }
  }
}

// [0, 1]
console.log(twoSumDoubleLoop([2, 7, 11, 15], 9));

// [1, 2]
console.log(twoSumDoubleLoop([3, 2, 4], 6));
