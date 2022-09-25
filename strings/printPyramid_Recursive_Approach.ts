// function should accept a positive number N and console log a pyramid shape on N levels
// using the # character like shown down below. Each step must have spaces
// on both sides. An example:
//   #
//  ###
// #####

function printPyramid_Recursive_Approach(n: number, row = 0, step = ''): void {
  // if we've reached the end finish recursion
  if (row === n) return;

  if (step.length === 2 * n - 1) {
    console.log(step);

    // move to the next row
    return printPyramid_Recursive_Approach(n, row + 1);
  }

  // calculating the midpoint or a middle column of a matrix
  const midpoint = Math.floor((2 * n - 1) / 2);
  let updatedStep = step;

  // check if we are inside the range where the # should be printed and add #, otherwise print space
  if (midpoint + row >= step.length && midpoint - row <= step.length) {
    updatedStep += '#';
  } else {
    updatedStep += ' ';
  }

  // move to the next column
  printPyramid_Recursive_Approach(n, row, updatedStep);
}

printPyramid_Recursive_Approach(10);
