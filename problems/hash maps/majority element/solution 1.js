/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let m  = new Map()
    const n = nums.length
    
    for(let i=0 ; i<n ; ++i){
         m[nums[i]] ? m[nums[i]]++ : m[nums[i]] = 1
    }
    let majorityElement;
    for(let i=0 ; i<n ; ++i){
        if(m[nums[i]]>n/2) majorityElement = nums[i];
    }
    return majorityElement;
};