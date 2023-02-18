"use strict";
function add(num1, num2, showresult, phrase) {
    const result = num1 + num2;
    if (showresult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
