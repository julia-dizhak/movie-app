import React from 'react';
import Person from './Person';

class List extends React.Component {
    state = {
        persons: [
          { name: 'Max', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value'
    };

    switchNameHandler = () => {
        console.log('Was clicked');
        this.setState( {
            persons: [
                { name: 'Maximilian', age: Math.random() },
                { name: 'Manu', age: 18 },
                { name: 'Stephanie', age: 26}
        ]})
    };

    render() {
        return (
            <div className="List">
                <div>
                    <button type="button" onClick={this.switchNameHandler}>Switch name</button>
                    <span>{this.state.otherState}</span>
                </div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} 
                />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        )
    }
}

export default List;
