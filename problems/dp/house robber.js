/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    const n = nums.length
    if(n==0) return 0
    let dp = new Array(n);
    dp[0] = nums[0]
  
    for(let i = 1;i<n;++i){
      if(i>1){
        dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1])
      }
      else{
        dp[i] = Math.max(nums[0],nums[1])
      }
    }
  
  
    return dp[n-1]
  }