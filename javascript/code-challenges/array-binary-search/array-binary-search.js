'use strict';

// let arr = [1, 2, 3, 4, 5, 6];
let arr = ['a', 'b', 'c', 'd', 'e']
function binarySearch(arr, keyvalue){
    
    let middleIndex = Math.floor((arr.length) / 2); 
    let count = 0;
    if(arr[middleIndex] === keyvalue) {
        return middleIndex;
    }

    if(arr[middleIndex] < keyvalue) {
        count ++;
    }

    if(arr[middleIndex] > keyvalue) {
        count --;
    }

    while(arr[middleIndex] !== keyvalue && arr[middleIndex] > 0 && arr[middleIndex] < arr.length) {
        middleIndex = middleIndex + count;
        if(arr[middleIndex] === keyvalue){
            return middleIndex;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 5))
console.log(binarySearch(arr, 8))
console.log(binarySearch(arr, 'z'))
console.log(binarySearch(arr, 'c'))
