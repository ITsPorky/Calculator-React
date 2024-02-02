// Utility methods

export function Calculate(prevValue, operator, value) {
    let prev = parseFloat(prevValue);
    let current = parseFloat(value);

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