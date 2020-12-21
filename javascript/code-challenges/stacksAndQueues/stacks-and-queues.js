'use strict';

class Node {

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {

    constructor() {
        top = new Node(-1, null);
        head = top;
    }

    push(newData) {
        const newNode = new Node(newData, null)
        top.next = newNode;
        top = newNode;
    }

    pop() {
        if(top.data === -1) {
            throw new Error('Stack is empty - cannot pop');  
        }  

        const node = head;
        while(node.next.next !== null) {
            node = node.next;
        }
        top = node;
        node.next = null;
    }


}



