// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



// Constraints:

//     2 <= nums.length <= 105
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.



// SOLUTION 1 : O(n^2)
// SOLUTION 2 : O(nlogn) + O(n)

// SOLUTION 3 : hashmap to keep the difference
// dont add if num[i] > target
// hashmap --> diff or the num..
// loop --> num[i] or diff...


// 29 / 29 test cases passed.
// 	Status: Accepted
// Runtime: 88 ms
// Memory Usage: 40.7 MB
// Your runtime beats 66.59 % of typescript submissions
function twoSum(nums: number[], target: number): number[] {
    if (nums.length < 1) return [];
    const hmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        // if(nums[i] > target) { continue; } only if input is +ve
        const diff = target - nums[i];
        if (hmap.has(diff)) {
            return [i, hmap.get(diff)];
        } else {
            hmap.set(nums[i], i);
        }
    }
    return [];
};

