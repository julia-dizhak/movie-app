import React from 'react';
import Person from './Person';

class List extends React.Component {
    render() {
        return (
            <div className="List">
                Yeah ...
                <h1>Listing ...</h1>
                <Person name="some girl" />
                <Person name="some boy" />
                <Person name="Stephanie" />
            </div>
        );
    }
}

export default List;
