import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
    <App
        text="this is prop value text"
        cat={5} />,
    document.getElementById('app')
);
