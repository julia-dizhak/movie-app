import React from 'react';

// bare function
const person = (props) => {
    return (
        <div>
            {/*Math.floor(Math.random()*30)*/}
            <p>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;