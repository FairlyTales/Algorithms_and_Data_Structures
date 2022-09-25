// Print integers 1 to N, but print “Fizz” if an integer is divisible by
// 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an
// integer is divisible by both 3 and 5

function fizzBuzz(finalNumber: number): void {
  for (let i = 1; i <= finalNumber; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) console.log('fizzBuzz');

    else if (i % 3 === 0) console.log('fizz');

    else if (i % 5 === 0) console.log('buzz');

    else console.log(i);
  }
}

fizzBuzz(15);
