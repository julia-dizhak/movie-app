import React from 'react';

// create component by es6 class Component
class App extends React.Component {
    //
    constructor() {
        super();
        this.state = {
            name: "Julia"
        };
    }

    setNewName (e) {
        this.setState(
            {
                name: e.target.value
            }
        )
    }

    render() {
        return <div>
            <h1 className="test">Hello React world { this.state.name }</h1>
            <input type="text" onChange={ this.setNewName.bind(this) } />
        </div>

        // JSX get compiled by js :
        //return React.createElement('h1', null, 'Hello');
    }
}

// stateless function component
//const App = () => <h1>Hello stateless Julia</h1>

export default App;
