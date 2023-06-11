/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.st = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    curMin = x
    if(this.st.length>0){
        lastElementPosition = this.st.length-1
        curMin = Math.min(curMin, this.st[lastElementPosition][1])
    }
    this.st.push([x, curMin])
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.st.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    lastElementPosition = this.st.length-1
    if(this.st.length===0)return null
    return this.st[lastElementPosition][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    lastElementPosition = this.st.length-1
    if(this.st.length===0)return null
    return this.st[lastElementPosition][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */