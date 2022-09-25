// function accepts a string containing words and returns a string which
// has every word capitalized (i.e. first letter is a capital)

// O(n)
function capitalizeFirstLetter_JS_Way(inputString: string): string {
  const words: string[] = inputString.split(' ');

  const capitalizedWords: string[] = words.map(
    (word) => word.slice(0, 1).toUpperCase() + word.slice(1),
  );

  return capitalizedWords.join(' ');
}

// should return: I Am A String
console.log(capitalizeFirstLetter_JS_Way('i am a string'));

// should return: I Am A String With Comma, And Stuff!
console.log(capitalizeFirstLetter_JS_Way('i am a string with comma, and stuff!'));
