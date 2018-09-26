import React from 'react';

function Person(props) {
    return (
        <div>
            <p>I am {props.name}. I am {Math.floor(Math.random()*30)} years old</p> 
            <p>{props.children}</p>
        </div>
    )
};

export default Person;
