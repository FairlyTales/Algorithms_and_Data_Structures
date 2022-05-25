// function should accept a positive number N and console log a step shape using
// the # character like shown down below. Each step must have spaces
// on the right side. An example:
// #
// ##
// ###

function printStep_Recursive_Approach(stepsAmount: number, currentRow = 0, step = ''): void {
  // if all steps were printed -> finish
  if (stepsAmount === currentRow) return;

  // if the current row is finished -> print it, recursively move to the next row
  if (stepsAmount === step.length) {
    // printing a '|' char on the right to check whether the spaces were added correctly
    console.log(step + '|');
    printStep_Recursive_Approach(stepsAmount, currentRow + 1);

    return;
  }

  // add '#' or space depending on the current state of the step
  if (step.length <= currentRow) step += '#';
  else step += ' ';

  // recursively call the function to continue building the current step
  printStep_Recursive_Approach(stepsAmount, currentRow, step);
}

printStep_Recursive_Approach(10);
