'use strict';

function treeIntersection(tree1, tree2) {
    let arrayOne = traverseTree(tree1.root);
    let arrayTwo = traverseTree(tree2.root);
    let object = objectStore(arrayOne);
    let i = 0;
    let returnArray = [];
    while (i < arrayTwo.length) {
      if (object[arrayTwo[i]]) {
        returnArray.push(arrayTwo[i]);
      }
      i++;
    }
    return returnArray;
  }
  
  function traverseTree(root) {
    let orderedArray = [];
    traverse(root);
  
    function traverse(root) {
      let currentNode = root;
  
      if (currentNode.left) {
        traverse(currentNode.left);
      }
  
      if (currentNode) {
        orderedArray.push(currentNode.value);
      }
  
      if (currentNode.right) {
        traverse(currentNode.right);
      }
  
      return orderedArray;
  
    }
    return orderedArray;
  }
  
  function objectStore(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      obj[array[i]] = 1;
    }
    return obj;
  }
  
  
  module.exports= {
    objectStore: objectStore,
    traverseTree: traverseTree,
    treeIntersection: treeIntersection
  };