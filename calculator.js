function add(x, y) {
    return Number(x) + Number(y);
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

let firstNumber = "";
let operator = "";
let secondNumber;
let operatorIsSet = false;
let firstNumberIsSet =false;

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

clearBtn.addEventListener("click", clear);

function clear() {
    display.textContent = 0;
    array1 = [];
    firstNumber = "";
    secondNumber = "";
    operatorIsSet = false;
    operator = "";
}

// get all the numbers
const numberButtons = [...document.querySelectorAll(".numb")];

// get all operators
const operatorButtons = [...document.querySelectorAll(".operator")]

function updateState() {
    console.log(`First number: ${firstNumber}`)
}

// Operator buttons will change the actual state of the program.
operatorButtons.forEach(button => {
    button.addEventListener("click", e=> {
        secondNumber = "";
        if (operatorIsSet) {
            evaluate(true);
            operator = button.textContent;    
            return;
        }
        setNumber(display.textContent);
        operator = button.textContent;
        operatorIsSet = true;
        showStatus();
    });
});


let array1 = [];

numberButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        updateDisplay(button.textContent);
    });
});

// I need this to be conditioned to the actual state of the calc:
// Receiving the first number or second number.

function updateDisplay(number) {
    if (array1.length > 10) return;
    array1.push(number);
    fullNumber = array1.join("");
    display.textContent = fullNumber;
    updateNumber(fullNumber);
    showStatus();
}

function showStatus() {
    console.log("FirstNumber: " + firstNumber);
    console.log("Operator: " + operator);
    console.log("Second Number: " + secondNumber);
    //console.log("Result: " + evaluate());
}

function setNumber(number) {
    if (number === undefined && array1.length < 0) {
        number = Number(array1.join(""));
    }
    if (firstNumber === "" && !operatorIsSet) {
        firstNumber = number;
    } else {
        secondNumber = number;
    }
    array1 = [];
}

function updateNumber(number) {
    let varName; 
    if (firstNumber === "" && !operatorIsSet) {
        varName = "firstNumber";
    } else {
        varName = "secondNumber";
    }
    let correspondingNumber = Number(number);
    console.log("Corresponding number: " + varName);
    console.log("Value: " + correspondingNumber);
}

function shortNumber(num) {
    let shortening = Number(num)
    return shortening.toExponential(4);
}

function evaluate(fromOperator=false) {
    let myarr2 = [];
    let r;
    secondNumber = array1.join("");

    showStatus();
    //console.log(secondNumber);
    
    if (!operatorIsSet || secondNumber === "") {
        console.log("I must not do NOTHING!");
        return;
    }
    
    r = String(operate(firstNumber, operator, secondNumber));
    myarr2 = r.split("");
    if (myarr2.length > 10) {
        result = shortNumber(myarr2.join(""));
    } else {
        result = myarr2.join("");
    }
    display.textContent = result;
    if (fromOperator) {
        operatorIsSet = true;
        firstNumber = result;
        array1 = [];
        secondNumber = "";
        showStatus();
        return;
    }
    if (secondNumber === "0" && operator === "/") {
        console.log("Is not cero?")
        clear();
        display.textContent = "Error!!!";
    } 
    operatorIsSet = false;
    firstNumber = result;
    firstNumberIsSet = true;
    array1 = [];
    array2 = [];
    secondNumber = "";
    operator = "";
}

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    if(operatorIsSet) {
        console.log("Vengo por aqui");
        let number = array1.join("");
        secondNumber = number;
        console.log("Number is: " + number);
    }
    evaluate();
});