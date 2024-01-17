"use strict";
let result;
function calc(kg) {
    result = kg / 7;
    console.log(result);
    return result;
}
let totalResult = calc(150);
if (totalResult > 20) {
    console.log("Pack in two shoppers.");
}
else {
    console.log("Pack in one shopper.");
}
