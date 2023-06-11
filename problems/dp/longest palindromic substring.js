/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(st) {
    let ans = ""
    //current left 
    const n = st.length
    const isPalindrome = Array.from(Array(n),(e)=>new Array(n))
    for(let i = 0; i<n; ++i){
        isPalindrome[i][i] = true
    }
    
    
    for(let e = 0; e<n; ++e){
        for(let s = 0; s<=e; ++s){
            const middleStringLength = e - s - 1
            const sameChar = st[s]==st[e]
            if(sameChar && (middleStringLength<=1 || isPalindrome[s+1][e-1])){
                isPalindrome[s][e] = true
                if(e-s>=ans.length){
                    ans = st.substring(s,e+1)
                }
            }
        }
    }
    return ans
};