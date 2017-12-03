import React from 'react';
import PropTypes from 'prop-types';

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
        let text = this.props.text,
            number = this.props.number;
        return (
            <div>
                <p>{ text } is { number }</p>
                <h1 className="test">Hello { this.state.name }</h1>
                <b>Put your name in input again </b>
                <input type="text" onChange={ this.setNewName.bind(this) } />
            </div>
        )

        // JSX get compiled by js :
        // return React.createElement('h1', null, 'Hello');
    }
}

// stateless function component
//const App = () => <h1>Hello stateless Julia</h1>

App.propTypes = {
    text: PropTypes.string,
    number: PropTypes.number.isRequired
};

App.defaultProps = {
    text: "this is default text"
};


export default App;
