// SOLUTION 1: // sort and match O(2nlogn)==nlogn, O(1)
// 34 / 34 test cases passed.
// 	Status: Accepted
// Runtime: 120 ms
// Memory Usage: 43.3 MB
// BAD : Your runtime beats 29.59 % of typescript submissions
function isAnagram(s: string, t: string): boolean {
    if (s === t) return true;
    if (!s || !t) return false;
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    return s === t;
};


// SOLUTION 2: using JSON object, hashmap to hold the count of first string
// 34 / 34 test cases passed.
//     Status: Accepted
// Runtime: 92 ms
// Memory Usage: 39.5 MB

// Your runtime beats 86.73 % of typescript submissions.   

function isAnagram_2(s: string, t: string): boolean {
    
    // caar // raac
    
    if(s===t) return true;
    
    if(!s || !t) return false;
    
    if(s.length !== t.length)  return false;
    
    const obj: any = {};
        
    for(let c of s){
        if(obj[c]){
            obj[c]++;
        } else {
            obj[c] = 1;
        }
    }
    for(let c of t){
        if(obj[c]){
            obj[c]--;
            if(obj[c] === 0) { delete obj[c]; }
        } else {
            return false;
        }
    }
    return true;
};