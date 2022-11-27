// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:

// Input: digits = [0]
// Output: [1]

 

// Constraints:

//     1 <= digits.length <= 100
//     0 <= digits[i] <= 9


// SOLUTION 1: Run a loop from end, and keep adding while sum >9. 
// 109 / 109 test cases passed.
// 	Status: Accepted
// Runtime: 84 ms
// Memory Usage: 39.1 MB
// Your runtime beats 43.38 % of typescript submissions.

function plusOne(digits: number[]): number[] {
    // [4,3,2,1] -- [4,3,2,1+1]
    // [9,9,9] -- [1,0,0,0]
    
   for(let i = digits.length-1; i>=0; i--){
        digits[i]++;
        
       if(digits[i] < 10) {
           break;
       }
       
       if(digits[i] > 9) {
            digits[i] = 0;
       }
       
       if(i===0) {
            digits.push(0);
            digits[0] = 1;
       }   
    }
    return digits;
};

