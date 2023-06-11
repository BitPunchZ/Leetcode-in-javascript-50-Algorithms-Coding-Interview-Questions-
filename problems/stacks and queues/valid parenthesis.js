/**
 * @param {string} s
 * @return {boolean}
 */

 function isEqual(c1,c2){
    if(c1 == '(' && c2 == ')')
        return true;
    if(c1 == '[' && c2 == ']')
        return true;
    if(c1 == '{' && c2 == '}')
        return true;

    return false;
}

var isValid = function(s) {
    let st = []
    for(let i=0;i<s.length;i++){
        if(!st.length==0){
            let li = st.pop();
            if(isEqual(li,s[i])){
                continue;
            }
            st.push(li);
        }
        st.push(s[i]);

    }
    return st.length==0;
};