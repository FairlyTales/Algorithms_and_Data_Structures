// return an object containing the most used char and number of its uses (spaces are to be ignored)

interface mostlyUsedChar {
  char: string;
  timesUsed: number;
}

// O(n)
function mostlyUsedChar(string: string): mostlyUsedChar {
  const charMap: Map<string, number> = new Map;

  string.replaceAll(' ', '').split('').map((char) => {
      if (charMap.has(char)) charMap.set(char, charMap.get(char)! + 1);
      else charMap.set(char, 1);
    },
  );

  let [maxChar] = charMap.keys();

  charMap.forEach((value, key) => {
    if (value > charMap.get(maxChar)!) maxChar = key;
  });

  return {
    char: maxChar,
    timesUsed: charMap.get(maxChar) || 0,
  };
}

console.log(mostlyUsedChar('qweq'));
console.log(mostlyUsedChar('4444444444444jkasdjkhvd'));
console.log(mostlyUsedChar('12312312312345222'));
console.log(mostlyUsedChar('Hi! I\'m just a random string!'));
