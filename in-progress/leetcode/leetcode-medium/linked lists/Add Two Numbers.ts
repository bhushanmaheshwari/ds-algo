// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

import { ListNode } from "../../_linkedlist";

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

//     The number of nodes in each linked list is in the range [1, 100].
//     0 <= Node.val <= 9
//     It is guaranteed that the list represents a number that does not have leading zeros.


// Your runtime beats 73.23 % of typescript submissions.
// 1568 / 1568 test cases passed.
// 	Status: Accepted
// Runtime: 136 ms
// Memory Usage: 45.3 MB

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carryover  = 0;
    const sum = new ListNode(0);
    let node = sum;
    
    while(l1 || l2) {
        let total = 0;
        if(l1) {
            total = total + l1.val;
            l1 = l1.next;
        }
        if(l2) {
            total = total + l2.val;
            l2 = l2.next;
        }
        total = total + carryover;
        if(total > 9) {
            carryover = 1;
            node.next = new ListNode(total%10);
        } else {
            node.next = new ListNode(total);
            carryover = 0;
        }
        node = node.next;
    }
    
    if(carryover === 1){
        node.next = new ListNode(1);
    }
    
    return sum.next;
};