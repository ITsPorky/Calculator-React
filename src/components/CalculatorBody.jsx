import React, { Component, useState } from 'react';
import CalculatorScreen from './CalculatorScreen';
import CalculatorPad from './CalculatorPad';
import { Calculate } from '../utils/utils';

const CalculatorBody = () => {
    // States
    const [value, setValue] = useState(0);
    const [prevValue, setPrevValue] = useState(0);
    const [operator, setOperator] = useState(0);

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
        setValue(0);
        console.log('Cleared...');
    };

    const handleOperator = (data) => {
        setOperator('' + data);
        setPrevValue(value);
        handleClear();
        console.log('Operator = ' + operator);
    };

    const handleCalculate = (data) => {
        let result = Calculate(prevValue, operator, value);
        setValue(result);
        console.log('Result = ' + result);
    };

    // Render
    return ( 
        <section id='Calculator' className='mx-auto p-6 w-full sm:w-3/4 max-w-2xl rounded-lg bg-light-blue'>
            <CalculatorScreen value={value} />
            <CalculatorPad 
                input={handleInput} 
                evaluate={handleCalculate} 
                operator={handleOperator} 
                clear={handleClear}
            />
        </section>
    );
}
 
export default CalculatorBody;