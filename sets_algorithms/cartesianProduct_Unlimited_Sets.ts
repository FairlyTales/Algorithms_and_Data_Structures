// cartesian product of sets A and B is a set of all possible ordered pairs
// with first element from set A and the second element from set B

type CartesianInput = Array<string[]>;
type CartesianProduct = Array<[string, string]>;

// O(n * m * l * k * ...) - but it's inconvenient to write, so we will assume
// that the length of all arrays is the same as the length of the longest array
// (which is kinda the worst case). So the time complexity will become:
// O(n^x), where n - length of the longest array, x - the amount of sets
function cartesianProduct_Unlimited_Sets(
  ...sets: CartesianInput
): CartesianProduct {
  function calcCartesianTwoSets(
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

  const finalSet: CartesianProduct = [];

  // for each subset except the last
  for (let i = 0; i < sets.length - 1; i++) {
    // for each subset next to outer subset (sets[i + 1], sets[i + 2], etc.)
    for (let k = i + 1; k < sets.length; k++) {
      const tempSet = calcCartesianTwoSets(sets[i], sets[k]);
      finalSet.push(...tempSet);
    }
  }

  return finalSet;
}

const setA = ["A-1", "A-2", "A-3"];
const setB = ["B-1", "B-2", "B-3", "B-4"];
const setC = ["C-1", "C-2", "C-3", "C-4", "C-5"];

// here the time complexity is: O(n^x) -> O(n^3)
console.log(cartesianProduct_Unlimited_Sets(setA, setB, setC));
