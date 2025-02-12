nums = [-1, 0, 1, 2, -1, -4]

var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array
    let result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Move left and right to the next distinct numbers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase sum by moving left pointer
            } else {
                right--; // Decrease sum by moving right pointer
            }
        }
    }
    
    return result;
};

console.log(threeSum(nums))