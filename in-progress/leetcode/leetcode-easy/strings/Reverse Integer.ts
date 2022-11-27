// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

// Example 2:

// Input: -123
// Output: -321

// Example 3:

// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// SOLUTION:
// approach 1 - convert to string, run a loop and reverse the string O(n), O(n)
// approach 2 - start from left and right while left<right, replace using temp variable. O(n), O(1)

// 1032 / 1032 test cases passed.
// 	Status: Accepted
// Runtime: 92 ms
// Memory Usage: 38.9 MB

// Your runtime beats 88.85 % of typescript submissions.

function reverse_int(x: number): number {
    // 123456
    // 654321
       
    const max = Math.pow(2,31);
    if(!x || x > max - 1 || x < -max) return 0;
    
    const pos = x >= 0;
    
    const xstr = [...Math.abs(x).toString()];
    let left = 0;
    let right = xstr.length - 1;
    
    while(left<right){
        const temp = xstr[left];
        xstr[left] = xstr[right];
        xstr[right] = temp;
        left++;
        right--;
    }
    const result = parseInt(xstr.join('')) * (pos?1:-1);
    if(result > max - 1 || result < -max) return 0;
    return result;
};