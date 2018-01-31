import React from 'react';

const cell = (props) => {
    const cells = props.data;
    console.log(cells);

    return (
        cells.map(dataItem => {
            return <td key={dataItem.key}>{dataItem.label}</td>
        })
    )
};

export default cell;
