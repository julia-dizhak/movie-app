import React from 'react';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';


class App extends React.Component {
    state = {
        userName: 'superjulia'
    };

    userNameChangedHandler = (event) => {
        console.log('focus event');
        this.setState({userName: event.target.value});
    };

    render() {
        return (
            <div className="assignament">

                <UserOutput
                    name="Julia"
                    username="Super Julia" 
                />

                <UserInput
                    changed={this.userNameChangedHandler}
                    currentName ={this.state.userName} 
                />
            </div>
        )
    }
}

export default App;
