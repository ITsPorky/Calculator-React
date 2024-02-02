import React from 'react';

const CalculatorButton = (props) => {
    return ( 
        <button className='btn' onClick={() => props.callback(props.value)}>{props.value}</button>
    );
}
 
export default CalculatorButton;