// check if the string is a palindrome

// O(n)
function isPalindromeJSWay(string: string): boolean {
  const reversedString = string.split('').reverse().join('');

  return reversedString === string;
}

console.log(isPalindromeJSWay('asddsa'));
console.log(isPalindromeJSWay('qwerty'));
