import React from 'react';
import Person from './Person/Person';
import './App.css';

class List extends React.Component {
    state = {
        persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }, { name: 'Stephanie', age: 26 }],
        otherState: 'some other value'
    };

    nameChangedHandler = event => {
        this.setState({
            persons: [{ name: 'Max', age: 28 }, { name: event.target.value, age: 18 }, { name: 'Stephanie', age: 26 }]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="List">
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}
                />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default List;
