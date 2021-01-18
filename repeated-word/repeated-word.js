'use strict';

function splitWords(string) {
    let array = [];

    let word = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            word += string[i];
        } else {
            console.log ("word :" + word);
            array.push(word);
            word = "";
        }
        if (i === string.length - 1) {
            array.push(word);
        }
    }
    console.log("array: " + array);
    return array;
}
function repeatedWords(string) {
    let stringArray = splitWords(string);
    console.log("stringArray: " + stringArray);
    let emptyObj = {};
    for (let i = 0; i <= stringArray.length; i++) {
        console.log("Word:" + stringArray[i]);
        if (emptyObj[stringArray[i]] >= 0) {
            console.log("emptyObj: " + emptyObj[stringArray[i]]);
            return stringArray[i];
        } else {
            console.log("Else :" );
            emptyObj[stringArray[i]] = i;
            console.log("emptyObj: " + emptyObj[stringArray[i]]);
        }
    }
    return null;
}

module.exports = { splitWords, repeatedWords };
console.log(splitWords("Harry had been saying that he had been there"));
 console.log(repeatedWords("Harry had been saying that he had been there"));