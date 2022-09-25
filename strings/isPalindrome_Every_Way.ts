// check if the string is a palindrome

// O(n)
function isPalindromeEveryWay(string: string): boolean {
  return string.split('').every((value, index, array) => {
    // console.log(value)
    // console.log(array[array.length - index - 1])
    return value === array[array.length - index - 1];
  });
}

console.log(isPalindromeEveryWay('asddsa'));
console.log(isPalindromeEveryWay('qwerty'));
