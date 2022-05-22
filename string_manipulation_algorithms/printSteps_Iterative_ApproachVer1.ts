// function should accept a positive number N and console log a step shape using
// the # character like shown down below. Each step must have spaces
// on the right side. An example:
// #
// ##
// ###

// O(n^2)
function printSteps_Iterative_ApproachVer1(stepsAmount: number): void {
  for (let row = 1; row <= stepsAmount; row++) {
    let step = '';

    for (let j = 1; j <= row; j++) {
      step += '#';
    }

    for (let j = row; j < stepsAmount; j++) {
      step += ' ';
    }

    // printing a '|' char on the right to check whether the spaces were added correctly
    console.log(step + '|');
  }
}

printSteps_Iterative_ApproachVer1(10);
