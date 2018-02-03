import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDom.render(
    <App />,
    document.getElementById('blog')
);
registerServiceWorker();
