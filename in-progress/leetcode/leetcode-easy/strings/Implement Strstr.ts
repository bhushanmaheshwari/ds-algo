// hello --> ll
    // run a loop on hello
    // compare with first of needle. 
    // keep matching - worst case if needle === haystack O(n^2)
    
/// Some issue wirh leetcode, it is giving weird runtime

// 77 / 77 test cases passed.
// 	Status: Accepted
// Runtime: 4872 ms
// Memory Usage: 41.6 MB
    

function strStr(haystack: string, needle: string): number {
    if(!needle) return 0;
    if(needle.length > haystack.length) return -1;
    if(needle === haystack) return 0;
    for(let c=0; c < haystack.length; c++){
        if(haystack[c] === needle[0]){
            let match = true;
            for(let n=0; n<needle.length; n++){
                if(haystack[c+n]!==needle[n]){
                    match = false;
                } 
            }
            if(match) return c;
        }   
    } 
    return -1;
};