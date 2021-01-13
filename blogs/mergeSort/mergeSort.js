'use strict';

// Merge Sort Implementation
function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if(unsortedArray.length <= 1){
        return unsortedArray;
    }

    // In order to divide the array in half, we need to figure out the middle
    const mid = Math.floor(unsortedArray.length / 2);

    //  This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, mid);
    const right = unsortedArray.slice(mid);

    // Using recursion to combine the left and right
    return(merge(mergeSort(left), mergeSort(right)));
}

// Merge two arrays: left and right
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex=0;

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

module.exports = mergeSort;