// check if the two provided strings are anagrams of each other
// strings are anagrams if they use the same characters in the same
// quantity. For this problem we won't consider spaces, dots, commas, etc.
// as characters and will consider capital letters equal to lower case letters

// O(n)
function stringsAreAnagramsVer3(stringOne: string, stringTwo: string): boolean {
  return sortedString(stringOne) === sortedString(stringTwo);
}

// helper function to remove any non-latin characters and sort letters, with sorting there is no
// need to iterate through string map and compare the number of chars because we can directly
// compare two sorted strings
function sortedString(inputString: string): string {
  return inputString.replaceAll(/\W/g, '').toLowerCase().split('').sort().join('');
}

// should return true
console.log(stringsAreAnagramsVer3('Fairy Tales', 'Rail safety'));

// should return false
console.log(stringsAreAnagramsVer3('Fairy Pales', 'Rail safety'));

// should return false
console.log(stringsAreAnagramsVer3('Hello there!', 'General Kenobi...'));

// should return true
console.log(stringsAreAnagramsVer3('Hello there!', 'thEreHELLO'));
