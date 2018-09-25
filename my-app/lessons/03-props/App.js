import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <h2>{this.props.name}</h2>
                <p>height is {this.props.tall} cm</p>
            </div>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    tall: PropTypes.number
};

export default Person;
