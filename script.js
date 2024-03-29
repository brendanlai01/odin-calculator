let calculator = document.querySelector('#container');
let display = document.querySelector('#display');
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
    if(num1 === 0 || num2 === 0){
        alert('Numbers are indivisible by 0!');
        throw new Error('Numbers are indivisible by 0!');
    }
    return Number(sum.toFixed(10));
}

function operate(num1, operation, num2){
    if(operation === "+") return add(num1, num2);
    if(operation === '-') return subtract(num1, num2);
    if(operation === 'x') return multiply(num1, num2);
    if(operation === '÷') return divide(num1, num2);
}

function displayNumber(num){
    if(display.textContent === '0'){
        display.textContent = num.textContent;
    // }else if(firstNum !== null && result !== null && secondNum == null){
    //     display.textContent = num.textContent;
    //     console.log('this is bugged');
    }else if(firstNum != null && operator != null && secondNum == null){
        display.textContent = num.textContent;
    }
    else{
        display.textContent += num.textContent;
    }
}
function setupKeypad(){
    buttons.forEach((num) =>{
        num.addEventListener('click', () =>{
            if(firstNum == null && operator == null){
                displayNumber(num);
                firstNum = display.textContent;
            }else if(firstNum != null && operator == null){
                displayNumber(num);
                firstNum = display.textContent;
            }else if(display.textContent == result && display.textContent == firstNum){
                display.textContent = num.textContent;
                secondNum = display.textContent;
            }else{
                displayNumber(num);
                secondNum = display.textContent;
            }
        })
    })
}

function setupOperators(){
    operatorButtons.forEach((op) =>{
        op.addEventListener('click', () =>{
            if(operator == null){
                operator = op.textContent;
            }
            else if(firstNum != null && operator != null && secondNum != null){
                result = operate(firstNum, operator, secondNum);
                firstNum = result;
                secondNum = null;
                operator = op.textContent;
                display.textContent = result;
            }
        })
    })
}

function setupEquals(){
    equalsButton.addEventListener('click', () =>{
        try{
            result = operate(firstNum, operator, secondNum);
            display.textContent = result;
        }catch(err){
            display.textContent = '0';
            firstNum = null;
            secondNum = null;
            result = null;
            operator = null;
            return;
        }
        
    })
}

function setupClear(){
    const clear = document.querySelector('#keypad #clear');
    clear.addEventListener('click', () =>{
        display.textContent = '0';
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