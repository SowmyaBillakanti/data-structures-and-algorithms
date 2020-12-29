'use strict';

class BTNode {
    constructor(data, leftNode, rightNode) {
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
}

class BinaryTree {

    constructor(treeRootNode) {
        this.treeRootNode = treeRootNode;
    }

    inOrder(array) {
        this.inOrderHelper(this.treeRootNode, array);
    }

    inOrderHelper(root, array) {
        if(root === null) {
            return;
        }

        this.inOrderHelper(root.leftNode, array);
        array.push(root);
        this.inOrderHelper(root.rightNode, array);
    }

    preOrder(array) {
        this.preOrderHelper(this.treeRootNode, array);
    }

    preOrderHelper(root, array) {
        if(root === null) {
            return;
        }

        array.push(root);
        this.preOrderHelper(root.leftNode, array);
        this.preOrderHelper(root.rightNode, array);
    }

    postOrder(resultArray) {
        this.postOrderHelper(this.treeRootNode, resultArray);
    }
  
    postOrderHelper(root, array) {
        if(root === null) {
            return;
        }

        this.postOrderHelper(root.leftNode, array);
        this.postOrderHelper(root.rightNode, array);
        array.push(root);
    }

    findMaximumValue() {
        var highestSoFar = -100;
        return this.findMaximumValueHelper(this.treeRootNode, highestSoFar);
    }
  
    findMaximumValueHelper(root, runningHighest) {
        if(root === null) {
            return runningHighest;
        }

        runningHighest = this.findMaximumValueHelper(root.leftNode, runningHighest);
        runningHighest = this.findMaximumValueHelper(root.rightNode, runningHighest);
        runningHighest = this.visitAndUpdateRunningHighest(root, runningHighest);

        return runningHighest;
    }

    visitAndUpdateRunningHighest(node, highest) {

        // visit
        // console.log(node);

        if(root.data > highest) {
            highest = root.data;
        }

        return highest;
    }
}

const node4 = new BTNode(4, null, null);
const node9 = new BTNode(9, node4, null);
const node5a = new BTNode(5, null, node9);
const node11 = new BTNode(11, null, null);
const node5b = new BTNode(5, null, null);
const node6 = new BTNode(6, node5b, node11);
const node2 = new BTNode(2, null, null);
const node7 = new BTNode(7, node2, node6);

let root = new BTNode(2, node7, node5a);

const bt = new BinaryTree(root);

console.log(bt.findMaximumValue());






class BST {

    constructor(treeRootNode) {
        this.treeRootNode = treeRootNode;
    }

    add(node) {
        this.addHelper(this.treeRootNode, node);
    }

    addHelper(root, node) {
        if(node.data > root.data) {
            if(root.rightNode === null) {
                root.rightNode = node;
            } else {
                this.addHelper(root.rightNode, node);
            }
        } else {
            if(root.leftNode === null) {
                root.leftNode = node;
            } else {
                this.addHelper(root.leftNode, node);
            }
        }
    }

    contains(node) {
        return this.containsHelper(this.treeRootNode, node);
    }

    containsHelper(root, node) {
        if (node.data === root.data) {
            return true;
        }

        if(node.data > root.data) {
            if(root.rightNode === null) {
                return false;
            } else {
                return this.containsHelper(root.rightNode, node);
            }
        } else {
            if(root.leftNode === null) {
                return false;
            } else {
                return this.containsHelper(root.leftNode, node);
            }
        }
    }
}

// let kNode = new BTNode('k', null, null);
// let nNode = new BTNode('n', null, null);
// let ashNode = new BTNode('ash', null, null);
// let hvNode = new BTNode('hv', null, null);
// let plNode = new BTNode("pl", kNode, nNode);
// let avrNode = new BTNode('avr', ashNode, hvNode);
// const billakantiRoot = new BTNode('kmr', avrNode, plNode);
// const bt = new BinaryTree(billakantiRoot);
// var outputArray = [];
// bt.inOrder(outputArray);

// console.log('Inorder:');
// for (let i = 0; i < outputArray.length; i++) {
//     console.log(outputArray[i].data);    
// }

// outputArray = [];
// bt.preOrder(outputArray);

// console.log('Preorder:');
// for (let i = 0; i < outputArray.length; i++) {
//     console.log(outputArray[i].data);    
// }

// outputArray = [];
// bt.postOrder(outputArray);

// console.log('Postorder:');
// for (let i = 0; i < outputArray.length; i++) {
//     console.log(outputArray[i].data);    
// }

// const node1 = new BTNode(1, null, null);
// const node3 = new BTNode(3, null, null);
// const node2 = new BTNode(2, node1, node3);
// const node7 = new BTNode(7, null, null);
// const node5 = new BTNode(5, null, null);
// const node6 = new BTNode(6, node5, node7);
// let root = new BTNode(4, node2, node6);
// const bst = new BST(root);  
// console.log(bst);

// const node8 = new BTNode(8, null, null);
// bst.add(node8);
// console.log(bst);

// let binaryTree = new BinaryTree(root);
// outputArray = [];
// binaryTree.inOrder(outputArray);
// for (let i = 0; i < outputArray.length; i++) {
//     console.log(outputArray[i].data);    
// }

// console.log(bst.contains(node8));

module.exports.BinaryTree = BinaryTree;
module.exports.BTNode = BTNode;
module.exports.BST = BST;
