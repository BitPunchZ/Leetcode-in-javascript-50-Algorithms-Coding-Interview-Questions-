class Graph {
    constructor(numberOfNodes) {
        this.numberOfNodes = numberOfNodes + 1;
        this.graph = Array.from(Array(this.numberOfNodes), () => new Array(this.numberOfNodes).fill(0));
    }

    withInBounds(v1, v2) {
        return (v1 >= 0 && v1 < this.numberOfNodes) && (v2 >= 0 && v2 < this.numberOfNodes);
    }

    insertEdge(v1, v2) {
        if (this.withInBounds(v1, v2)) {
            this.graph[v1][v2] = 1;
        }
    }

    printGraph() {
        for (let i = 0; i < this.numberOfNodes; i++) {
            for (let j = 0; j < this.numberOfNodes; j++) {
                if (this.graph[i][j]) {
                    console.log(i, "->", j);
                }
            }
        }
    }
}

let g = new Graph(5);

g.insertEdge(1, 2);
g.insertEdge(2, 3);
g.insertEdge(4, 5);

g.printGraph();
