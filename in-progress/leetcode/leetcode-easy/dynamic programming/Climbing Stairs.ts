// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Constraints:
// 1 <= n <= 45


// 45 / 45 test cases passed.
// 	Status: Accepted
// Runtime: 80 ms
// Memory Usage: 39.1 MB

// Your runtime beats 53.13 % of typescript submissions.

function climbStairs(n: number): number {
    
    const dp = [];
    dp.push(1); // n===0
    dp.push(1); // n===1
    
    for(let i = 2; i<=n; i++){
        dp.push(dp[i-2] + dp[i-1]); // n===2    
    }
    return dp[n];
    
};