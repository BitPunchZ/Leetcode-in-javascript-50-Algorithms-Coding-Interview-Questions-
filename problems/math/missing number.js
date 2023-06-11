var missingNumber = function(nums) {
    let currentSum = nums.reduce((a, b) => a + b);
    let intendedSum = nums.length * (nums.length + 1 ) / 2;
    return intendedSum - currentSum;
};