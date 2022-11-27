// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// 202 / 202 test cases passed.
// 	Status: Accepted
// Runtime: 80 ms
// Memory Usage: 40.4 MB


// Your runtime beats 86.82 % of typescript submissions.

function maxSubArray(nums: number[]): number {
    // [-2,1,-3,4,-1,2,1,-5,4]
    let gt = nums[0];
    let ct = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // Subproblem --> choice 1: take current index or choice 2: take current indx + comng frm back
        ct = Math.max(nums[i], ct + nums[i]);
        // this choice is better than before chosen solution   
        gt = Math.max(ct, gt);
    }
    return gt;
};
