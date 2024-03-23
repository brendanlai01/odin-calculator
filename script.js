let calculator = document.querySelector('#container');
let displayedResult = document.querySelector('#display');
let buttons = document.querySelectorAll('#keypad button');
let operatorButtons = document.querySelectorAll('#operators button');
let firstNum;
let operator;
let secondNum;

function add(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 + num2;
}

function subtract(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 - num2;
}

function multiply(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    return num1 * num2;
}

function divide(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = num1 / num2;
    return Number(sum.toFixed(10));
}

function operate(num1, operation, num2){
    if(operation === "+") return add(num1, num2);
    if(operation === '-') return subtract(num1, num2);
    if(operation === 'x') return multiply(num1, num2);
    if(operation === '/') return divide(num1, num2);
}

function displayNumber(item){
    if(displayedResult.textContent === '0'){
        displayedResult.textContent = item.textContent;
    }else{
        displayedResult.textContent += item.textContent;
    }
}

function setupKeypad(){
    displayedResult.textContent = '0';
    buttons.forEach((item) =>{
        item.addEventListener('click', () =>{
            displayNumber(item);
        })
    })
}

function setupOperators(){
    operatorButtons.forEach((item) =>{
        item.addEventListener('click', () =>{
            if(operator === 'undefined'){
                operator = item.textContent;
                console.log(operator);
            }
            operator = item.textContent;
            console.log(operator);
        })
    })
}


setupKeypad();
setupOperators();