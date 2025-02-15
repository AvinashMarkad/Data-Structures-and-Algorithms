function isSubarray(subarray, mainArray) {
    // If the subarray is empty, it's always a subarray
    if (subarray.length === 0) return true;

    // If the subarray is longer than the main array, it can't be a subarray
    if (subarray.length > mainArray.length) return false;

    // Convert both arrays to strings for easy comparison
    const subarrayStr = subarray.toString();
    const mainArrayStr = mainArray.toString();

    // Check if the subarray string exists in the main array string
    return mainArrayStr.includes(subarrayStr);
}

// Example usage:
const mainArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const subarray1 = [3, 4, 5]; // Should return true
const subarray2 = [5, 6, 7, 8]; // Should return true
const subarray3 = [9, 10]; // Should return false
const subarray4 = []; // Should return true (empty array is always a subarray)

console.log(isSubarray(subarray1, mainArray)); // true
console.log(isSubarray(subarray2, mainArray)); // true
console.log(isSubarray(subarray3, mainArray)); // false
console.log(isSubarray(subarray4, mainArray)); // true