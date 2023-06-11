

let isPalin = function(s){
    i = 0;
    j = s.length-1;
    while(i < j){
        if(s[i] != s[j])
            return false;
        i ++;
        j --;
    }
    return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = []
    const temp = []
    
    let dfs = function(s){
        // when s.isEmpty, our traversal of the string has reached the end
        if(s.length == 0 && temp.length > 0){
			res.push([...temp]);
			return;
        }
        
        for(let i = 1; i <= s.length; i ++){
            // get every possible partition on current substring
			let seg = s.slice(0,i);
            if(isPalin(seg)){
                temp.push(seg);
				// if the first half substring is valid, do dfs for the rest of substring
                dfs(s.slice(i));
				// remove the last element, typical behavior for backtracking
                temp.pop();
            }
        }
    }
    
    
    dfs(s)
    return res;
};