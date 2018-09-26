import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
    let message = null;

    if (props.name) {
        message = <p className="user-output">Welcome {props.name}! to assignment. Your username is {props.userName}</p>
    } else {
        message =<p className="user-output">Hi! Please could you tell your name</p>
    }

    return message;
};

export default UserOutput;
