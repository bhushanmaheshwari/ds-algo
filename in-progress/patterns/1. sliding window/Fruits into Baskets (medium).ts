// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

// Example 1:

// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

// Example 2:

// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

// approach - we need to last two max
const fruits_into_baskets = function (fruits) {
  // TODO: Write your code here
  // go thru the loop
  // add new items to fMap; old items ++
  // inner loop to check that it shouldnt hold keys > 2
  // keep shrinking the window until the above condition is met
  const fMap = {};
  let windowStart = 0,
    maxLength = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const element = fruits[windowEnd];
    if (!fMap[element]) {
      fMap[element] = 0;
    }
    fMap[element]++;

    while (Object.keys(fMap).length > 2) {
      // pushing out
      fMap[fruits[windowStart]]--;
      if (fMap[fruits[windowStart]] === 0) {
        delete fMap[fruits[windowStart]];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};



console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);
