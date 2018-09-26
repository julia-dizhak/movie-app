import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
    let message = null;

    if (props.name) {
        message = <p className="UserOutput">Welcome {props.name}! to assignment. Your username is {props.userName}</p>
    } else {
        message =<p className="UserOutput">Hi! Please could you tell your name</p>
    }

    return message;
};

export default UserOutput;
