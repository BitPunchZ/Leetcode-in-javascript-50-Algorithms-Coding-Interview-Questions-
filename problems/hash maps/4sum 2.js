/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
 var fourSumCount = function(A, B, C, D) {
    let m = {}
    for(let i =0;i<A.length;++i){
        for(let j = 0;j<C.length;++j){
            let target = A[i] + C[j]

            if(!m[target]){
                m[target] = 0
            }

            m[target] ++;
        }
    }

    let ans = 0

    for(let i = 0;i<B.length;++i){
        for(let j = 0;j<D.length;++j){
            let target = -(B[i]+D[j])
            if(m[target]){
                ans += m[target]
            }
        }
    }
    return ans;
};