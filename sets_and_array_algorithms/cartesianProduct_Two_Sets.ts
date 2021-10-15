// cartesian product of sets A and B is a set of all possible ordered pairs
// with first element from set A and the second element from set B

type CartesianProduct = Array<[string, string]>;

// O(n * m) - where n and m are the numbers of elements in the first and second
// sets respectively, we can assume that in the worst case the length of the
// each set will be equal to the length of the longest set, in this case:
// O(n^2)
function cartesianProduct_Two_Sets(
  setA: string[],
  setB: string[]
): CartesianProduct {
  const calculatedSet: CartesianProduct = [];

  for (const itemA of setA) {
    for (const itemB of setB) {
      calculatedSet.push([itemA, itemB]);
    }
  }

  return calculatedSet;
}

const setA = ["A-1", "A-2", "A-3"];
const setB = ["B-1", "B-2", "B-3", "B-4"];

console.log(cartesianProduct_Two_Sets(setA, setB));
