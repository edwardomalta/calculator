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
        case ("*"):
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

clearBtn.addEventListener("click", e => {display.textContent = 0;});

// get all the numbers
const numberButtons = [...document.querySelectorAll(".numb")];

// get all operators
const operatorButtons = [...document.querySelectorAll(".operator")]

operatorButtons.forEach(button => {
    button.addEventListener("click", e=> {
        operator = button.textContent;
        operatorIsSet = true;
        console.log(operator);
        console.log(operatorIsSet);
        firstNumber = Number(array1.join(""));
        array1 = [];
        console.log("First Number: " + firstNumber);
    });
});

// I need to display the number
// Wen a button is pressed it must display it.
// how could I do that?
// Display is waiting you for enter a number.
// it says: 0
// you enter a number by pressing a button
// that fills an array, the array max length would be 10
// this array must be updated to the display.
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