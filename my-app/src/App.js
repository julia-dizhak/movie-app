import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './App.css';

// create component by es6 class Component
class App extends React.Component {
    // setup constructor
    constructor() {
        super(); //

        this.state = {
            name: "Julia",
            surname: "Dizhak",
            number: 0,
            currentEvent: '---',
            increasing: false,
            items: [],
            sliderRed: 0,
            sliderGreen: 0,
            sliderBlue: 0
        };

        this.update = this.update.bind(this);
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
            currentEvent: event.type,
            sliderRed: ReactDOM.findDOMNode(this.refs.sliderRed.refs.inp).value,
            sliderGreen: ReactDOM.findDOMNode(this.refs.sliderGreen.refs.inp).value,
            sliderBlue: ReactDOM.findDOMNode(this.refs.sliderBlue.refs.inp).value
        });

        ReactDOM.render(
           <App
               val={this.props.val+1}
               number={5}
               text="your number" />,
            document.getElementById('root')
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState) {
        // the next props not val is a multiple of five, then, we'll go ahead and update it.
        // two, three, four five, we get our update, one, two, three, four, five, we get our update. Again, the state has actually been changed.
        return nextProps.val % 5 === 0;
    }

    componentWillMount() {
        fetch('https://swapi.co/api/people/?format=json') // ajax call to starwars api
            .then( response => response.json() )
            .then( ({results: items}) => this.setState({items}) )
    }

    filter(event) {
        this.setState({filter: event.target.value})

    }

    render() {
        let text = this.props.text,
            number = this.props.number,
            items = this.state.items;

        if (this.state.filter) {
            items = items.filter( item =>
                item.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase())

            )

        }

        console.log(this.state.increasing); // first loading False

        return (
            <div>
                <p>{text} is {number}</p>

                <h1 className="test">Hello {this.state.name} {this.state.surname}</h1>

                <b>Put your name in input again </b>
                <input type="text" onChange={this.setNewName.bind(this)} />

                <div>
                    control React Component update
                    <button onClick={this.update.bind(this)}>
                        {this.props.val}
                    </button>
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

                <div>
                    <Wrapper />
                    <br />
                </div>

                <hr/>
                <div>
                    <div>Lesson 14</div>
                    <span>Search person from swapi api: </span>
                    <input type="search" onChange={this.filter.bind(this)} />
                    {/*{items.map(item =>*/}
                        {/*<h2 key={item.name}>{item.name}</h2>)*/}
                    {/*}*/}
                    {/*{items.map(item =>*/}
                        {/*<Person key={item.name} person={item} />)*/}
                    {/*}*/}
                </div>

                <hr />
                <div>
                    <div>Lesson 15: High Order Component</div>
                    <br />
                    <Button1>button</Button1>
                    <br />
                    <br />
                    <div>
                         Label<LabelHOC>label</LabelHOC>
                    </div>
                </div>

                <hr />
                {/*<div>*/}
                    {/*<div>Lesson 16: live js compiler</div>*/}
                    {/*<LiveJsxCompiler />*/}
                {/*</div>*/}

                <hr />
                <div>
                    <div>Lesson 18: understand React.children utilities</div>
                    <Parent>
                        <div className="childA"></div>
                        {/*<div className="childB"></div>*/}
                    </Parent>
                </div>

                <hr />
                <div>
                    <div>Lesson 19: use React.cloneElement to extend functionality of children components</div>
                    <SeveralButtons>
                        <button value="A">button A</button>
                        <button value="B">button B</button>
                        <button value="C">button C</button>
                    </SeveralButtons>
                </div>

                <hr />
                <div>
                    <div>Lesson 20: write more reusable React Components with composable APIs</div>
                    <div>
                        <Slider ref="sliderRed" update={this.update} />
                        {this.state.sliderRed}
                        <br />
                        <Slider ref="sliderGreen" update={this.update} />
                        {this.state.sliderGreen}
                        <br/>
                        <Slider ref="sliderBlue" update={this.update} />
                        {this.state.sliderBlue}

                        <br />
                        Reusable Component
                        <br />
                        <NumInput
                            ref="sliderRed"
                            min={0}
                            max={10}
                            step={1}
                            val={+this.state.sliderRed}
                            type="range"
                            label="Red"
                            update={this.update} />
                        {this.state.sliderRed}

                        <br/>
                        <NumInput
                            ref="sliderGreen"
                            min={0}
                            max={5}
                            step={0.1}
                            val={+this.state.sliderGreen}
                            type="number"
                            label="Green"
                            update={this.update} />
                        {this.state.sliderGreen}
                    </div>
                </div>

            </div>
        )
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`prevProps: ${prevProps}.val}`)
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
    val: 0
};


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

    render() {
        //console.log('render');
        return (
            <button onClick={this.update}>
                {/*{this.state.val * this.state.m}*/}
            </button>
        )
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

const Person = (props) => <h2>{props.person.name}</h2>;

// Lesson 15
const HOC = (InnerComponent) => class extends React.Component {
    constructor() {
        super();
        this.state = {count: 0}
    }
    update() {
        this.setState({count: this.state.count + 1})
    }
    // lifecircle method
    componentWillMount() {
        console.log('HOC will mount')
    }
    render() {
        return (
            <InnerComponent
                // we're going to notice is that our props.children is no longer passing through.
                // The simplest solution to this is to spread this.props into our components so it will pass that information right on through as props
                {...this.props}
                {...this.state} // spread state as a new prop
                update={this.update.bind(this)}
            />
        )
    }
};

// state less component and it outputs props.children component
const Button1 = HOC((props) => {
    let buttonStyle = {
        backgroundColor: '#000',
        color: '#fff',
        height: 40
    };

    return (
        <button
            style={buttonStyle}
            onClick={props.update}>
            {props.children} - {props.count}
        </button>
    )
});


// full class component and it also outputs props.children component
class Label extends React.Component {
    componentWillMount() {
        console.log('label will mount');
    }

    render() {
        return (
            <label onMouseMove={this.props.update}>
                {this.props.children} - {this.props.count}
            </label>
        )
    }
}

const LabelHOC = HOC(Label);

// Lesson 16
class LiveJsxCompiler extends React.Component {
    constructor() {
        super();

        this.state = {
            input: '/* add JSX here */',
            output: '',
            error: ''
        }
    }

    update(event) {
        let code = event.target.value;

        try {
            this.setState({
                output: window.Babel
                    .transform(code, { presets: ['es2015', 'react']})
                    .code,
                    error: ''
            })
        }
        catch (error) {
            this.setState({error: error.message})
        }
    }

    render() {
        return (
            <div className="jsx-compiler">
                <header>{this.state.error}</header>
                <div className="container">
                    <textarea name=""
                              id=""
                              cols="30"
                              rows="10"
                              onChange={this.update.bind(this)}
                              defaultValue={this.state.input} />
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )
    }
}

// Lesson 18
class Parent extends React.Component {
    render() {
        //console.log(this.props.children);
        //let items = this.props.children.map(child => child);
        //let items = React.Children.map(this.props.children, child => child);
        //let items = React.Children.toArray(this.props.children);
        //let items = React.Children.forEach(this.props.children, child => console.log(child.props.className));
        let items = React.Children.only(this.props.children);

        //console.log(items);
        return null;
    }
}

// Lesson 19
class SeveralButtons extends React.Component {
    constructor() {
        super();
        this.state = {selected: 'None'}
    }
    selectItem(selected) {
        this.setState({selected})
    }
    render() {
        let fn = child =>
            React.cloneElement(child, {
                onClick: this.selectItem.bind(this, child.props.value)
            });

        //let items = this.props.children;
        let items = React.Children.map(this.props.children, fn);
        return (
            <div>
                <header>You have selected: {this.state.selected}</header>
                {items}
            </div>
        )
    }
}

// Lesson 20
class Slider extends React.Component {
    render() {
        return (
            <div>
                <input
                    ref="inp"
                    type="range"
                    min="0"
                    max="255"
                    onChange={this.props.update} />
            </div>
        )
    }
}

class NumInput extends React.Component {
    render() {
        let label = this.props.label !== '' ?
            <label>{this.props.label} - {this.props.val}</label>: ''
        return (
            <div>
                <input
                    ref="inp"
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.val}
                    onChange={this.props.update} />
                {label}
            </div>
        )
    }
}

NumInput.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    val: PropTypes.number,
    label: PropTypes.string,
    update: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['number', 'range'])
};

NumInput.defaultProps = {
    min: 0,
    max: 10,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
};

export default App;
//export default Wrapper;



