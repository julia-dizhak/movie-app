import React from 'react';
import ReactDom from 'react-dom';
import Person from './App';

ReactDom.render(
    <Person name="Max" age={28} />,
    document.querySelector('#app')
);

// ReactDom.render(
//     <Person name="Max" age={28} />,
//     <Person name="Mona" age={28} />,
//     document.querySelector('#app')
// );

// it's not working
// ReactDom.render(
//     app,
//     document.querySelector('#app')
// );
