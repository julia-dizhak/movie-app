import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        let text = this.props.text;
        return <h1>{text}</h1>;
    }
}

App.propTypes = {
    text: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    text: 'this is default text'
};

export default App;
