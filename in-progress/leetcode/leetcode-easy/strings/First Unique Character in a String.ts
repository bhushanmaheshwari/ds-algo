// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.


// SOLUTION 1 BAD: RUDE method - have a map and keep a counter and later loop through the map and get the first one 

// Your runtime beats 38.79 % of typescript submissions.
// 104 / 104 test cases passed.
// 	Status: Accepted
// Runtime: 124 ms
// Memory Usage: 44.1 MB

function firstUniqChar(s: string): number {
    if(!s) return -1;
    if(s.length < 2) return 0;
    
    const mapp = new Map();
    let counter = 0;
    for (let c of s) {
      if(mapp.has(c)) 
      {
         const a =  mapp.get(c);
         mapp.set(c, { index: counter, val: a.val + 1});
      }
      else { 
        mapp.set(c, { index:counter , val: 1})
      }
      counter++;
    }
    let result = -1;
    mapp.forEach((value, key, map)=>{
        if(value.val === 1 && result < 0) { 
            result = value.index;
        }
    });
    return result;
};


// SOLUTION 2: Same with modified conditions
// 104 / 104 test cases passed.
// 	Status: Accepted
// Runtime: 112 ms
// Memory Usage: 39.9 MB

// Runtime: 112 ms, faster than 67.24% of TypeScript online submissions for First Unique Character in a String.
// Memory Usage: 39.9 MB, less than 87.07% of TypeScript online submissions for First Unique Character in a String.

function firstUniqChar_1(s: string): number {
    if(!s) return -1;
    if(s.length < 2) return 0;
    
    const mapp = new Map();
    let counter = 0;
    for (let c of s) {
      if(mapp.has(c)) 
      {
         mapp.set(c, -1);
      }
      else { 
        mapp.set(c, counter)
      }
      counter++;
    }
    for(let value of mapp.values()) {
        if(value !== -1) { 
            return value;
        }
    }
    return -1;
};
