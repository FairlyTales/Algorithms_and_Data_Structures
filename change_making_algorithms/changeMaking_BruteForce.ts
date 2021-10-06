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

type Results = Array<Change>;

// O(n^2) - worse time complexity than with greedy approach, but the results
// are much more reliable
function calcChange_BruteForce(coins: number[], amount: number): Change {
  function calcChange_Greedy(coins: number[], amount: number): Change {
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

  const tempResults: Results = [];
  const finalResult: Change = {
    selectedCoins: {},
    // set this number to the biggest integer in JS to compare our values to it
    numberOfCoins: Number.MAX_SAFE_INTEGER,
  };

  // calculate all possible variants utilizing the greedy algorithm
  for (let i = 0; i < coins.length; i++) {
    const coinsSubset = coins.slice(i);
    const calculatedResult = calcChange_Greedy(coinsSubset, amount);
    tempResults.push(calculatedResult);
  }

  // compare all results and choose the one with the smallest amount of coins
  for (const result of tempResults) {
    if (result.numberOfCoins <= finalResult.numberOfCoins) {
      finalResult.numberOfCoins = result.numberOfCoins;
      finalResult.selectedCoins = result.selectedCoins;
    }
  }

  return finalResult;
}

const coinsValues = [100, 50, 20, 10, 5, 2, 1];
const targetValue = 66;
console.table(calcChange_BruteForce(coinsValues, targetValue));

// simple greedy algorithm fails on this set of coins/value but brute force
// algorithm finds the correct soluction
const coinsValues1 = [8, 6, 5, 2, 1];
const targetValue1 = 11;
console.table(calcChange_BruteForce(coinsValues1, targetValue1));
