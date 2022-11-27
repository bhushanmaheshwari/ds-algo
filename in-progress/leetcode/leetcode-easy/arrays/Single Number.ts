// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1

// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


// 
// SOLUTION :1 : XOR Operator O(n) && O(1)
// Your runtime beats 77.08 % of typescript submissions.
// 16 / 16 test cases passed.
// 	Status: Accepted
// Runtime: 84 ms
// Memory Usage: 38.2 MB
function singleNumber(nums: number[]): number {
    let value = 0;

    nums.forEach(n => {
        value ^= n;
    });

    return value;
};

// SOLUTION :2 : HASH TABLE O(n) && O(n)


// SOLUTION :3 : Maths formula (solved below) : O(n) && O(n)
// LOGIC = 2*(a+b+c) - (a+a+b+b+c) = c;  
// 16 / 16 test cases passed.
// 	Status: Accepted
// Runtime: 92 ms
// Memory Usage: 40.2 MB
// Your runtime beats 55.73 % of typescript submissions

function singleNumber_2(nums: number[]): number {
    let totalUniqueSum = 0;
    let totalSum = 0;
    const hashSet = new Set();
    for (let s of nums) {
        totalSum = totalSum + s;
        if (!hashSet.has(s)) {
            hashSet.add(s);
            totalUniqueSum = totalUniqueSum + s;
        }
    }
    return (2 * totalUniqueSum) - totalSum;
};


