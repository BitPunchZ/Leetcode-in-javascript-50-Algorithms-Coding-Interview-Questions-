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

    DFS(startNode) {
        let visited = new Set();
        let st = [];
        st.push(startNode);

        while (st.length > 0) {
            let cur = st[st.length - 1];
            st.pop();

            if (!visited.has(cur)) {
                console.log(cur, " ");
                visited.add(cur);
            }

            if (this.graph.has(cur)) {
                for (let vertex of this.graph.get(cur)) {
                    if (!visited.has(vertex)) {
                        st.push(vertex);
                    }
                }
            }
        }
    }
}

let g = new Graph();
g.insertEdge(2, 1);
g.insertEdge(2, 5);
g.insertEdge(5, 6);
g.insertEdge(5, 8);
g.insertEdge(6, 9);

g.DFS(2);
