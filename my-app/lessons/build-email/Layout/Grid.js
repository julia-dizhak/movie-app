import React from 'react';

// const cols = [
//     { key: 'firstName', label: 'First Name' },
//     { key: 'lastName', label: 'Last Name' }
// ];
//
// const data = [
//     { id: 1, firstName: 'John', lastName: 'Doe' },
//     { id: 2, firstName: 'Clark', lastName: 'Kent' }
// ];

const cell = (props) => {
    return (
        <td>{props.children}</td>
    )
};

const grid = () => {
    return (
        <div>
            test
        </div>
        // <table>
        //     <tr>
        //         <td>test</td>
        //     </tr>
        // </table>
    )
};

export default {grid, cell};
