/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 * RansomNote and magazine consist of lowercase English letters.
 */

function canConstructRansomNote(ransomNote: string, magazine: string): boolean {
  const magazineChars = magazine.split('');
  const ransomNoteChars = ransomNote.split('');

  for (const char of ransomNoteChars) {
    if (!magazineChars.includes(char)) {
      return false;
    }
  }

  return true;
}

// false
const ransomNote = 'ransom note';
const magazine = 'magazine';
console.log(canConstructRansomNote(ransomNote, magazine));

// true
const ransomNote1 = 'abc';
const magazine1 = 'cba';
console.log(canConstructRansomNote(ransomNote1, magazine1));
