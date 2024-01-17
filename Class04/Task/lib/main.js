"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNumberOddOrEven(num) {
    let a = num % 2;
    if (a === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
let result = isNumberOddOrEven(25);
console.log(`Your number is ${result}`);
