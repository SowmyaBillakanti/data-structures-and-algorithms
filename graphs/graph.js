'use strict';

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    // add a new vertex to this graph(node)
    addVertex(vertex) {
        // .set(key, value) puts into the map
        this.adjacencyList.set(vertex, []);
    }

    addDirectEdge(startVertex, endVertex, weight) {
        if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
            throw new Error('error: need a start or end vertex');
        }

        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
    }

    getNeighbors(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            throw new Error('error - invalid vertex', vertex);
        }
        return this.adjacencyList.get(vertex);
    }

    breadthFirstSearch(startNode) {
        const queue = [];

        const visitedNodes = new Set();

        queue.push(startNode);
        visitedNodes.add(startNode);

        // loop as long as the queue has vertices
        while (queue.length) {
            // remove the first item from the queue
            const currentNode = queue.shift();

            // get all the neighbors of the node that I took off of the queue
            const neighbors = this.getNeighbors(currentNode);

            // loop over all of the neighbors
            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;

                // if the Set has the node that I'm looking for
                if (visitedNodes.has(neighborNode)) {
                    // stop looking at this node and go to the next one
                    continue;
                } else {
                    visitedNodes.add(neighborNode);
                }

                // put it into the queue
                queue.push(neighborNode);
            }
        }
        // return the Set so I have a list of nodes of where 
        return visitedNodes;
    }

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

    pathTo(startNode, endNode) {
        const stack = [];
        const visitedNodes = new Set();
        const parentPath = new Map();

        stack.push(startNode);
        visitedNodes.add(startNode);

        while (stack.length) {
            // remove the top/last thing from the stack
            const currentNode = stack.pop();

            // make sure that our currentNode is not our end
            if (currentNode === endNode) {
                return parentPath;
            }

            // get all the neighbors
            const neighbors = this.getNeighbors(currentNode);

            //loop over the edges
            for (let neighbor of neighbors) {
                // find the vertex node
                const neighborNode = neighbor.vertex;

                // check if the Set contains that node
                if (visitedNodes.has(neighborNode)) {
                    // stop looking at this node and move along
                    continue;
                } else {
                    // otherwise add the node to teh Set
                    visitedNodes.add(neighborNode);
                }

                // add it to the stack
                stack.push(neighborNode);

                // in the parentPath Map, set a path with this as the key adn currentNode as the value
                parentPath.set(neighborNode, currentNode);
            }
        }

        return parentPath;
    }

    size() {
        return this.adjacencyList.keys.length
    }
}

module.exports.Graph = Graph;
module.exports.Vertex = Vertex;
