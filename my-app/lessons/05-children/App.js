import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            text: 'this is the state text',
            cat: 0
        }


    }
    update(event) {
        this.setState({text: event.target.value})
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.update.bind(this)}/>
                <h1>{this.state.text} - {this.state.cat}</h1>
            </div>
        )
    }
}

// stateless function Component
// const Widget = (props) =>
//     <textarea cols="10" rows="1" onChange={props.update}></textarea>


// const Widget =
//     <div>
//                     Put your surname
//                     <Widget update={this.update.bind(this)} />
//                     <Widget update={this.update.bind(this)} />
//                     <Widget update={this.update.bind(this)} />
//                 </div>

export default App;
