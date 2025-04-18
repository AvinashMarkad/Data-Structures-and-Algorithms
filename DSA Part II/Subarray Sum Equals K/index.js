var subarraySum = function(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) count++;
        }
    }
    return count;
};

// Example usage:
const nums = [1, 1, 1];
const k = 2;
console.log(subarraySum(nums, k)); // Output: 2