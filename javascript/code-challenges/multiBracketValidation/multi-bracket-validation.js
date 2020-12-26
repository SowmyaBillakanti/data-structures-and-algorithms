'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues');

function multiBracketValidation(bracketString) {
    
    console.log("Input string is: " + bracketString);

    const openBracketsStack = new Stack();
    console.log("Stack is: " + openBracketsStack);
    
    for(let i = 0; i < bracketString.length; i++) {

        const currentChar = bracketString.charAt(i);
        console.log("Current Char is: " + currentChar);

        if(equalsOpenBracket(currentChar)) {
        
            console.log(currentChar + " is an open bracket.");
            openBracketsStack.push(currentChar);
            console.log('Pushed to stack: ' + currentChar);
        
        } else if(equalsClosedBracket(currentChar)) {
            
            console.log(currentChar + " is a closed bracket");
            console.log("Stack top is: " + openBracketsStack.top.data);

            if (isMatchingBracket(openBracketsStack.top.data, currentChar)) {
                console.log('Popping from stack: ' + openBracketsStack.top.data);
                openBracketsStack.pop();
            } else {
                console.log("Returning false because not matching brackets.");
                return false;
            } 
        }
    }

    console.log("Returning true because all brackets match.");
    return true;
}

function equalsOpenBracket(char) {
    return char === '[' || char === '{' || char === '(';
}

function equalsClosedBracket(char) {
    return char === ']' || char === '}' || char === ')';
}

function isMatchingBracket(leftChar, rightChar) {
    if (leftChar === '(' && rightChar === ')') {
        console.log(leftChar + " and " + rightChar + " are matching brackets.");
        return true;
    } else if (leftChar === '[' && rightChar === ']') {
        console.log(leftChar + " and " + rightChar + " are matching brackets.");
        return true;
    } else if (leftChar === '{' && rightChar === '}') {
        console.log(leftChar + " and " + rightChar + " are matching brackets.");
        return true;
    } else {
        console.log(leftChar + " and " + rightChar + " are NOT matching brackets.");
        return false;
    }
}

console.log(multiBracketValidation('[{()}]'));
console.log(multiBracketValidation('(]('));
console.log(multiBracketValidation('{(})'));
console.log(multiBracketValidation('{}()[]'));
