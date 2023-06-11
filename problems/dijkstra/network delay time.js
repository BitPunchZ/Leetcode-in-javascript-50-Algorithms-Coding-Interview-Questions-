
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
    const g = {};
    times.forEach(([u, v, cost]) => {
        if (!g[u]) g[u] = [];
        g[u].push([cost, v]);
    });

    let minHeap = [[0, k]];
    const visited = new Set();
    const distance = Array(n + 1).fill(Infinity);
    distance[k] = 0;

    while (minHeap.length > 0) {
        let smallestIndex = _.minBy(minHeap, o => o[0]);
        let [curDist, u] = _.remove(minHeap, function(n) {
            return n === smallestIndex;
        })[0]; // Pop min element
        if (visited.has(u)) continue;
        visited.add(u);
        if (visited.size === n) return curDist;

        if (g[u]) {
            for (let [directDistance, v] of g[u]) {
                if (curDist + directDistance < distance[v]) {
                    distance[v] = curDist + directDistance;
                    minHeap.push([curDist + directDistance, v]); // Push to heap
                }
            }
        }
    }
    return -1;
};