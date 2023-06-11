
let findHash = function(s){
    let arr = s.split('');
    let sorted = arr.sort();
    return sorted.join('');
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let answers = [];
    let hashMap = {};
    
    for(let s of strs){
        let hash = findHash(s);
        if(!hashMap[hash])
            hashMap[hash] = [];
        hashMap[hash].push(s);
    }
    
    for(let p of  Object.values(hashMap)){
        answers.push(p);
    }
    return answers;
};