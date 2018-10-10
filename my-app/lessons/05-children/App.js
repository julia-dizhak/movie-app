import React from 'react';

function Widget(props) {
    return <textarea cols="10" rows="1" onChange={props.update} />;
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            text: 'this is the state text',
            number: 0
        };
    }
    update(event) {
        this.setState({ text: event.target.value });
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>
                        {this.state.text} - {this.state.number}
                    </h1>
                    <input type="text" onChange={this.update.bind(this)} />
                </div>
                <React.Fragment>
                    <Widget update={this.update.bind(this)} />
                    <Widget update={this.update.bind(this)} />
                    <Widget update={this.update.bind(this)} />
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default App;
