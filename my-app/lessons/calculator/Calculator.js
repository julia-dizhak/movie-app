import React from 'react';

import CalculatorDisplay from './components/CalculatorDisplay';

import './styles/style.css';


export default class Calculator extends React.Component {
    state = {
        displayValue: 0
    };

    render() {
        const {displayValue} = this.state;
        
        return (
            <div className="test">
                <CalculatorDisplay value={displayValue} />
            </div>
        )
    }
}
