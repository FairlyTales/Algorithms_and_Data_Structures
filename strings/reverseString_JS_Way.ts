// reversing the string using JS String and Array methods

// O(n) - the most JS way to reverse the string, but kinda cheaty ^_^
function reverseStringJsWay(string: string): string {
  return string.split('').reverse().join('');
}

const inputString1 = 'abcdefu';

console.log(reverseStringJsWay(inputString1)); // returns 'ufedcba'
