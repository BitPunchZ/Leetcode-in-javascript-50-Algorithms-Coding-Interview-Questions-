/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const m = {}
    let ans = 0
    let left=0
    let right=0
    for(let i = 0;i<s.length;++i){
        if(s[i] in m){
            left = Math.max(left,m[s[i]]+1)
        }
        right+=1
        m[s[i]] = i
        
        ans = Math.max(right-left,ans)
    }
    return ans
};