let calculator = document.querySelector('#container');
let displayedResult = document.querySelector('#display');
let buttons = document.querySelectorAll('#numbers #keypad button');
let operatorButtons = document.querySelectorAll('#operators button');
let equalsButton = document.querySelector('#numbers #equals button');
let isTrue = true; //allows if statement to run once
let firstNum = null;
let operator = null;
let secondNum = null;
let result = null;

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
    if(operation === '÷') return divide(num1, num2);
}

function displayNumber(item){
    if(displayedResult.textContent === '0'){
        displayedResult.textContent = item.textContent;
    }else if(firstNum !== null && secondNum == null){
        displayedResult.textContent = item.textContent;
    }
    else{
        displayedResult.textContent += item.textContent;
    }
}
function setupKeypad(){
    buttons.forEach((item) =>{
        item.addEventListener('click', () =>{
            if(firstNum === null){
                displayNumber(item);
                firstNum = displayedResult.textContent;
            }else if(displayedResult.textContent == result && displayedResult.textContent == firstNum){
                displayedResult.textContent = item.textContent;
                secondNum = displayedResult.textContent;
            }else{
                displayNumber(item);
                secondNum = displayedResult.textContent;
            }
        })
    })
}

function setupOperators(){
    operatorButtons.forEach((item) =>{
        item.addEventListener('click', () =>{
            if(operator == null){
                operator = item.textContent;
            }
            else if(firstNum != null && operator != null && secondNum != null){
                result = operate(firstNum, operator, secondNum);
                firstNum = result;
                secondNum = null;
                operator = item.textContent;
                displayedResult.textContent = result;
            }
        })
    })
}

function setupEquals(){
    equalsButton.addEventListener('click', () =>{
        result = operate(firstNum, operator, secondNum);
        displayedResult.textContent = result;
    })
}


setupKeypad();
setupOperators();
setupEquals();