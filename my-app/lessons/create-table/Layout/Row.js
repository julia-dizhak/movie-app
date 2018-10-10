import React from 'react';

// const row = (props) => {
//     return <tr>{props.children}</tr>;
// };

const row = props => {
    const cells = props.data;

    return cells.map(dataItem => {
        if (props.type === 'cell') {
            return <td key={dataItem.key}>{dataItem.label}</td>;
        }
        return (
            <tr key={dataItem.key}>
                <td>{dataItem.label}</td>
            </tr>
        );
    });
};

export default row;
