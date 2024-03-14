let calculator = document.querySelector('#container');
let displayedResult = document.querySelector('#display');
let buttons = document.querySelectorAll('#keypad button');
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
    if(operation === 'x') return multiply(num1, num2);
    if(operation === '/') return divide(num1, num2);
}

function setupButtons(){
    displayedResult.textContent = '0';
    buttons.forEach((item) =>{
        item.addEventListener('click', () =>{
            displayNumber(item);
        })
    })
}

function displayNumber(item){
    if(displayedResult.textContent === '0'){
        displayedResult.textContent = item.textContent;
    }else{
        displayedResult.textContent += item.textContent;
    }
}

setupButtons();