'use strict';

let arr = [1, 2, 4, 5];
function insertShiftArray(arr, value){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let middleIndex = Math.ceil(arr.length/2);
        if(i > middleIndex){
            newArr[newArr.length] = arr[i];
        } else if(i < middleIndex){
            newArr[newArr.length] = arr[i];
        } else if(i === middleIndex){
            newArr[newArr.length] = value;
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr; 
}

insertShiftArray(arr, 3);