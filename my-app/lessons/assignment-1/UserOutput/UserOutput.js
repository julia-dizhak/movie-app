import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
    return (
        <div>
            <p className="user-output">
                {props.name}! Welcome to assignment. 
            </p>
            <p className="user-output">
                Your username is {props.userName}
            </p>
        </div>
    )
};

export default UserOutput;
