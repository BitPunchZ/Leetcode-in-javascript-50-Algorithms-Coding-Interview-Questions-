class QueueLine {
    constructor() {
        this.q = [];
    }
    
    enqueue(x) {
        this.q.push(x);
    }

    dequeue() {
        if(this.q.length > 0) {
            this.q.shift();
        }
    }

    front() {
        if(this.q.length === 0) {
            return null;
        }

        return this.q[0];
    }
}
