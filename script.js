const calculator = document.querySelector('#container');
let firstNum;
let operator;
let secondNum;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, operation, num2){
    if(operation === "+") return add(num1, num2);
    if(operation === '-') return subtract(num1, num2);
    if(operation === '*') return multiply(num1, num2);
    if(operation === '/') return divide(num1, num2);
}