
// Example 1:

// Input: "42"
// Output: 42

// Example 2:

// Input: "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign.
//              Then take as many numerical digits as possible, which gets 42.

// Example 3:

// Input: "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

// Example 4:

// Input: "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical 
//              digit or a +/- sign. Therefore no valid conversion could be performed.

// Example 5:

// Input: "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
//              Thefore INT_MIN (−231) is returned.


// SOLUTION:
// 1079 / 1079 test cases passed.
// 	Status: Accepted
// Runtime: 100 ms
// Memory Usage: 42.4 MB
// Your runtime beats 68.75 % of typescript submissions.
function myAtoi(str: string): number {
    if(!str) return 0;
    
    let result = '';
    for(let c=0; c<str.length; c++){
        const cc = str[c];
        
        if(cc === ' ') {
            if(result) { break; }
            continue;
        }
                
        if((cc === '0' || cc === '+' || cc === '-') && result === '') {
            result = result + cc;
        }
        
        else if(cc.match(/[0-9]/gi)){
            result = result + cc
        } 
        
        else if(cc.match(/[^0-9]/gi)){
            break;
        }
    }
    
    const parsed = parseInt(result || '0');
    if(isNaN(parsed)) return 0;
    
    const a = Math.pow(2,31);
    if(parsed >= a){
        return a-1;
    }  
    if(parsed <= -a){
        return -a;
    }  
    return parsed;
};