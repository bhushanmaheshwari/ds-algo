// Given the head of a linked list, remove the nth node from the end of the list and return its head.

import { ListNode } from "../../_linkedlist";

// Runtime: 84 ms, faster than 50.28% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 40.4 MB, less than 5.83% of JavaScript online submissions for Remove Nth Node From End of List.

// 208 / 208 test cases passed.
// 	Status: Accepted
// Runtime: 84 ms
// Memory Usage: 40.4 MB

// [9,7,8,6,5]
// x=3 from end --> 8
// n is end --> (n-x+1)
var removeNthFromEnd = function(head, n) {
    // to avoid edge cases if head is null 
    let proxy = new ListNode(0);
    proxy.next = head;
 
    let first = proxy;
    let second = proxy;
    
    let ctr = 0;
    while(ctr <= n){
        ctr++;
        first = first.next;
    }  
    
    while(first){
        first = first.next;
        second = second.next;
    }
 
    second.next = second.next.next;
    
    return proxy.next;
};