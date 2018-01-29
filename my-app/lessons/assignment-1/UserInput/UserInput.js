import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid #ccc',
        backgroundcolor: 'white',
        font: 'inherit',
        padding: '8px'
    };

    return <input
               type="text"
               style={inputStyle}
               onChange={props.changed}
               value={props.currentName} />
};

export default userInput;
