'use strict';

const LinkedList = require('../javascript/code-challenges/linkedList/linked-list')

class HashTables {
    constructor(size) {
        this.map = new Array(size);
        this.size = size;
    }

    // turn the key into an array of characters that make up a string
    // .reduce to add the charCodeAt(0) + totalSoFar(acculumator)
    // multiply it by 599
    // then get the remainder when you divide by the size
    // To get index numbers
    hash(key) {
        return key.split('').reduce((anwserSoFar, value) => {
            return anwserSoFar + value.charCodeAt(0);
        }, 0) * 599 % this.size;
    }

    // need a method that will allow me to put something into my hashmap

    add(key, value) {
        // 1. get my hash
        const hashIndex = this.hash(key);

        // 2. make value entry
        const entry = { [key]: value };

        // 3. set the entry to the hash value in the map
        // 3.1 check to see if there is a hash there already - if not, I need to put in a LL
        if (!this.map[hashIndex]) {
            this.map[hashIndex] = new LinkedList();
        }

        // 3.2 add the entry
        this.map[hashIndex].insert(entry);
    }

    get(key) {
        const hashIndex = this.hash(key);

        // If there is anything in the hash index
        if (this.map[hashIndex]) {
            const linkedList = this.map[hashIndex];

            return this.getKeyValue(linkedList, key);
        }
    }

    getKeyValue(linkedList, targetKey) {
        
        var currentNode = linkedList.head;
        
        while(currentNode !== null) {
            if (currentNode.value[targetKey]) {
                return currentNode.value[targetKey];
            } else {
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    contains(key) {
        const hashIndex = this.hash(key);

        // If there is anything in the hash index
        if (this.map[hashIndex]) {
            const linkedList = this.map[hashIndex];

            return this.containsKey(linkedList, key);
        }
    }

    containsKey(linkedList, targetKey) {
        var currentNode = linkedList.head;
        
        while(currentNode !== null) {
            if (currentNode.value[targetKey]) {
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }

        return false;

    }
}

module.exports = HashTables

var ht = new HashTables(5);
ht.add("SB", "May 1");
console.log(ht.get("SB"));
console.log(ht.contains("SB"));
