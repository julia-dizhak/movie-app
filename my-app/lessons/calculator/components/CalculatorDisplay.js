import React from 'react';
import AutoScalingText from './AutoScalingText';

export default function CalculatorDisplay(props) {
    const { value } = props;

    return (
        <React.Fragment>
            <AutoScalingText>{value}</AutoScalingText>
        </React.Fragment>
    );
}
