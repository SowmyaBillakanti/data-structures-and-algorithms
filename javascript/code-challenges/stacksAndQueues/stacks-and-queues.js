'use strict';

class Node {

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {

    constructor() {
        this.top = new Node(-1, null);
        this.head = this.top;
    }

    push(newData) {
        const newNode = new Node(newData, null)
        this.top.next = newNode;
        this.top = newNode;
    }

    pop() {
        if(this.top.data === -1) {
            throw new Error('Stack is empty - cannot pop');  
        }  

        let node = this.head;
        while(node.next.next !== null) {
            node = node.next;
        }
        this.top = node;
        node.next = null;
    }
}

class Queue {
        
    constructor() {
        this.frontNode = null;
        this.rearNode = null;
    }        

    enqueue(newData) {
        
        // console.log("Enqueuing: " + newData.data);
        const newNode = new Node(newData);

        if (this.isEmpty()) {
            // console.log("Queue is empty!");
            this.frontNode = newNode;
            // console.log("Set first node.")
        } else {
            this.rearNode.next = newNode;
            // console.log("Adjusted previous rear node to point to new node.")
        }

        this.rearNode = newNode;
        // console.log("Set rear node.")
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            let resultNode = this.frontNode;
            if (this.frontNode === this.rearNode) {
                this.frontNode = null;
                this.rearNode = null;
            } else {
                this.frontNode = this.frontNode.next;
            }
            
            return resultNode.data;
        }
    }

    peek() {
        if (this.isEmpty()) {
            // console.log("Queue is empty!");
            return null;
        } else {
            // console.log("Front node: " + this.frontNode.data);
            return this.frontNode.data;
        }
    }

    isEmpty() {
        return this.frontNode === null;
    }
}

module.exports = Stack;
module.exports.Queue = Queue;
