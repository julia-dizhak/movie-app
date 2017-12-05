import React from 'react'

class Additional extends React.Component {
    constructor() {
        super();
        this.state = {a: ''}
    }
    update(event) {
        this.setState({
            a: event.target.value,
            b: event.target.value
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr/>
                <input
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.b}
            </div>
        )
    }
}

export default Additional;