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
    }else if(firstNum !== null && result !== null && secondNum == null){
        displayedResult.textContent = item.textContent;
        console.log('this is bugged');
    }else if(firstNum != null && operator != null && secondNum == null){
        displayedResult.textContent = item.textContent;
        console.log('reset display for secondnum');
    }
    else{
        displayedResult.textContent += item.textContent;
    }
}
function setupKeypad(){
    buttons.forEach((item) =>{
        item.addEventListener('click', () =>{
            if(firstNum == null && operator == null){
                displayNumber(item);
                firstNum = displayedResult.textContent;
                console.log('firstnum if: ' + firstNum);
            }else if(firstNum != null && operator == null){
                displayNumber(item);
                firstNum = displayedResult.textContent;
                console.log('firstnum else if: ' + firstNum);
            }else if(displayedResult.textContent == result && displayedResult.textContent == firstNum){
                displayedResult.textContent = item.textContent;
                secondNum = displayedResult.textContent;
                console.log('secondnum else if: ' + secondNum);
            }else{
                displayNumber(item);
                secondNum = displayedResult.textContent;
                console.log('secondnum else: ' + secondNum);
            }
        })
    })
}

function setupOperators(){
    operatorButtons.forEach((item) =>{
        item.addEventListener('click', () =>{
            if(operator == null){
                operator = item.textContent;
                console.log('operator null cond: ' + operator);
            }
            else if(firstNum != null && operator != null && secondNum != null){
                result = operate(firstNum, operator, secondNum);
                firstNum = result;
                secondNum = null;
                operator = item.textContent;
                displayedResult.textContent = result;
                console.log('operator pressed again: ' + operator)
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

function setupClear(){
    const clear = document.querySelector('#keypad #clear');
    clear.addEventListener('click', () =>{
        displayedResult.textContent = '0';
        firstNum = null;
        secondNum = null;
        result = null;
        operator = null;
    })
}


setupKeypad();
setupOperators();
setupEquals();
setupClear();