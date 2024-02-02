import React, { Component, useState } from 'react';
import CalculatorScreen from './CalculatorScreen';
import CalculatorPad from './CalculatorPad';
import { Calculate } from '../utils/utils';

const CalculatorBody = () => {
    // States
    const [value, setValue] = useState(0); // Stores the value
    const [prevValue, setPrevValue] = useState(0); // Stores the first value of the operation
    const [operator, setOperator] = useState(0); // Stores the operator for the operation (*, /, -, +)
    const [sign, setSign] = useState(''); // Stores if a value is positive or negative

    // Handlers
    const handleInput = (data) => {
        if (value === 0) {
            setValue('' + data);
        } else {
            setValue('' + value + data);
        }
        console.log('Input = ' + value);
    };

    const handleClear = () => {
        setValue(0); // Reset value to 0
        console.log('Cleared...');
    };

    const handleOperator = (data) => {
        setOperator('' + data); // set operator as string
        setPrevValue(sign + value); // Assign value to prevValue with the given sign
        handleClear(); // Reset Screen
        setSign(''); // Reset Sign
        console.log('Operator = ' + operator);
    };

    const handleNegative = (data) => {
        if(sign === '') {
            setSign('-'); // Set as negative
        } else {
            setSign(''); // Set as positive
        }
    };

    const handleCalculate = (data) => {
        let result = Calculate(sign, prevValue, operator, value);
        setValue(result); // Set value as the result of the calculation
        setSign(''); // Reset sign
        console.log('Result = ' + result);
    };

    // Render
    return ( 
        <section id='Calculator' className='mx-auto p-6 w-full sm:w-3/4 max-w-2xl rounded-lg bg-light-blue'>
            <CalculatorScreen value={sign + value} />
            <CalculatorPad 
                input={handleInput} 
                operator={handleOperator} 
                clear={handleClear}
                negative={handleNegative}
                calculate={handleCalculate} 
            />
        </section>
    );
}
 
export default CalculatorBody;