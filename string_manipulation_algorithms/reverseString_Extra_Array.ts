// reversing the string using JS String and Array methods

// O(n) - using Array.unshift()
function reverseStringUnshift(string: string): string {
  const arr = string.split('');
  const reversedArr: string[] = [];

  for (const elem of arr) {
    reversedArr.unshift(elem);
  }

  return reversedArr.join('');
}

// O(n) - we can also use Array.reduce()
function reverseStringReduce(string: string): string {
  const arr = string.split('');

  return arr.reduce((reversedString, char) => char + reversedString, '');
}

// O(n) - there is actually no need to transform the string into the array
function reverseStringNoArray(string: string): string {
  let reversedString = '';

  for (const char of string) {
    reversedString = char + reversedString;
  }

  return reversedString;
}

const inputString2 = 'abcdefu';

console.log(reverseStringUnshift(inputString2));
console.log(reverseStringReduce(inputString2));
console.log(reverseStringNoArray(inputString2));
