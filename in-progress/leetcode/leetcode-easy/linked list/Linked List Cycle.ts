// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Follow up:
// Can you solve it using O(1) (i.e. constant) memory?

 // Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


// 17 / 17 test cases passed.
// Status: Accepted
// Runtime: 92 ms
// Memory Usage: 41.4 MB

// Your runtime beats 31.78 % of javascript submissions - However same as 100%

var hasCycle = function(head) {
    if(!head || !head.next) {
        return false;
    }
    
    let fast = head.next;
    let slow = head;
       
    while(slow && fast && fast.next) {
        if(fast === slow){
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};