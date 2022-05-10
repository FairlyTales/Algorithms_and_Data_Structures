// function must flip integer numbers

// O(n)
function reverseInteger(integer: number): number {
  const reversedInt = Number(integer.toString().replace('-', '').split('').reverse().join(''));

  return Math.sign(integer) * reversedInt;
}

console.log(reverseInteger(10));
console.log(reverseInteger(123));
console.log(reverseInteger(-555));
