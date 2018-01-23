import React from 'react';
import Person from './Person';

class List extends React.Component {
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         persons: [
    //             { name: 'Max', age: 28 },
    //             { name: 'Manu', age: 29 },
    //             { name: 'Stephanie', age: 24 }
    //         ]
    //     }
    // }

    // initialize state as a class property
    state = {
        persons: [
          { name: 'Max', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value'
    };

    // method
    switchNameHandler = () => {
        console.log('Was clicked');
        // manipulating state
        // DON'T do this this.state.persons[0].name = 'Maximilian'
        // setState will look on old state and it will simply merge the old state with the new one will override
        this.setState( {
            persons: [
                { name: 'Maximilian', age: 28 },
                { name: 'Manu', age: 18 },
                { name: 'Stephanie', age: 26}
        ]})
    };

    render() {
        return (
            <div className="List">
                <h1>React</h1>
                <p>This is really working ...</p>

                <button onClick={this.switchNameHandler}>Switch name</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        )
    }
}

export default List;
