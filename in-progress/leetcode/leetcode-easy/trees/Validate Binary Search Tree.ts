// Given a binary tree, determine if it is a valid binary search tree (BST).

import { TreeNode } from "../../_tree";

// Assume a BST is defined as follows:

//     The left subtree of a node contains only nodes with keys less than the node's key.
//     The right subtree of a node contains only nodes with keys greater than the node's key.
//     Both the left and right subtrees must also be binary search trees.

 

// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true

// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.



// SOLUTION - using recursion

// 75 / 75 test cases passed.
// Status: Accepted
// Runtime: 116 ms
// Memory Usage: 43.4 MB

// Your runtime beats 13.68 % of typescript submissions.

// However, it is same as top submitted solution. 


function isValidBST(root: TreeNode | null): boolean {
    return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

function validate(root: TreeNode|null, min: number, max:number) : boolean{
    if(root === null) {
        return true;
    }
    
    if(min >= root.val || max <= root.val) {
        return false;
    }
    
    if(!validate(root.left, min, root.val)){
        return false;
    }
    if(!validate(root.right, root.val, max)){
        return false;
    }
 
    return true;
}