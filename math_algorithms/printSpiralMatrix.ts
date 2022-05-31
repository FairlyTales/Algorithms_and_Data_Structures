// function should accept an integer N and return
// a NxN spiral matrix

// spiral matrix is a matrix in which number a spiraling clockwise
// for example this is a 3x3 spiral matrix:
// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]

function printSpiralMatrix(n: number): void {
  // creating N x N matrix (array of arrays)
  const results: number[][] = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  // counter which we will use to put numbers inside the matrix
  let counter = 1;

  // column and row counter variables
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  // main loop with 4 loops inside, 1 for each side of the matrix,
  // with each main loop iteration we will be kinda "cutting sides" from the
  // matrix by filling them and
  while (startCol <= endCol && startRow <= endRow) {
    // loop which fills the top side (row)
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }

    // "cut" the filled top row because it's already filled
    startRow++;

    // loop which fills the right side (column)
    for (let i = startRow; i <= endRow; i++) {
      results[i][endRow] = counter;
      counter++;
    }

    // "cut" the filled right column because it's already filled
    endCol--;

    // loop which fills the bottom side (row) moving from right to left
    // since the rightest value has been already assigned
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }

    // "cut" the filled bottom row because it's already filled
    endRow--;

    // loop which fills the left side (column) moving up from
    // bottom to the top
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }

    // "cut" the filled left column because it's already filled
    startCol++;
  }

  // printing the matrix
  for (let i = 0; i < n; i++) {
    console.log(results[i]);
  }
}

printSpiralMatrix(3);
printSpiralMatrix(5);
printSpiralMatrix(6);
