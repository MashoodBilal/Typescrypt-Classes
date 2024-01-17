//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
/*
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
*/
//Could be written as
var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and\nnot ").concat(2 * a + b, "."));
// "Fifteen is 15 and
// not 20."
