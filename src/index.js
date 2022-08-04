import React from 'react';
import reactDom from 'react-dom';
import App from './App';

const root = document.createElement('div');
root.id = 'root';

document.querySelector('body').appendChild(root);

reactDom.render(
    <App />, 
    document.getElementById('root')
);



