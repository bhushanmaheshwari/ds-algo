// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:

// Input: "race a car"
// Output: false

 

// Constraints:

// consists only of printable ASCII characters.



// SOLUTION 1 : - BAD - left and right pointer using while and charAt
// 481 / 481 test cases passed.
// Status: Accepted
// Runtime: 108 ms
// Memory Usage: 42.6 MB

// Your runtime beats 31.29 % of typescript submissions

function isPalindrome(s: string): boolean {
    if(!s) return true;
    s = s.replace(/[^A-Za-z0-9]*/gi, '').toLowerCase();
    if(s.length==1) return true;
    let left = 0;
    let right = s.length - 1;
    
    while(left<right){
        if(s.charAt(left) !== s.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};



// SOLUTION 2 : - BETTER - left and right pointer using while
// 481 / 481 test cases passed.
// 	Status: Accepted
// Runtime: 100 ms
// Memory Usage: 43 MB
// Your runtime beats 48.98 % of typescript submissions.

function isPalindrome_1(s: string): boolean {
    if(!s) return true;
    s = s.replace(/[^A-Za-z0-9]*/gi, '').toLowerCase();
    if(s.length==1) return true;
    let left = 0;
    let right = s.length - 1;
    
    while(left<right){
        if(s.charAt(left) !== s.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
    
};
