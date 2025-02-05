// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

let nums1 = [0,0];
let nums2 = [0,0];

let array = nums1.concat(nums2);
let sortedArray = array.sort((a, b) => a - b);

if(sortedArray.length % 2 !== 0){
    console.log(sortedArray[Math.floor(sortedArray.length / 2)]);
} else {
    console.log((sortedArray[sortedArray.length / 2] + sortedArray[(sortedArray.length / 2) - 1]) / 2);
}