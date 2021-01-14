'use strict';

// Partition function
function partition(arr, start, end) {
    // Taking the last element as pivot
    const pivotValue = arr[end];
    const pivotIndex = start;

    for(let i = start; i < end; i++) {
        if(arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to the next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
};

// Recursive function
function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if(start >= end) {
        return;
    }

    // Returns pivotIndex
    let index = partition(arr, start, end);
    // Recursively apply the same logic to the left and right subarrays
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

module.exports = quickSortRecursive;
// Testing code
// array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
// quickSortRecursive(array, 0, array.length - 1)
// console.log(array);
