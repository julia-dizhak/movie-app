import React from 'react';
import PropTypes from 'prop-types';

// create component by es6 class Component
class App extends React.Component {
    //
    constructor() {
        super(); //
        this.state = {
            name: "Julia",
            surname: "Dizhak",
            number: 0
        };
    }

    setNewName(event) {
        this.setState({
            name: event.target.value
        })
    }

    // custom method
    update(event) {
        this.setState({
            surname: event.target.value
        })
    }

    render() {
        let text = this.props.text,
            number = this.props.number;
        return (
            <div>
                <p>{text} is {number}</p>
                <h1 className="test">Hello {this.state.name} {this.state.surname}</h1>
                <b>Put your name in input again </b>
                <input type="text" onChange={this.setNewName.bind(this)} />
                <div>
                    Pur your surname
                    <Widget update={this.update.bind(this)} />
                    <Widget update={this.update.bind(this)} />
                    <Widget update={this.update.bind(this)} />
                </div>
                <div>
                    <Button>I <Heart /> React </Button>
                    <Button>Next React </Button>
                </div>
            </div>

        )

        // JSX get compiled by js :
        // return React.createElement('h1', null, 'Hello');
    }
}

// stateless function Component
//const App = () => <h1>Hello stateless Julia</h1>

App.propTypes = {
    text: PropTypes.string,
    number: PropTypes.number.isRequired
};

App.defaultProps = {
    text: "this is default text"
};

// stateless function Component
const Widget = (props) =>
    <textarea name="surname" id="" cols="10" rows="1" onChange={props.update}></textarea>


class Button extends React.Component {
    render() {
        return <button>{this.props.children} library</button>
    }
}

//const Button = (props) => <button>{props.children} + test icon</button>

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}


export default App;
