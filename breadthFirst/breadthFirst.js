'use strict';

const Graph = require('../graphs/graph');

class Queue {

    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(node) {

        if (this.rear) {
            this.rear.next = node;
        }
        this.rear = node;

        if (!this.front) {
            this.front = this.rear;
        }
    }

    dequeue() {

        const temp = this.front;

        this.front = this.front.next;
        temp.next = null;

        if (this.isEmpty()) {
            this.rear = null;
        }
        return temp;
    }

    isEmpty() {
        if (this.front === null) {
            return true;
        } else {
            false;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.front.value;
        }
    }
}

class BreadthFirstSearch extends Graph {
    constructor() {
        super();
    }

    breadthFirst(node) {
        let queue = new Queue();
        let peekArray = [];
        queue.enqueue(node);
        while (!queue.isEmpty()) {
            console.log(true);
            let current = queue.dequeue();
            if (!peekArray.includes(current.value)) {
                peekArray.push(current.value);
                console.log(current);
                let neighbors = this.getNeighbors(current);
                console.log(neighbors);
                neighbors.forEach(neighbor => {
                    if (!peekArray.includes(neighbor.value)) {
                        peekArray.push(neighbor.value);
                        queue.enqueue(neighbor);
                    }
                });
            }
        }
        return peekArray;
    }
}

module.exports = BreadthFirstSearch;