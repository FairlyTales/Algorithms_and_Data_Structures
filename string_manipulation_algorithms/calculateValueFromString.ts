// function should calculate value using the provided string with operands and operators
// examples are:
// calc(7 2 * 3 +'); -> 7 * 2 + 3 = 17
// calc('7 2 3 1 + * -'); -> 7 - 2 * (3 + 1) = -1
// calc('7 2 3 * -'); -> 7 - (2 * 3) = 1
// calc('11 -12 -'); -> 11 - -12 = 23
// calc('7 2 3 1 * - - 3 5 + -'); -> 5 + 3 - (7- (2 - (3 * 1)) = 0
//
// incorrect strings are:
// calc('1 1 + +'); -> Error in Syntax - too many operators or not enough operands
// calc('1 2 2 *'); -> Error in Syntax - too many operands or not enough operators
// calc('1 b + c -')); -> Error in Syntax - only numbers and operators are allowed

function calc(string: string): number {
  const elements = string.split(' ');

  const operands = ['+', '-', '*', '/'];
  const buffer: number[] = [];

  elements.forEach((el) => {
    // el is a number
    if (!operands.includes(el)) {
      if (isNaN(Number(el))) throw 'Error in syntax';

      buffer.push(Number(el));
    } else { // el is an operand
      if (buffer.length < 2) throw 'Error in syntax';

      const lastIndex = buffer.length - 1;
      const prevIndex = lastIndex - 1;

      switch (el) {
        case '+':
          buffer[prevIndex] = buffer[prevIndex] + buffer[lastIndex];
          buffer.pop();
          break;
        case '-':
          buffer[prevIndex] = buffer[prevIndex] - buffer[lastIndex];
          buffer.pop();
          break;
        case '*':
          buffer[prevIndex] = buffer[prevIndex] * buffer[lastIndex];
          buffer.pop();
          break;
        case '/':
          buffer[prevIndex] = buffer[prevIndex] / buffer[lastIndex];
          buffer.pop();
          break;
      }
    }
  });

  if (buffer.length > 2) throw ' Error in Syntax';

  return buffer[0];
}


console.log('Should be 17: ' + calc('7 2 * 3 +')); // 7 * 2 + 3 = 17
console.log('Should be -1: ' + calc('7 2 3 1 + * -')); // 7 - 2 * (3 + 1) = -1
console.log('Should be 1: ' + calc('7 2 3 * -')); // 7 - (2 * 3) = 1
console.log('Should be 23: ' + calc('11 -12 -')); // 11 - -12 = 23
console.log('Should be 0: ' + calc('7 2 3 1 * - - 3 5 + -')); // 5 + 3 - (7- (2 - (3 * 1))) = 0

console.log('Should throw an error');
console.log(calc('1 1 + +')); // Error in Syntax
console.log(calc('1 2 2 * -')); // Error in Syntax
console.log(calc('1 b + c -')); // Error in Syntax
