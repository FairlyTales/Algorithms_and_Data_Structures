// function should accept a positive number N and console log a pyramid shape on N levels
// using the # character like shown down below. Each step must have spaces
// on both sides. An example:
//   #
//  ###
// #####

//
function printPyramid_Iterative_Approach(levels: number): void {
  // total number of columns in the matrix
  const numberOfColumns = levels * 2 - 1;

  // calculating the midpoint or a middle column of a matrix
  const midpoint = Math.floor(numberOfColumns / 2);

  for (let row = 0; row < levels; row++) {
    let level = '';

    for (let column = 0; column < numberOfColumns; column++) {
      // check if we are inside the range where the # should be printed and add #, otherwise print space
      if (column >= midpoint - row && column <= midpoint + row) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}

printPyramid_Iterative_Approach(10);
