// Given a binary tree, check whether it is a mirror of itself(ie, symmetric around its center).

import { TreeNode } from "../../_tree";

// For example, this binary tree[1, 2, 2, 3, 4, 4, 3] is symmetric:

//        1
//       / \
//      2   2
//     / \ / \
//    3  4 4  3



// But the following[1, 2, 2, null, 3, null, 3] is not:

//      1
//     / \
//    2   2
//     \   \
//      3   3



// Follow up: Solve it both recursively and iteratively.


// SOLUTION 1 : RECURSIVE
// 195 / 195 test cases passed.
// Status: Accepted
// Runtime: 132 ms
// Memory Usage: 40.7 MB
// Your runtime beats 11.69 % of typescript submissions
// Howver code is almost same as 100% one.

// left.val === right === val
// left.left.val === right.right.val
// right.left.val === left.right.val


function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    return symmetric(root.left, root.right);
};

function symmetric(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left === null || right === null) {
        return left === right;
    }
    if (left.val !== right.val) {
        return false;
    }
    if (!symmetric(left.left, right.right)) {
        return false;
    }
    if (!symmetric(left.right, right.left)) {
        return false;
    }
    return true;

}

// SOLUTION 1 : ITERATIVE

// using BFS via Queue
// order of insertion would be left.left, right.right, left.right, right.left)