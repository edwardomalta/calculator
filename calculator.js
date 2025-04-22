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
console.table(numberButtons);
// get all operators
const operatorButtons = [...document.querySelectorAll(".operator")]

operatorButtons.forEach(button => {
    button.addEventListener("click", e=> {
        operator = button.textContent;
        operatorIsSet = true;
        console.log(operator);
        console.log(operatorIsSet);
    });
});
// set a function that concatenates its textContent
let before = display.style.backgroundColor;
function updateDisplay(number) {
    if (display.textContent.length > 9) {
        display.style.backgroundColor = "red";
        setTimeout(()=> {display.style.backgroundColor = before;}, 250);
        return;
    }
    if (display.textContent === "0") {
        display.textContent = number;
        updateNumber(display.textContent);
    } else if (operatorIsSet) {
        display.textContent = number;
        updateNumber(display.textContent);
    } else {
        display.textContent += number;
        updateNumber(display.textContent);
    }
}
numberButtons.forEach(button => {
    button.addEventListener("click", e=> {
        updateDisplay(button.textContent);
    });
});

function updateNumber(nmbr) {
    if (operatorIsSet) {
        secondNumber = Number(nmbr);
        console.log(`Second Number updated: ${secondNumber}`)
        return;
    }
    firstNumber = Number(nmbr);
    console.log(`First Number updated: ${firstNumber}`)
}