// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

// Example 2:

// Input: [1,2,3,4]
// Output: false

// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// SOLUTION 1 : Sort and then run a loop - nlogn and O(1)

// SOLUTION 2 :  HAST SET APPROACH - O(n) and O(n)

// Your runtime beats 97.87 % of typescript submissions.
// 18 / 18 test cases passed.
// 	Status: Accepted
// Runtime: 76 ms
// Memory Usage: 42.3 MB

function containsDuplicate(nums: number[]): boolean {
    const setInt = new Set();    
    for(let s of nums){
        if(setInt.has(s)){
            return true;
        } else {
           setInt.add(s);
        }
    }
    return false;
};