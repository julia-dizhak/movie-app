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
                { name: 'Maximilian', age: Math.random() },
                { name: 'Manu', age: 18 },
                { name: 'Stephanie', age: 26}
        ]})
        // console.log(this.state);
        // this.state['otherState'] = Math.random();
    };

    render() {
        return (
            <div className="List">
                <h1>React</h1>
                <p>This is really working ...</p>

                {/*DON'T do this, function will envoke(executed) immediately*/}
                {/*<button onClick={this.switchNameHandler()}>Switch name</button>*/}
                <button onClick={this.switchNameHandler}>Switch name</button>
                <div>{this.state.otherState}</div>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click=""/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        )
    }
}

export default List;
