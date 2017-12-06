import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

// create component by es6 class Component
class App extends React.Component {
    // setup constructor
    constructor() {
        super(); //
        this.state = {
            name: "Julia",
            surname: "Dizhak",
            number: 0,
            currentEvent: '---'
        };
        this.update = this.update.bind(this)
    }

    setNewName(event) {
        this.setState({
            name: event.target.value
        })
    }

    // custom method
    update(event) {
        this.setState({
            surname: event.target.value,
            currentEvent: event.type
        })
    }

    render() {
        let text = this.props.text,
            number = this.props.number;
        return (
            <div>
                <p>{text} is {number}</p>

                <h1 className="test">Hello {this.state.name} {this.state.surname}</h1>
                {/*JSX get compiled by js :*/}
                {/*return React.createElement('h1', null, 'Hello');*/}

                <b>Put your name in input again </b>
                <input type="text" onChange={this.setNewName.bind(this)} />
                <div>
                    <button onClick={this.update.bind(this)}>
                        control React Component update {this.props.value}
                    </button>
                </div>
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
                <div>
                    <Title title="there is a title"/>
                </div>
                <div>
                    <textarea
                        onKeyPress={this.update}
                        onCopy={this.update}
                        onPaste={this.update}
                        onCut={this.update}
                        onFocus={this.update}
                        onBlur={this.update}
                        onDoubleClick={this.update}
                        onMouseOver={this.update}
                        onMouseDown={this.update}
                        onTouchStart={this.update}
                        onTouchMove={this.update}
                        onTouchEnd={this.update}
                        cols="30"
                        rows="10"/>
                    <h3>{this.state.currentEvent}</h3>
                </div>

                <hr />
                <Additional />

                <div>
                    <p>first component will mount and then render</p>
                    <p>When we click on this guy a bunch of times, our render continuously gets fired, but our component will mount has only fired once.</p>
                    <p>The next one we can look at is component did mount. This is going to fire off once our component has actually been mounted to the DOM.</p>
                    <Lifecircle />
                </div>
            </div>

        )
    }
}

// stateless function Component
// const App = () => <h1>Hello stateless Julia</h1>

App.propTypes = {
    text: PropTypes.string,
    number: PropTypes.number.isRequired
};

App.defaultProps = {
    text: "this is default text",
    value: 0
};

// stateless function Component
const Widget = (props) =>
    <textarea cols="10" rows="1" onChange={props.update}></textarea>


class Button extends React.Component {
    render() {
        return <button>{this.props.children} library</button>
    }
}

// const Button = (props) => <button>{props.children} + test icon</button>

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}

const Title = (props) =>
    <h2>Title: {props.title}</h2>;

Title.propTypes = {
    // title: PropTypes.string.isRequired
    // custom propType validation
    title(props, propName, component) {
        if (!(propName in props)) {
            return new Error(`missing ${propName}`);
        }
        if (props[propName].length < 10) {
            return new Error(`${propName} was too short`);
        }
    }
};

// use ref to Get a References to specific components
class Additional extends React.Component {
    constructor() {
        super();
        this.state = {a: ''}
    }
    update(event) {
        this.setState({
            //a: event.target.value,
            a: this.a.value,
            //b: event.target.value
            b: this.refs.b.value,
            //c: ReactDOM.findDOMNode(this.c).value,
            c: this.c.refs.input.value
        })
    }
    render() {
        return (
            <div>
                <input
                    // ref="a"
                    ref={node => this.a = node}
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr/>
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.b}
                <hr/>
                <Input
                    ref={component => this.c = component}
                    update={this.update.bind(this)}
                /> {this.state.c}
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update} /></div>
    }
}

class Lifecircle extends React.Component {
    constructor() {
        super(); // to get context
        this.state = {val: 0};
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.setState({m: 2})
    }

    render(){
        console.log('render');
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }

    componentDidMount() {
        console.log('componentDidMount');
        console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update, 500);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.inc)
    }

}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<App />, document.getElementById('app'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
            </div>
        )
    }
}

export default App;
//export default Wrapper;
