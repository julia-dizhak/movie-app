import React from 'react';
import Person from './Person/Person';
import './App.css';

class List extends React.Component {
    state = {
        persons: [
          { name: 'Max', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 26 }
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
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}>
                        My hobbies: racing
                    </Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />
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

                    {/*conditions */}
                    {/*{*/}
                        {/*this.state.showPersons === true ?*/}
                        {/*<div>*/}
                             {/*<Person*/}
                                {/*name={this.state.persons[0].name}*/}
                                {/*age={this.state.persons[0].age}*/}
                                {/*click={this.switchNameHandler.bind(this, 'Max!')}/>*/}
                            {/*<Person*/}
                                {/*name={this.state.persons[1].name}*/}
                                {/*age={this.state.persons[1].age}*/}
                                {/*changed={this.nameChangedHandler}>*/}
                                {/*My hobbies: racing*/}
                            {/*</Person>*/}
                            {/*<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />*/}
                        {/*</div> : null*/}
                    {/*}*/}
                    {persons}
            </div>
        )
    }
}

export default List;
