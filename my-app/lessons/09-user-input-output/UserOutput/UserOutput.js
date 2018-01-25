import React from 'react';

const userOutput = (props) => {
    return (
        <div className="">
            <p>Name: {props.name}</p>
            <p>Username: {props.userName}</p>
        </div>
    )
};

export default userOutput;
