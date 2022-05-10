// The knapsack problem: Given a set of items, each with a weight and a value,
// determine the number of each item to include in a collection so that the
// total weight is less than or equal to a given limit and the total value is
// as large as possible.
// 0-1 knapsack problem is a variation of the knapsack which restricts the
// number of each element to 1, i.e. we can't put more than one instance of
// each element in the knapsack

type Item = {
  name: string;
  value: number;
  weight: number;
};

type ItemList = Array<Item>;

type Sack = {
  items: ItemList;
  value: number;
  weight: number;
};

type MemoizedArray = Sack[][];

// O(n*capacity) - with memoization
// O(2^n) - without memoization
function knapsack_Dynamic(items: ItemList, capacity: number) {
  function calcKnapsack(
    items: ItemList,
    capacity: number,
    itemIndex: number,
    memo: MemoizedArray
  ): Sack {
    // if value is already calculated -> return it from memo and break recursion
    if (memo[capacity][itemIndex]) {
      return memo[capacity][itemIndex];
    }

    // if we are either in the end of the recursion tree or if we've already
    // used up all capacity -> break recursion by returning "basic" sack
    // without anything because we can't add anything if we have no capacity
    // left or no items to add
    if (capacity === 0 || itemIndex < 0) {
      return { items: [], value: 0, weight: 0 } as Sack;
    }

    // if item is too heavy to be added in this branch -> we don't add it go
    // straight to checking the next item (itemIndex - 1)
    if (capacity < items[itemIndex].weight) {
      return calcKnapsack(items, capacity, itemIndex - 1, memo);
    }

    // calculate knapsack variation and value if we won't add current item
    const sackWithoutItem: Sack = calcKnapsack(
      items,
      capacity,
      itemIndex - 1,
      memo
    );
    const valueWithoutItem = sackWithoutItem.value;

    // calculate knapsack variation and value if we will add current item
    const sackWithItem: Sack = calcKnapsack(
      items,
      capacity - items[itemIndex].weight,
      itemIndex - 1,
      memo
    );
    const valueWithItem = sackWithItem.value + items[itemIndex].value;

    // if value in branch (remember: sackWithItem and sackWithoutItem both
    // represent branches which also have their own branches) to which we've
    // added the current item is bigger -> "select" this branch by adding it
    // to the final sack.
    // if not -> don't add current item
    let resultSack: Sack;
    if (valueWithItem > valueWithoutItem) {
      resultSack = {
        items: sackWithItem.items.concat(items[itemIndex]),
        value: sackWithItem.value + items[itemIndex].value,
        weight: sackWithItem.weight + items[itemIndex].weight,
      };
    } else {
      resultSack = sackWithoutItem;
    }

    // update the memo with freshly calculated sack
    memo[capacity][itemIndex] = resultSack;

    return resultSack;
  }

  // create a memo - a 2d array filled with undefined values, we will fill it
  // sack
  const memo: MemoizedArray = Array.from(Array(capacity + 1), () =>
    Array(items.length).fill(undefined)
  );

  // since we start from the end of the array:
  const itemIndex = items.length - 1;

  return calcKnapsack(items, capacity, itemIndex, memo);
}

//
// ----------------------------------------------------------------------------
//

const items: ItemList = [
  { name: 'a', value: 3, weight: 8 },
  { name: 'b', value: 6, weight: 4 },
  { name: 'c', value: 10, weight: 3 },
];
const maxCapacity = 12;

console.log(knapsack_Dynamic(items, maxCapacity));
