// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false

// Example 2:

// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?


// SOLUTION 1: USING STACK - O(n) and O(n)
// 26 / 26 test cases passed.
// 	Status: Accepted
// Runtime: 88 ms
// Memory Usage: 43 MB

// Your runtime beats 44.64 % of javascript submissions

var isPalindrome_ll = function(head) {
    const stack = [];
    
    let node = head;
    while(node) {
        stack.push(node.val);
        node = node.next;
    }

    node = head;
    while(node) {
        if(node.val !== stack.pop()){
            return false;
        }
        node = node.next;
    }
    return true;
};



// SOLUTION 2: Using Reverse Linklist logic

// 26 / 26 test cases passed.
// 	Status: Accepted
// Runtime: 96 ms
// Memory Usage: 41.8 MB
// Your runtime beats 27.53 % of javascript submissions.

var isPalindrome_reverse = function(head) {
    if(head===null) {
         return true;
     }
     
     let node = head;
     let fast = head;
     while(fast && fast.next && fast.next.next) {
         node = node.next;
         fast = fast.next.next;
     }
 
     const even = (fast && fast.next) ? true : false;
     
     let reverse = even ? reverse_helper(node.next) : reverse_helper(node);
     node = head;
     while(reverse && node){
         if(reverse.val !== node.val){
             return false;
         }
         reverse = reverse.next;
         node = node.next;
     }
     
     return true;
     
 };
 
 function reverse_helper(head) {
     if(head  === null || head.next === null){
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
 }