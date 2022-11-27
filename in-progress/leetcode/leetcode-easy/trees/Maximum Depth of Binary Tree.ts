// Given a binary tree, find its maximum depth.

import { TreeNode } from "../../_tree";

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its depth = 3.

// SOLUTION USING Recursion
// 39 / 39 test cases passed.
// 	Status: Accepted
// Runtime: 104 ms
// Memory Usage: 43.2 MB

// Your runtime beats 24.30 % of typescript submissions.
// However, it is same as top submitted solution. 


function maxDepth(root: TreeNode | null): number {
    // traverse down the tree, left and right..
    // emit count from child, add one and pass it to parent node --> recursion

    if (root === null) {
        return 0;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
};