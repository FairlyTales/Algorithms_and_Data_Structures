// O(1)
function isPowerOfTwo_Bitwise(num: number): boolean {
  if (!Number.isInteger(num) || num < 1) return false;

  // since any power of 2 minus 1 is all ones in binary system, i.e.:
  // 4 in binary is 0100
  // 1 in binary is 0001
  // 4 - 1 = 3 in binary is 0100 - 0001 = 0011
  // same way the 8 - 1 is 0111 and 16 - 1 is 1111
  // so if we use AND for num and num - 1 we will get
  // zeros only if the number is a power of two
  return (num & (num - 1)) === 0;
}

// should return true
console.log('Bitwise 16: ' + isPowerOfTwo_Bitwise(16));

// should return false
console.log('Bitwise 45: ' + isPowerOfTwo_Bitwise(45));
