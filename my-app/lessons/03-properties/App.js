import React from 'react';
import PropTypes from 'prop-types';

// class App extends React.Component {
//     render() {
//         let text = this.props.text;
//         return <h1>{text}</h1>;
//     }
// }

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <h2>{this.props.name}</h2>
                <p>Your age: {this.props.age}</p>
            </div>
        )
    }
}

// function Person(props) {
//     return (
//         <div className="person">
//             <h2>{props.name}</h2>
//             <p>Your age: {props.age}</p>
//         </div>
//     )
// }

// var app = (
//     <div>
//         <Person name="Max" age={28} />
//         <Person name="Mona" age={29} />
//     </div>
// );

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

// App.propTypes = {
//     text: PropTypes.string,
//     cat: PropTypes.number.isRequired
// };
//
// App.defaultProps = {
//     text: 'this is default text'
// };

export default Person;
