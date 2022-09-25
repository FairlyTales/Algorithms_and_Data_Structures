// function accepts a string containing words and returns a string which
// has every word capitalized (i.e. first letter is a capital)

// O(n)
function capitalizeWordsInString_PrevChar_Way(inputString: string): string {
  // first letter should always be capitalized
  let capitalizedString = inputString[0].toUpperCase();

  for (let i = 1; i <= inputString.length - 1; i++) {
    let char = inputString[i];
    const prevChar = inputString[i - 1];

    // if previous character is a space it means that current character
    // is ths first character of the word and should be capitalized
    if (prevChar === ' ') {
      char = char.toUpperCase();
    }

    capitalizedString += char;
  }

  return capitalizedString;
}

// should return: I Am A String
console.log(capitalizeWordsInString_PrevChar_Way('i am a string'));

// should return: I Am A String With Comma, And Stuff!
console.log(capitalizeWordsInString_PrevChar_Way('i am a string with comma, and stuff!'));
