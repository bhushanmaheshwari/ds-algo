// // question:
// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

// Follow up:

//     A straight forward solution using O(mn) space is probably a bad idea.
//     A simple improvement uses O(m + n) space, but still not the best solution.
//     Could you devise a constant space solution?

//     Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:

//     m == matrix.length
//     n == matrix[0].length
//     1 <= m, n <= 200
//     -231 <= matrix[i][j] <= 231 - 1



// solution-1
// BRUTE FORCE COULD BE - n^2 | nested loops
// 164 / 164 test cases passed.
// Status: Accepted
// Runtime: 92 ms
// Memory Usage: 39.8 MB

// Your runtime beats 94.44 % of typescript submissions

function setZeroes(matrix: number[][]): void {
    const zeroRows = new Set();
    const zeroColumns = new Set();
    for (let m = 0; m < matrix.length; m++) {
        for (let n = 0; n < matrix[m].length; n++) {
            if (matrix[m][n] === 0) {
                zeroRows.add(m);
                zeroColumns.add(n);
            }
        }
    }

    for (let m = 0; m < matrix.length; m++) {
        let makeZero = false;
        if (zeroRows.has(m)) {
            makeZero = true;
        }
        for (let n = 0; n < matrix[m].length; n++) {
            if (makeZero) {
                matrix[m][n] = 0;
            } else {
                if (zeroColumns.has(n)) {
                    matrix[m][n] = 0;
                }
            }
        }
    }
};


// solution-2 could be you dont use zeroRows zeroColumns sets, and use first cell of row or column as markers. 

