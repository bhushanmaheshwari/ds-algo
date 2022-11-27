// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

import { ListNode } from "../../_linkedlist";

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: l1 = [], l2 = []
// Output: []

// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

// RAW version
// Your runtime beats 69.23 % of javascript submissions.
// 208 / 208 test cases passed.
// 	Status: Accepted
// Runtime: 88 ms
// Memory Usage: 40.5 MB

var mergeTwoLists = function(l1, l2) {
    if(l1 && !l2) {
        return l1;
    }
    
    if(!l1 && l2) {
        return l2;
    }
    
    if(!l1 && !l2){
        return null;
    }
    
    let dummy = new ListNode(0);
    let holder = new ListNode(1);
    dummy.next = holder;
    let i = 0;
    let j = 0;
    
    while(l1 && l2){
        if(l1.val > l2.val){
            holder.next = new ListNode(l2.val);
            l2= l2.next;
            holder = holder.next;
            j++;
        } else if(l2.val > l1.val){
            holder.next = new ListNode(l1.val);
            holder = holder.next;
            i++;
            l1= l1.next;
        } else {
            holder.next = new ListNode(l1.val);
            holder = holder.next;
            holder.next = new ListNode(l2.val);
            holder = holder.next;
            l2 = l2.next;
            l1 = l1.next;
            i++;
            j++;
        }
    }
    if(l2){
       while(l2) {
            holder.next = new ListNode(l2.val);
            holder = holder.next;
            l2 = l2.next;
       } 
    } else {
        while(l1) {
            holder.next = new ListNode(l1.val);
            holder = holder.next;
            l1 = l1.next;
       } 
    }
    return dummy.next.next;
};