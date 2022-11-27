// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

// Example 1:

// Input: String="a|raac|i", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// Example 2:

// Input: String="araaci", K=1
// Output: 2
// Explanation: The longest substring with no more than '1' distinct characters is "aa".

// Example 3:

// Input: String="cbbebi", K=3
// Output: 5
// Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

const longest_substring_with_k_distinct = function (str, k) {
  // TODO: Write your code here
  // as soon you hit K distinct, compare with old max;
  // reset and continue

  // longest_substring_with_k_distinct(araaci, 1)
  let maxDistinct = 0,
    windowStart = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (!charFrequency[str[windowEnd]]) {
      charFrequency[str[windowEnd]] = 0;
    }

    charFrequency[str[windowEnd]]++;

    while (Object.keys(charFrequency).length > k) {
      // shrink it
      charFrequency[str[windowStart]]--;
      if (charFrequency[str[windowStart]] === 0) {
        delete charFrequency[str[windowStart]];
      }
      windowStart++;
    }

    maxDistinct = Math.max(maxDistinct, windowEnd - windowStart + 1);
  }

  return maxDistinct;
};

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
);
