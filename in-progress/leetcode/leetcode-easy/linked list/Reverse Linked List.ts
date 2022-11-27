// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

// Iterative Approach
// Runtime: 84 ms, faster than 47.41% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.6 MB, less than 6.82% of JavaScript online submissions for Reverse Linked List.
// 27 / 27 test cases passed.
// 	Status: Accepted
// Runtime: 84 ms
// Memory Usage: 40.6 MB
var reverseList = function(head) {
    if(head === null) {
        return null; 
    }
    
    if(head.next === null){
        return head;
    }
    
    let prev = null;
    let curr = head;
    
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    
    return prev;   
};



// Recursive Approach

