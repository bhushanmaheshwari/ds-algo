// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Note:

//     Each element in the result should appear as many times as it shows in both arrays.
//     The result can be in any order.

// Follow up:

//     What if the given array is already sorted? How would you optimize your algorithm?
//     What if nums1's size is small compared to nums2's size? Which algorithm is better?
//     What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?





// SOLUTION: 1 Sorting and two pointer approach. - Time (nlogn + mlogm + m) and Space (m)

// 61 / 61 test cases passed.
// 	Status: Accepted
// Runtime: 88 ms
// Memory Usage: 40.6 MB

// Your runtime beats 58.24 % of typescript submissions.

function intersect(nums1: number[], nums2: number[]): number[] {
    nums1 = nums1.sort((a,b)=>a-b);
    nums2 = nums2.sort((a,b)=>a-b);
    let result = [];
    let i = 0;
    let j = 0;
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] > nums2[j]){ 
            j++;        
        } else if(nums1[i] < nums2[j]){
            i++;
        } else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }
    return result;
};


// SOLUTION 2 : Use maps with count - Space = o(n + m + m) and Time = O(n + m + m) 