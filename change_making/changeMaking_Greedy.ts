// change making problem - is the problem of representing a given amount of
// money with the fewest number of coins possible from a given set of
// coin denominations (amount of coins with each nominal is unlimited)

type Coins = {
  [key: string]: number;
};

type Change = {
  selectedCoins: Coins;
  numberOfCoins: number;
};

// O(n) - if the coins array can vary
// O(1) - if the coins array is always the same
function calcChange_Greedy(coins: number[], amount: number) {
  let remainingAmount = amount;

  const calculatedChange: Change = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmount / coin);

    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount -= +coin * count;
  }

  return calculatedChange;
}

// with this set of coin values greedy algorithm gives a correct result
const coinsValues = [100, 50, 20, 10, 5, 2, 1]; // array must be sorted in descending order
const targetValue = 66;
console.table(calcChange_Greedy(coinsValues, targetValue));

// with this set of coin values greedy algorithm gives an incorrect result,
// moral of the story - greedy algorithms can be good and very useful, but they
// must be tested and used with care
const coinsValues1 = [8, 6, 5, 2, 1];
const targetValue1 = 11;
console.table(calcChange_Greedy(coinsValues1, targetValue1));
