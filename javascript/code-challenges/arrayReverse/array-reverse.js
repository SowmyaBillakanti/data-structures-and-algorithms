'use strict'

let arr = [1, 2, 3, 4, 5];
let newArray = [];

function reverseArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray[newArray.length] = arr[i];
    }
    return newArray;
}

console.log("Simple Array Test:")
reverseArray(arr);
console.log(newArray);

console.log();
console.log("Empty Array Test:")
let emptyArray = [];
reverseArray(emptyArray);
console.log(emptyArray);

console.log();
console.log("Single Element Array Test:")
let singleElementArray = [47];
reverseArray(singleElementArray);
console.log(singleElementArray);
