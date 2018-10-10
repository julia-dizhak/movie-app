import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            question: 'What is you favourite number?',
            number: 0
        };
    }

    update(event) {
        this.setState({ number: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.question} - {this.state.number}
                </h1>
                <input type="number" onChange={this.update.bind(this)} />
            </div>
        );
    }
}

export default App;
