class PlateStack {
    constructor() {
        this.st = [];
    }

    push(x) {
        this.st.push(x);
    }

    pop() {
        if(this.st.length > 0) {
            this.st.pop();
        }
    }

    top() {
        if(this.st.length === 0) {
            return null;
        }

        return this.st[this.st.length - 1];
    }

    getLen() {
        return this.st.length;
    }
}
