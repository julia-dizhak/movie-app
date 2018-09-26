import React from 'react';
import './Person.css';

function Person(props) {
    return (
        <div className="Person">
            <p>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name} 
            />
        </div>
    )
};

export default Person;
