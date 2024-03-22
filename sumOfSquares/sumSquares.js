function sumOfSquares(num1, num2) {
let square1 = num1 * num1;
let square2 = num2 * num2;
return square1 + square2;
}

var number1 = 6;
var number2 = 3;
console.log(sumOfSquares(number1,number2));

module.exports = sumOfSquares;
