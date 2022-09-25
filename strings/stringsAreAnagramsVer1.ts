// check if the two provided strings are anagrams of each other
// strings are anagrams if they use the same characters in the same
// quantity. For this problem we won't consider spaces, dots, commas, etc.
// as characters and will consider capital letters equal to lower case letters

// O(n)
function stringsAreAnagramsVer1(stringOne: string, stringTwo: string): boolean {
  let result = true;

  // regexp \W matches any character that is not a word character from the basic Latin alphabet,
  // we use it to left only latin chars in out string
  const stringLettersOne = stringOne.replaceAll(/\W/g, '').toLowerCase().split('');
  const stringLettersTwo = stringTwo.replaceAll(/\W/g, '').toLowerCase().split('');

  // if the total numbers of letters are not equal then it's not an anagram, and we can finish here
  if (stringLettersOne.length !== stringLettersTwo.length) return false;

  const stringMapOne: Map<string, number> = new Map;
  const stringMapTwo: Map<string, number> = new Map;

  stringLettersOne.map((char) => {
      if (stringMapOne.has(char)) stringMapOne.set(char, stringMapOne.get(char)! + 1);
      else stringMapOne.set(char, 1);
    },
  );

  stringLettersTwo.map((char) => {
      if (stringMapTwo.has(char)) stringMapTwo.set(char, stringMapTwo.get(char)! + 1);
      else stringMapTwo.set(char, 1);
    },
  );

  stringMapOne.forEach((value, key, map) => {
    if (!stringMapTwo.has(key)) return result = false;
    if (stringMapTwo.get(key) !== value) return result = false;
  });

  return result;
}

// should return true
console.log(stringsAreAnagramsVer1('Fairy Tales', 'Rail safety'));

// should return false
console.log(stringsAreAnagramsVer1('Hello there!', 'General Kenobi...'));

// should return true
console.log(stringsAreAnagramsVer1('Hello there!', 'thEreHELLO'));
