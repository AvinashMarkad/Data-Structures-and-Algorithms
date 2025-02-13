let arr = [1, 2 ,4 ,5 ,7, 8, 3];

// let peakElement = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(  arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//             return true;
//         }
//     }
// }

// console.log(peakElement(arr)); // 20

class Solution {
    peakElement(arr) {
        let n = arr.length;
        
        for (let i = 0; i < n; i++) {
            if ((i === 0 || arr[i] > arr[i - 1]) && (i === n - 1 || arr[i] > arr[i + 1])) {
                return i;
            }
        }
        
        return -1; // Should never occur based on problem constraints
    }
}

console.log(new Solution().peakElement(arr)); // 20