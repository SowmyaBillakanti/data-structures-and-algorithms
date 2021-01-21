'use strict';

function leftJoin(tableOne, tableTwo) {
    let outputArray = [];
    let inputArray = [];

    for (let i = 0; i < tableOne.buckets.length; i++) {

        if (tableOne.buckets[i] !== undefined) {
            let key = (Object.keys(tableOne.buckets[i].head.value)[0]);
            inputArray.push(key);
            inputArray.push(tableOne.buckets[i].head.value[key]);

            if (tableTwo.contains(key)) {
                inputArray.push(tableTwo.get(key));
            } else {
                inputArray.push(null);
            }
            outputArray.push(inputArray);
        }
    }
    return outputArray;
}

module.exports = leftJoin;
    
