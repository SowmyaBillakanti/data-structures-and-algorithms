'use strict';

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

insert(val) {
    let node = new Node(val)
    if(!this.head) {
        this.head = node;
    } else {
        let oldHead = this.head;
        this.head = node;
        this.head.next = oldHead;
    }
}

includes(val) {
    let current = this.head;
    while(current !== null) {
        if(current.value === val) {
            return true;
        } else {
            curent = current.next;
        }
    }
}

toString() {
    if(this.head !== null) {
        let string = '';
        let current = this.head;
        while(current.next !== null) {
            string = `${string} {${current.value}} ->`;
            current = current.next;
        }
        return `${string} null`;
    }
}