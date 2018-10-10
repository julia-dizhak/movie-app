import React from 'react';

const inputStyle = {
    border: '2px solid #ccc',
    backgroundcolor: 'white',
    font: 'inherit',
    padding: '8px'
};

function UserInput(props) {
    return <input type="text" style={inputStyle} onChange={props.changed} value={props.currentName} />;
}

export default UserInput;
