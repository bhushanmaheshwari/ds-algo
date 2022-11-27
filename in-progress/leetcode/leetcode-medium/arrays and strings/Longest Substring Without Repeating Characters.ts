// Given a string s, find the length of the longest substring without repeating characters.


// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Example 4:

// Input: s = ""
// Output: 0

 

// Constraints:

//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.



// SOLUTION:

// Window slider algorithm
// 987 / 987 test cases passed.
// Status: Accepted
// Runtime: 108 ms
// Memory Usage: 41.8 MB

// Your runtime beats 84.73 % of typescript submissions.

function lengthOfLongestSubstring(s: string): number {
    if(s.length === 0) {
        return 0;
    }
    if(!s.trim()){
        return 1;
    }
    
    let charMap = new Set();
    let max = 1;
    let leftPointer = 0;
    let runningPointer = 0;
    
    while(runningPointer < s.length){
        if(charMap.has(s[runningPointer])){
           charMap.delete(s[leftPointer]);
           leftPointer++;
        } else {
           charMap.add(s[runningPointer]);
           runningPointer++;
           max = (runningPointer - leftPointer) > max ? (runningPointer - leftPointer): max;
        }             
    }
    return max;
};