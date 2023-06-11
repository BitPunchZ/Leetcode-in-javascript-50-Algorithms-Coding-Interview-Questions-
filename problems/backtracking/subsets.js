var solution = function(nums, ans, cur, index) {
    const n = nums.length;
    if (index >= n) return;
    ans.push([...cur]);
    for (let i = index; i < n; ++i) {
      if (!cur.includes(nums[i])) {
        cur.push(nums[i]);
        solution(nums, ans, cur, i);
        cur.pop();
      }
    }
  };
  
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  
  var subsets = function(nums) {
    let ans = [];
    let cur = [];
    solution(nums, ans, cur, 0);
    return ans;
  };