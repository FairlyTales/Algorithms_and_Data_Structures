/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 */

function numberOfSteps(num: number): number {
  let number = num;
  let count = 0;

  while (number > 0) {
    if (number % 2 === 0) {
      console.log(`number ${number} is even, dividing by 2`);

      number /= 2;
    } else {
      console.log(`number ${number} is odd, subtracting 1`);

      number -= 1;
    }

    count++;
  }

  return count;
}

console.log(numberOfSteps(14));
