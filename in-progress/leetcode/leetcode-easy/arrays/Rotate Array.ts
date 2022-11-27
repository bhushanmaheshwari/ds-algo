
// BRUTE FORCE SOLUTION:
// 35 / 35 test cases passed.
// 	Status: Accepted
// Runtime: 108 ms
// Memory Usage: 40.2 MB

// Your runtime beats 43.61 % of typescript submissions

function rotate(nums: number[], k: number): void {
    // 1. way - splice at last and unshift at first for k times
    while (k > 0) {
        nums.unshift(nums[nums.length - 1]);
        nums.splice(nums.length - 1, 1);
        k--;
    }
};

// OPTIMIZED SOLUTION:
// 2. way - reverse the string - then reverse 0,k-1 and k, length-1
// Not completed yer

function _rotate(nums: number[], k: number): void {
    reverse_1(0, nums.length - 1, nums);
    reverse_1(0, k - 1, nums);
    reverse_1(k, nums.length - 1, nums);
}

function reverse_1(start: number, end: number, nums: number[]) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
