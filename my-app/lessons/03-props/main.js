import React from 'react';
import ReactDom from 'react-dom';
import Person from './App';

ReactDom.render(<Person name="Julia Dizhak" tall={173} />, document.querySelector('#app'));
