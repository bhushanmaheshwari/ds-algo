// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// SOLUTION - Two pointer approach - left and right

// 478 / 478 test cases passed.
// Status: Accepted
// Runtime: 108 ms
// Memory Usage: 44.7 MB

// Your runtime beats 87.73 % of typescript submissions.
function reverseString(s: string[]): void {
    if(s && s.length > 1) {
        let l= 0;
        let r = s.length -1;
        while(l<r) {
          const temp = s[l];
          s[l] = s[r];
          s[r] = temp;
          l++;
          r--;  
        }
    }
};