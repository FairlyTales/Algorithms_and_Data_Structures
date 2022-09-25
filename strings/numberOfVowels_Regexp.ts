// return the number of vowels ('a', 'i', 'e', 'o', 'u') in a string
// using regexp string method .match()

// O(n)
function numberOfVowels_Regexp(string: string): number {
  const matches = string.match(/[aieou]/gi);

  return matches === null ? 0 : matches.length;
}

// should return 5
console.log(numberOfVowels_Regexp('Just a random string!'));

// should return 1
console.log(numberOfVowels_Regexp('lol'));

// should return 0
console.log(numberOfVowels_Regexp('wwwrrrtttppp'));
