class Graph {
    constructor() {
        this.graph = new Map();
    }

    setEdge(u, v) {
        if (!this.graph.has(u)) {
            this.graph.set(u, []);
        }
        this.graph.get(u).push(v);
    }

    bfs(s) {
        let visited = new Set();
        let queue = [];
        queue.push(s);
        visited.add(s);

        while (queue.length > 0) {
            let u = queue.shift();
            console.log(u, " ");

            if (this.graph.has(u)) {
                for (let v of this.graph.get(u)) {
                    if (!visited.has(v)) {
                        queue.push(v);
                        visited.add(v);
                    }
                }
            }
        }
    }
}

let g = new Graph();
g.setEdge(2, 1);
g.setEdge(2, 5);
g.setEdge(5, 6);
g.setEdge(5, 8);
g.setEdge(6, 9);

g.bfs(2);
