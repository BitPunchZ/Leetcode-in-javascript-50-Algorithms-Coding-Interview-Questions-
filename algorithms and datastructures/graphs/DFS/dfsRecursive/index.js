class Graph {
    constructor() {
        this.graph = new Map();
    }

    setEdge(u, v) {
        if (!this.graph.has(u)) {
            this.graph.set(u, []);
        }
        this.graph.get(u).push(v);
        console.log(this.graph);
    }

    DFS(u, visited) {
        visited.add(u);
        console.log(u, ' ');

        if (this.graph.has(u)) {
            for (let v of this.graph.get(u)) {
                if (!visited.has(v)) {
                    this.DFS(v, visited);
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

visited = new Set()
g.DFS(2,visited);
