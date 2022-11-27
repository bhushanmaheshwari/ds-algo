// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.


// SOLUTION 1 : SIMPLE O(n^2)
// 18 / 18 test cases passed.
// 	Status: Accepted
// Runtime: 84 ms
// Memory Usage: 40.7 MB
// Your runtime beats 58.18 % of typescript submissions.

function countAndSay(n: number): string {
    let result = '';
    for (let i = 0; i < n; i++) {
        result = getResult(result);
    }
    return result;
};

function getResult(result: string): string {
    let output = '';
    let ctr = 1;
    for (let i = 1; i <= result.length; i++) {
        if (result[i - 1] !== result[i]) {
            output = output + ctr.toString() + result[i - 1];
            ctr = 1;
        } else {
            ctr++;
        }
    }
    return output || '1';
}

// SOLUTION 2: Need to solve using dynamic programming. 