/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

// O(n)
function twoSumMap(nums: number[], target: number): number[] | undefined {
  const numberMap = new Map;

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    // diff is a value we need to add to the current number in order to get the target value
    const diff = target - number;

    // if we already have this value in our map, return it as second index
    if (numberMap.has(diff)) {
      return [i, numberMap.get(diff)]
    }

    // if we don't yet have it in our map - add it to the map
    numberMap.set(number, i);
  }
}

// [0, 1]
console.log(twoSumMap([2, 7, 11, 15], 9));

// [1, 2]
console.log(twoSumMap([3, 2, 4], 6));
