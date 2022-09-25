// The knapsack problem: Given a set of items, each with a weight and a value,
// determine the number of each item to include in a collection so that the
// total weight is less than or equal to a given limit and the total value is
// as large as possible.
// 0-1 knapsack problem is a variation of the knapsack which restricts the
// number of each element to 1, i.e. we can't put more than one instance of
// each element in the knapsack

type ItemList = Array<{
  name: string;
  value: number;
  weight: number;
}>;

// greedy algorithms like this one makes the best possible decision in every
// step without thinking about the consequences, these algorithms are quite
// fast to create and understand, but they won't necessarily provide the best
// results and runtime.

// here the best solution is to add items 'b' and 'c', but with the current
// order of items the algorithm gives us a result of one item: 'a', which is
// wrong. This is the main limitation of the greedy algorithms - they are not
// very reliable. But they are good if we need some algorithm ASAP.

// O(n)
function knapsack_Greedy(items: ItemList, maxWeight: number) {
  const selectedItems: ItemList = [];
  let currentWeight = 0;
  let currentValue = 0;

  for (const el of items) {
    // calculate total weight if we add the element in question
    const possibleWeight = currentWeight + el.weight;

    // if the weight is ok -> add the element, update value and weight
    if (possibleWeight <= maxWeight) {
      selectedItems.push(el);

      currentWeight = possibleWeight;
      currentValue += el.value;
    }
  }

  console.log(`Element count: ${selectedItems.length}`);
  console.log(`Total weight: ${currentWeight}`);
  console.log(`Total value: ${currentValue}`);

  return selectedItems;
}

const items: ItemList = [
  { name: 'a', value: 3, weight: 8 },
  { name: 'b', value: 6, weight: 4 },
  { name: 'c', value: 10, weight: 3 },
];
const maxWeight = 8;

console.table(knapsack_Greedy(items, maxWeight));
