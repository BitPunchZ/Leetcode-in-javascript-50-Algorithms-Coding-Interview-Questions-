function majorityElement(nums) {
    let count = 1;
    let majority = nums[0];
    let n = nums.length;

    for (let i = 1; i < n; i++) {
        if (majority === nums[i]) {
            count++;
        } else {
            count--;
            if (count === 0) {
                majority = nums[i];
                count = 1;
            }
        }
    }
    
    return majority;
}
