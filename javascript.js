// Math operations
function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    if (numberTwo === 0) return undefined;

    return numberOne / numberTwo;
}

/**
 * Computes result based on number values and operator
 * @param {number} numberOne 
 * @param {number} numberTwo 
 * @param {string} operator 
 * @returns result after math operation
 */
function equals(numberOne, numberTwo, operator) {
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
