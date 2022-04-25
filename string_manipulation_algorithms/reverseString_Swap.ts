// reversing the string using JS String and Array methods

// O(n) - swapping char positions
function reverseString(string: string): string {
  const arr = string.split('');

  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];

    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;

    // console.log('iter: ' + i)
    // console.log(arr[i]);
    // console.log(arr[arr.length - 1 - i]);
  }

  return arr.join('');
}

const inputString = 'abcdefu';

console.log(reverseString(inputString));
