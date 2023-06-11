/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const m = {}
    const n = nums.length
    const ans = []
    
    for (let i = 0; i < n; i++) {
        remaining = target - nums[i]
        if(remaining in m){
            return [m[remaining],i]
        }
        //indicate that we've seen the element, so that if it's the remaining of 
        //a later operation, we return true
        m[nums[i]] = i 
    }
    return false
};