---
id: fast-slow-pointers
title: Fast and Slow Pointers
sidebar_label: Fast and Slow Pointers
---


In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all `the contiguous subarrays (or sub lists) of a given size. ` 

For example, take a look at this problem:

**Given an array, find the average of all contiguous subarrays of size ‘K’ in it**


- `Input : [2, 1, 5, 1, 3, 2], k=3` -> `Subarray with maximum sum is [5, 1, 3]` -> `Output : 9`
- `Input : [2, 3, 4, 1, 5], k=2` -> `Subarray with maximum sum is [3, 4]` -> `Output : 7`


## Maximum Sum Subarray of Size K (easy)


```jsx title="find a maximum sum subarray for size k"
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0;

  for (i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;
    for (j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);
```
