// function should accept a positive number N and console log a step shape using
// the # character like shown down below. Each step must have spaces
// on the right side. An example:
// #
// ##
// ###

// just replaced 2 inner loops with one loop with if statement

// O(n^2)
function printStep_Iterative_ApproachVer2(stepsAmount: number): void {
  for (let row = 1; row <= stepsAmount; row++) {
    let step = '';

    for (let column = 1; column <= stepsAmount; column++) {
      if (column <= row) step += '#';
      else step += ' ';
    }

    // printing a '|' char to the right to check whether the spaces were added correctly
    console.log(step + '|');
  }
}

printStep_Iterative_ApproachVer2(10);
