
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

import { TreeNode } from "../../_tree";

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]


// 34 / 34 test cases passed.
// 	Status: Accepted
// Runtime: 80 ms
// Memory Usage: 40.6 MB

// Your runtime beats 90.38 % of typescript submissions.

function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];

    if(root === null) {
        return result;
    }
    
    const queue = [root];
    
    while(queue.length > 0){
        const levelList = [];
        const size = queue.length;
        
        for(let i=0; i<size; i++){
            const node = queue.shift();
            
            if(node){
                levelList.push(node.val);

                if(node.left) { 
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);    
                }
            }
        }
        result.push(levelList);
    }
    
    return result;
};