import React from 'react';

const cell = props => {
    const cells = props.data;

    return cells.map(dataItem => {
        return (
            <tr>
                <td key={dataItem.key}>{dataItem.label}</td>
            </tr>
        );
    });
};

export default cell;
