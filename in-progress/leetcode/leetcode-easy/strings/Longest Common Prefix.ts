// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:

// All given inputs are in lowercase letters a-z.



// SOLUTION 1 : BRUTE FORCE : O(n*m).

function longestCommonPrefix(strs: string[]): string {
    // 1. run a loop
    // 2. create a hashmap on first one --> default value as false. 
    // 3. if 
   
    if(strs && strs.length){
        let r = strs[0];
        let ir = strs[0];
        let refStr = strs[0];
        for(let s=0; s < strs.length; s++){
            for(let c = 0; c< strs[s].length;c++){
                if(strs[s][c] === refStr[c]){
                    ir = ir + refStr[c];
                } else {
                    break;
                }
            }
             r = ir.length < r.length ? ir : r;
             ir = '';
        }
        return r;
    }
    return '';
};