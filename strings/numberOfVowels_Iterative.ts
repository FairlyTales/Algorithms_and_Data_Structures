// return the number of vowels ('a', 'i', 'e', 'o', 'u') in a string

// O(n)
function numberOfVowels_Iterative(string: string): number {
  const vowels = ['a', 'i', 'e', 'o', 'u'];

  // regexp \W matches any character that is not a word character from the basic Latin alphabet,
  // we use it to left only latin chars in out string
  return string
    .replaceAll(/\W/g, '')
    .replaceAll(' ', '')
    .toLowerCase()
    .split('')
    .reduce((vowelsAmount, char) => {
      return vowels.includes(char) ? ++vowelsAmount : vowelsAmount;
    }, 0);
}

// should return 5
console.log(numberOfVowels_Iterative('Just a random string!'));

// should return 1
console.log(numberOfVowels_Iterative('lol'));

// should return 0
console.log(numberOfVowels_Iterative('wwwrrrtttppp'));
