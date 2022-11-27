// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

import { ListNode } from "../../_linkedlist";

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL

// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL



// Constraints:

//     The relative order inside both the even and odd groups should remain as it was in the input.
//     The first node is considered odd, the second node even and so on ...
//     The length of the linked list is between [0, 10^4].



// Runtime: 96 ms, faster than 27.37% of JavaScript online submissions for Odd Even Linked List.
// Memory Usage: 40.8 MB, less than 12.40% of JavaScript online submissions for Odd Even Linked List.

var oddEvenList = function (head) {
    if (head === null || head.next === null || head.next.next === null) {
        return head;
    }

    let node = head;
    const evenTrail = new ListNode(0);
    let evennode = evenTrail;

    while (node && node.next) {
        let temp = node.next;
        node.next = node.next.next;
        temp.next = null;
        evennode.next = temp;
        evennode = evennode.next;
        if (node.next) {
            node = node.next;
        }
    }

    node.next = evenTrail.next;
    return head;
};