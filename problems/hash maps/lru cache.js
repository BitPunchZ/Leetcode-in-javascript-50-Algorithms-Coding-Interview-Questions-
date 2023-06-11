/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.c = capacity
    this.m = new Map()
    this.deq = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.m.has(key)) return -1
    //if element is found, add it to the front of the list
    const index = this.deq.indexOf(key);
    if (index !== -1) this.deq.splice(index, 1);
    this.deq.unshift(key);
    
    return this.m.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //key is not present in map or deq is full
    if(!this.m.has(key) && this.deq.length === this.c){ 
        //we need to remove the back element of the list
        let last = this.deq[this.deq.length-1];
        this.m.delete(last)
        this.deq.pop() 
    }else{ //key is present in the map
        const index = this.deq.indexOf(key);
        if (index !== -1) this.deq.splice(index, 1);
    }
    this.m.set(key, value);
    this.deq.unshift(key);
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */