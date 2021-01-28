const Graph = require('../graphs/graph');

depthFirstSearch(startNode) {
    const visitNodes = new Set();

    const traverseNeighbors = (node) => {
        // first things first, add the node to the set
        visitedNodes.add(node);

        // get all the neighbors
        const neighbors = this.getNeighbors(node);

        // loop over those neighbors
        for (let edge of neighbors) {
            // if the Set doesn't have the node
            if (!visitedNodes.has(edge.vertex)) {
                // then I want to run this function again which will add if to the set and get the neighbor nodes and loop and run the whole thing again...
                traverseNeighbors(edge.vertex);
            }
        }
    }

    traverseNeighbors(startNode);
    return visitedNodes;
}

