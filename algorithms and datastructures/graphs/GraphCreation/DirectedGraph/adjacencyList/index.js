class Graph {
    constructor() {
        this.graph = new Map();
    }

    insertEdge(v1, v2) {
        if (!this.graph.has(v1)) {
            this.graph.set(v1, []);
        }
        this.graph.get(v1).push(v2);
    }

    printGraph() {
        for (let [node, edges] of this.graph) {
            for (let v of edges) {
                console.log(node, "->", v);
            }
        }
    }
}

let g = new Graph();

g.insertEdge(1, 2);
g.insertEdge(2, 3);
g.insertEdge(4, 5);

g.printGraph();
