// Utility methods

export function Calculate(sign, prevValue, operator, value) {
    let prev = parseFloat(prevValue); // preValue has the sign stored
    let current = parseFloat(sign + value); // Add sign to new value

    switch(operator) {
        case '*':
            return prev * current;
        case '/':
            return prev / current;
        case '+':
            return prev + current;
        case '-':
            return prev - current;
    }
};