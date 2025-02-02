// Max number of digits that can display
const MAX_DIGITS = 8;

const display = document.querySelector("#screen");
const numbers = document.querySelectorAll(".number");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const equalsButton = document.querySelector("#equals");

// Value on screen
let currentValue = "0";

// Used to determine if the currentValue should be replaced or appended to
let isOutput = false;

// Used to remember previous value
let storedValue;

// Used to determine what operation to use on currentValue and storedValue
let operator;


// Math operations
function add(numberOne, numberTwo) {
    return (numberOne + numberTwo).toString();
}

function subtract(numberOne, numberTwo) {
    return (numberOne - numberTwo).toString();
}

function multiply(numberOne, numberTwo) {
    return (numberOne * numberTwo).toString();
}

function divide(numberOne, numberTwo) {
    if (numberTwo === 0) return undefined;

    return (numberOne / numberTwo).toString();
}

// Computes result based on number values and operator
function equals(numberOne, numberTwo, operator) {
    numberOne = +numberOne;
    numberTwo = +numberTwo;

    switch (operator) {
        case "+":
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "*":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
        default:
            throw new Error("Unknown operator passed into equals(). ("+operator+")");
    }
}

// Update calculator display
function updateDisplay(value="0") {
    console.log("checking");
    if (value.length > MAX_DIGITS) {
        console.log("too long");
        value = value.substring(0, MAX_DIGITS) + "…";
    }
    display.textContent = value;
}

// Add number to display
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendCurrentValue(number.id);
        updateDisplay(currentValue);
    });
});

// Adds number to currentValue depending on what currentValue is beforehand
function appendCurrentValue(number) {
    if (currentValue === "0" && number !== "." || isOutput && number !== ".") {
        currentValue = number;
        isOutput = false;
    } else if (currentValue.length < MAX_DIGITS && number !== ".") {
        currentValue += number;
    } else if (currentValue.length < MAX_DIGITS  && !currentValue.includes(".")) {
        currentValue += number;
    } 
}

addButton.addEventListener("click", () => {
    if (operator) {
        equalsButton.click();
    }
    storedValue = currentValue;
    currentValue = "0";
    operator = "+";
    isOutput = false;
});

subtractButton.addEventListener("click", () => {
    if (operator) {
        equalsButton.click();
    }
    storedValue = currentValue;
    currentValue = "0";
    operator = "-";
    isOutput = false;
});

multiplyButton.addEventListener("click", () => {
    if (operator) {
        equalsButton.click();
    }
    storedValue = currentValue;
    currentValue = "0"
    operator = "*";
    isOutput = false;
});

divideButton.addEventListener("click", () => {
    if (operator) {
        equalsButton.click();
    }
    storedValue = currentValue;
    currentValue = "0";
    operator = "/";
    isOutput = false;
});

equalsButton.addEventListener("click", () => {
    if (storedValue) {
        currentValue = equals(storedValue, currentValue, operator);
        updateDisplay(currentValue);
        storedValue = undefined;
        operator = undefined;
        isOutput = true;
    }
});