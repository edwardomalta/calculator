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
let operator;
let secondNumber;

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
// set a function that concatenates its textContent
let before = display.style.backgroundColor;
function updateDisplay(number) {
    if (display.textContent.length > 9) {
        display.style.backgroundColor = "red";
        setTimeout(()=> {display.style.backgroundColor = before;}, 300);
        return;
    }
    if (display.textContent === "0") {
        display.textContent = number;
    } else display.textContent += number;
}
numberButtons.forEach(button => {
    button.addEventListener("click", e=> {
        updateDisplay(button.textContent);
    });
});
// update it to the display