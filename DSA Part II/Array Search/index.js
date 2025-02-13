class Solution {
    search(arr, x) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === x) {
                return i; // Return the first occurrence index
            }
        }
        return -1; // Return -1 if x is not found
    }
}

let arr = [1, 2, 4, 5, 7, 8, 3];
console.log(new Solution().search(arr, 7)); // 4