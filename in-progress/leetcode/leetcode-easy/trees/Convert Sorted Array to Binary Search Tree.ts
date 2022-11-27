// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

import { TreeNode } from "../../_tree";

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5


// SOLUTION : RECURSIVE

// 32 / 32 test cases passed.
// Status: Accepted
// Runtime: 92 ms
// Memory Usage: 43.2 MB

// Your runtime beats 80.49 % of typescript submissions.

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums || nums.length < 1) {
        return null;
    }
    return createTree(nums, 0 , nums.length - 1);
};

function createTree(nums: number[], first:number, last:number): TreeNode | null {
    if(first > last){
        return null;
    }
    const mid = Math.floor(first + (last-first)/2);
    return new TreeNode(nums[mid], createTree(nums, first, mid -1 ), createTree(nums, mid+1, last));
}
