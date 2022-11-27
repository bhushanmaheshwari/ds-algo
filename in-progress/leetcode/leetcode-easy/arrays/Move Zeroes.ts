// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:

//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.



// SOLUTION 1: got a 0? splice, make i--, a(dynamic length)--

// 21 / 21 test cases passed.
// 	Status: Accepted
// Runtime: 80 ms
// Memory Usage: 41 MB
// Your runtime beats 92.86 % of typescript submissions

function moveZeroes(nums: number[]): void {
    // Input: [0,1,0,3,12] 
    // 1. got a 0? splice, make i--, a(dynamic length)--
    // Output: [1,3,12,0,0]
    if (nums.length < 2) {
        return;
    }
       
    let l = nums.length;
    for(let i=0; i < l; i++){
        if(nums[i] === 0) {
            nums.splice(i,1);
            nums.push(0);
            i--;
            l--;
        }
    }
};