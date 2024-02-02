import React from 'react';

const CalculatorScreen = (props) => {
    return ( 
        <div id='CalculatorHead' className=''>
            <div id='Screen' className='text-right text-4xl w-full h-24 rounded-lg p-6 bg-deep-blue'>
                <h2>{props.value}</h2>
            </div>
        </div>
    );
}
 
export default CalculatorScreen;