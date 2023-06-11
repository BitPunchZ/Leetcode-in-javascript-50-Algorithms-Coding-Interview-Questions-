



var containsDuplicate = function(nums) {
    let m = {}
  
    for(let i =0;i<nums.length;++i){
      if(m[nums[i]]){
        return true
      }
      m[nums[i]] = true
    }
    return false
  }