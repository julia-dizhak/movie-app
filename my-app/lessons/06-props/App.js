import React from 'react';
import Person from './Person';

class List extends React.Component {
  // ...
  render() {
    return (
        <div className="List">
            Yeah ...
            <h1>Listing ...</h1>
            <p>This is working</p>
            <Person name="Max" age="28" />
            <Person name="Manu" age="29">My hobbies: racing</Person>
            <Person name="Stephanie" age="26" />
        </div>
    )
  }
}

export default List;
