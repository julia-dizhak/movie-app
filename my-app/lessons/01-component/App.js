import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello <b>React</b></h1>
                <b>bold</b>
            </div>
        );

        //return React.createElement('h1', null, 'Hello eggheads');
    }
}

export default App;
