// permutations are the different ways in which a collection of items can be
// arranged; permutations without repetition don't have more than 1 same
// element, while permutations with repetition can have any number of
// the same element

type PermutationsArray = Array<number[]>;

// O(n^r) - where n is the number of elements, r is the output length
function calcPermutation_WithRepetition(
  elements: number[],
  outputLength: number
): PermutationsArray {
  const permutations: PermutationsArray = [];

  if (outputLength === 1) {
    // convert elements to array of arrays with 1 element in each inner array
    return elements.map((el) => [el]);
  }

  // recursive call
  const partialPermutations = calcPermutation_WithRepetition(
    elements,
    outputLength - 1
  );

  // double loop for adding each element to each permutation subarray and
  // saving the result into the main array which will be later returned
  for (const el of elements) {
    for (const permutation of partialPermutations) {
      permutations.push([el].concat(permutation));
    }
  }

  return permutations;
}

const values = [1, 2, 3];
const outputLength = 3;

console.table(calcPermutation_WithRepetition(values, outputLength));
