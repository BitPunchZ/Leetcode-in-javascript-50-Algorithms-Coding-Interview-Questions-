/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    ans = []
    cur= []
    solution(candidates,ans,cur,target,0,0)
    return ans;
  };
  
  let solution = function(candidates, ans, cur, target, index, sum){
    if(sum==target){
      ans.push(cur.slice())
    }else if(sum<target){
      const n = candidates.length;
      for(let i = index;i<n;++i){
        cur.push(candidates[i]);
        solution(candidates,ans,cur,target,i, sum+candidates[i])
        cur.pop();
      }
    }
    return;
  }