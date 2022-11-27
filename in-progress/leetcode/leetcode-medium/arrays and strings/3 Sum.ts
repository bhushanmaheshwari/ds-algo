// question:
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// Notice that the solution set must not contain duplicate triplets.


// solution-1
// BRUTE FORCE COULD BE - n^3 | three loops and get the array

// solution-2
// OPTIMIZED - ONE LOOP + TWO SUM POINTER Approach.  
// Your runtime beats 98.00 % of typescript submissions.
// 318 / 318 test cases passed.
// Status: Accepted
// Runtime: 144 ms
// Memory Usage: 47.7 MB

function threeSum(nums: number[]): number[][] {
    const result = [];
    if(nums && nums.length < 3){
        return [];
    }
    nums = nums.sort((a,b)=>a-b);
    for(let i=0; i < nums.length; i++){
        if(nums[i-1] !== nums[i]){
            let l = i + 1;
            let r = nums.length -1;
            while (l < r){
                const sum = nums[i] + nums[l] + nums[r];
                if(sum > 0){
                    r--;
                } else if(sum < 0){
                    l++;
                } else {
                    result.push([nums[i],nums[l],nums[r]]);
                    l++;
                    while(nums[l-1]===nums[l]) {
                        l++;
                    }
                }
            }
        }
    }
    return result;
};

