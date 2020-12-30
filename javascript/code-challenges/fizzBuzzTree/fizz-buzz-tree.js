'use strict';

class Tree {
    constructor() {
        this.root = null
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function fizzBuzzTree(tree) {
    let newTree = new Tree();
    traverse(tree)
    return newTree
}




function newValue(node) {
    if(node === null) {
        return null
    }
    if (node.value % 3 === 0 && node.value % 5 === 0) {
        new Node ('fizzbuzz')
        // node.value = 'fizzbuzz'
    }
    if(node.value % 3 === 0) {
        // newTree.insert('fizz')
        new Node ('fizz')
        // node.value = 'fizz'
    } 
    if (node.value % 5 === 0) {
        new Node ('buzz')
        // node.left = new Node ('buzz')
        // node.value = 'buzz'
    } 
    if(node.value % 3 !== 0 && node.value % 5 !==0) {
        new Node(node.value.toString())
    }
}

function traverse(){
    function traverse(node) {
        if(node.left) traverse(node.left)
        newValue(node.value)
        if(node.right) traverse(node.right)
    }
    traverse(this.root)
}

module.exports= {fizzBuzzTree, Node, Tree}