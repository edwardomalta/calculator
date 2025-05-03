function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let firstNumber;
let operator = "";
let secondNumber;
let operatorIsSet = false;

function operate(fNumb, operator, sNumb) {
    switch (operator){
        case ("+"):
            return add(fNumb, sNumb);
            break;
        case ("-"):
            return subtract(fNumb, sNumb);
            break;
        case ("x"):
            return multiply(fNumb, sNumb);
            break;
        case ("/"):
            return divide(fNumb, sNumb);
            break;
        default:
            return "Oh Oh";
    }
}

// the display
const display = document.querySelector("#display-text");

display.textContent = 0;

// the clear button
const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", e => {
    display.textContent = 0;
    array1 = [];
    firstNumber = 0;
    secondNumber = 0;
    operatorIsSet = false;
    operator = "";
});

// get all the numbers
const numberButtons = [...document.querySelectorAll(".numb")];

// get all operators
const operatorButtons = [...document.querySelectorAll(".operator")]

operatorButtons.forEach(button => {
    button.addEventListener("click", e=> {
        if (operatorIsSet) {
            evaluate(true);
            operator = button.textContent;    
            return;
        }
        operator = button.textContent;
        operatorIsSet = true;
        console.log(operator);
        console.log(operatorIsSet);
        firstNumber = Number(array1.join(""));
        array1 = [];
        console.log("First Number: " + firstNumber);
    });
});


let array1 = [];
numberButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        updateDisplay(button.textContent);
    });
});

function updateDisplay(number) {
    if (array1.length > 10) return;
    array1.push(number);
    display.textContent = array1.join("");
}

function evaluate(fromOperator=false) {
    secondNumber = array1.join("");
    console.log(secondNumber);
    result = operate(firstNumber, operator, secondNumber);
    display.textContent = result;
    if (fromOperator) {
        operatorIsSet = true;
        firstNumber = result;
        array1 = [];
    } else {
        operatorIsSet = false;
        firstNumber = result;
        array1 = [];
    }
}

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", evaluate);