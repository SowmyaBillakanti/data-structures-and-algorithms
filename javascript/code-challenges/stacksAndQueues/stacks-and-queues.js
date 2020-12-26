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

module.exports = Stack;

