// permutations are the different ways in which a collection of items can be
// arranged, i.e. there are 2 way to combine 2 elements, 6 ways to combine
// 3 elements, etc.

type PermutationsArray = Array<string[]>;

// O(n!) - very bad time complexity, but for this problem it's the only solution
// for this problem
function calcPermutation_NoRepetition(elements: string[]): PermutationsArray {
  const helperPermutationsArray: PermutationsArray = [];
  // if there is only one element in an array -> break the recursion by
  // returning this array inside a new "wrapper" array
  if (elements.length === 1) {
    return [elements];
  }

  // recursively get a subarray without the first element
  const partialPermutations = calcPermutation_NoRepetition(elements.slice(1));

  // get the first element of the array which isn't in the partial permutations
  // array and with which we need to combine the partial permutations array
  const firstElement = elements[0];

  // loop through the subarray of arrays with strings
  for (const permutation of partialPermutations) {
    // loop through the elements in each array with strings
    for (let i = 0; i <= permutation.length; i++) {
      // divide this array of strings into two parts (division point will
      // move to the right with each iteration)
      const firstPermutationPart = permutation.slice(0, i); // will be blank on the first iteration
      const secondPermutationPart = permutation.slice(i);

      // put the first element between these two parts of the array using the
      // helper "permutation" array
      // for the first iteration the first element will be put in with index 0,
      // for the second with index 1, etc.
      helperPermutationsArray.push(
        firstPermutationPart.concat([firstElement], secondPermutationPart)
      );
    }
  }

  return helperPermutationsArray;
}

const values = ['A', 'B', 'C', 'D', 'E'];

console.table(calcPermutation_NoRepetition(values));
