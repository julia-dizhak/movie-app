import React from 'react';
import Person from './Person/Person';
import './App.css';

class List extends React.Component {
    state = {
        persons: [
          {name: 'Max', age: 28},
          {name: 'Manu', age: 29},
          {name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person name={person.name} age={person.age} />
                    })}
                </div>
            )
        }

        return (
            <div className="List">
                <h1>React</h1>
                <p>This is really working ...</p>

                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle persons</button>
                    {persons}
            </div>
        )
    }
}

export default List;
