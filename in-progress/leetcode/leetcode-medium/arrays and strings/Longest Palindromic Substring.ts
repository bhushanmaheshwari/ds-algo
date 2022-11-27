// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:

// Input: "cbbd"
// Output: "bb"

// 1. BRUTE FORCE : Get palindromes at each indexed, and then find which one is the longest one.


// 2. Expand Outwards - Two pointer approach -   // run loop ; at each index try to expand it outwards until it is invalid palindrome
// 103 / 103 test cases passed.
// Status: Accepted
// Runtime: 96 ms
// Memory Usage: 39 MB
// Your runtime beats 92.98 % of typescript submissions.

function longestPalindrome(s: string): string {
    // edge cases
    if(!s || s.length < 1) { return s;}

    // max str length and str
    let strLen = 0;
    let str = '';
    
    for(let i =0; i< s.length; i++){
        // loop for panlindromes like ababa
        let l = i; let r = i;
        while(l>=0 && r<s.length && s[r] === s[l]){
            if(strLen <= r-l){
               str = s.substring(l, r + 1);
               strLen = r - l;
            }
            l--;
            r++;
        }

        // loop for panlindromes like abba
        l = i; r = i+1;
        while(l>=0 && r<s.length && s[r] === s[l]){
            if(strLen <= r-l){
               str = s.substring(l, r + 1);
               strLen = r - l;
            }
            l--;
            r++;
        }
        
    }
    return str;
};




