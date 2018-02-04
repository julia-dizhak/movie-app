import React from 'react';

const table = (props) => {
    return (
        <table>
            <tbody>{props.children}</tbody>
        </table>
    )
};

export default table;
