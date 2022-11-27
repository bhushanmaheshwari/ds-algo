// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:

// Input: strs = [""]
// Output: [[""]]

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:
//     1 <= strs.length <= 104
//     0 <= strs[i].length <= 100
//     strs[i] consists of lower-case English letters.


// solution-1
// BRUTE FORCE COULD BE - n(mlogm) | single loop
// 112 / 112 test cases passed.
// 	Status: Accepted
// Runtime: 128 ms
// Memory Usage: 47.9 MB

// Runtime: 128 ms, faster than 82.35% of TypeScript online submissions for Group Anagrams.

function groupAnagrams(strs: string[]): string[][] {
    const indexMap :any = {};
    const result = [];
    
    for(let i=0; i < strs.length; i++){
        const sortedString = strs[i].split('').sort().join('');
        const resultIndex = indexMap[sortedString];
        if(resultIndex || resultIndex > -1) {
            result[resultIndex].push(strs[i]);
        } else {
            result.push([strs[i]]);
            indexMap[sortedString] = result.length -1;
        }
    }
    return result;
};