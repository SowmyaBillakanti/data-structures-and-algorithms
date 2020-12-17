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

    insert(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node;
        } else {
            let oldHead = this.head;
            this.head = node;
            this.head.next = oldHead;
        }
    }

    includes(val) {
        let current = this.head;
        while (current !== null) {
            if (current.value === val) {
                return true;
            } else {
                curent = current.next;
            }
        }
    }

    toString() {
        if (this.head !== null) {
            let string = '';
            let current = this.head;
            while (current.next !== null) {
                string = `${string} {${current.value}} ->`;
                current = current.next;
            }
            return `${string} null`;
        }
    }
}

function zipLists(list1, list2) {
    var mergedList = new LinkedList();

    var currentList1Node = list1.head;
    var currentList2Node = list2.head;

    while(currentList1Node !== null || currentList2Node !== null) {

        if (currentList1Node !== null) {
            mergedList.insert(currentList1Node);
            currentList1Node = currentList1Node.next;
        }

        if (currentList2Node !== null) {
            mergedList.insert(currentList2Node);
            currentList2Node = currentList2Node.next;
        }
    }

    return mergedList;
}

const list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(2);

const list2 = new LinkedList();
list2.insert(5);
list2.insert(9);
list2.insert(4);

console.log(zipLists(list1, list2).toString());
