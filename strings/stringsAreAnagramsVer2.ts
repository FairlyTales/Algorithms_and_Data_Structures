// check if the two provided strings are anagrams of each other
// strings are anagrams if they use the same characters in the same
// quantity. For this problem we won't consider spaces, dots, commas, etc.
// as characters and will consider capital letters equal to lower case letters

// O(n)
function stringsAreAnagramsVer2(stringOne: string, stringTwo: string): boolean {
  let result = true;

  const mapOne = createMap(stringOne);
  const mapTwo = createMap(stringTwo);

  // if the total numbers of letters are not equal then it's not an anagram, and we can finish here
  if (mapOne.size !== mapTwo.size) return false;

  mapOne.forEach((value, key, map) => {
    if (!mapTwo.has(key)) return result = false;
    if (mapTwo.get(key) !== value) return result = false;
  });

  return result;
}

// helper function for creating maps from strings
function createMap(inputString: string): Map<string, number> {
  const stringMap: Map<string, number> = new Map;

  // regexp \W matches any character that is not a word character from the basic Latin alphabet,
  // we use it to left only latin chars in out string
  const stringLettersArray = inputString.replaceAll(/\W/g, '').toLowerCase().split('');

  stringLettersArray.map((char) => {
      if (stringMap.has(char)) stringMap.set(char, stringMap.get(char)! + 1);
      else stringMap.set(char, 1);
    },
  );

  return stringMap;
}

// should return true
console.log(stringsAreAnagramsVer2('Fairy Tales', 'Rail safety'));

// should return false
console.log(stringsAreAnagramsVer2('Fairy Pales', 'Rail safety'));

// should return false
console.log(stringsAreAnagramsVer2('Hello there!', 'General Kenobi...'));

// should return true
console.log(stringsAreAnagramsVer2('Hello there!', 'thEreHELLO'));
