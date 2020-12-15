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

append(value) {
    let node = new Node(value, null);
    if(!this.head) {
        this.head = node;
        return;
    }
    let currentNode = this.head;
    while(currentNode.next !=null) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
}

insertBefore(value, newVal) {
    let currentNode = this.head;
    let node = new Node(newVal)
    if(currentNode.value === value) {
        this.insert(newVal)
    } else {
        while(currentNode.next && currentNode.next.value !== value) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
}

insertAfter(value, newVal) {
    let currentNode = this.head;
    while(currentNode.value !== null) {
        if(currentNode.value === value) {
            let node = new Node(newVal)
            currentNode.next = node;
            return;
        }
        currentNode = currentNode.next;
    }
}

kthFromEnd(k) {
    let current = this.head;
    const valArr = []
    while(current !== null) {
        valArr.unshift(current.value);
        current = current.next
    }
    if(k < valArr,length) {
        return valArr[k]
    } else {
        // return 'exception'
    } 
}





// Tests //

describe('testing', () => {
    it('Can successfully instantiate an empty linked list', () => {
        let list = new LinkedList();
        expect(list.head).toStrictEqual(null)
    })

    it('Can properly insert into the linked list', () => {
        let list = new LinkedList();
        list.insert(5)
        expect(list.head.value).toEqual(5)
    })

    it('The head property will properly point to the first node in the linked list', () => {
        let list = new LinkedList();
        list.insert(2)
        expect(list.head.value).toEqual(2)
    })

    it('Can properly insert multiple nodes into the linked list', () => {
        let list = new LinkedList();
        for(let i = 0; i < 10; i++) {
            list.insert(i)
            expect(list.head.value).toEqual(i)
        }
    })

    it('Will return true when finding a value within the linked list that exists', () => {
        let list = new LinkedList();
        for(let i = 0; i < 10; i++) {
            list.insert(i)
            expect(list.includes(i)).toBeTruthy();
        }
    })

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        let list = new LinkedList();
        for(let i = 0; i < 10; i++) {
            list.insert(i)
            expect(list.includes(15)).toBeFalsy();
        }
    })

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        let list = new LinkedList();
        for(let i = 0; i < 10; i++) {
            list.insert(i)
        }
        expect(list.toString()).toEqual(' {4} -> {3} -> {2} -> {1} -> null ')
    })

    it('Can successfully add a node to the end of the linked list', () => {
        let list = new LinkedList();
        list.insert(5);
        list.insert(10);
        list.append(15);
        expect(list.head.next.value).toEqual(15);
    })

    it('Can successfully add multiple nodes to the end of a linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(10);
        list.append(15);
        expect(list.head.value).toEqual(5);
        expect(list.head.next.value).toEqual(15);
    })

    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(10);
        list.append(15);
        list.insertBefore(10, 15);
        expect(list.head.value).toEqual(5);
        expect(list.head.next.value).toEqual(15);
    })

    it('Can successfully insert a node before the first node of a linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(10);
        list.insertBefore(5, 15);
        expect(list.head.value).toEqual(15);
        expect(list.head.next.value).toEqual(5);
    })

    it('Can successfully insert after a node in the middle of the linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(8)
        list.append(10)
        list.insertBefore(10, 15);
        expect(list.head.value).toEqual(5);
        expect(list.head.next.next.value).toEqual(15);
    })

    it('Can successfully insert a node after the last node of the linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(10);
        list.append(15)
        list.insertAfter(15, 2);
        expect(list.head.next.next.next.value).toEqual(2);
    })

    it('Where k is greater than the length of the linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(10);
        list.append(15)
        expect(list.kthFromEnd(5)).toBeFalsy
    })

    it('Where k and the length of the list are the same', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(10);
        list.append(15)
        expect(list.kthFromEnd(4)).toBeFalsy
        console.log(list.kthFromEnd(4))
    })

    it('Where k is not a positive integer', () => {
        let list = new LinkedList();
        list.append(5)
        list.append(10)
        list.append(15)
        expect(list.kthFromEnd(-1)).toBeFalsy
    })

    it('Where the linked list is of a size 1', () => {
        let list = new LinkedList();
        list.append(5)
        expect(list.kthFromEnd(1)).toBeFalsy
    })

    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let list = new LinkedList();
        list.append(5)
        list.append(10)
        list.append(15)
        expect(list.kthFromEnd(1)).toStrictEqual(10);
    })
})

