import React from 'react';
import ReactDOM from 'react-dom';

import app from './app';



// import sum from './sum';
// import './img';

// const total = sum(10, 5);
// console.log(total);
/*
const button = document.createElement('button');
button.innerText = 'code splitting';
button.onclick = () => {
  System.import('./img').then(module => {
    module.default();
  });
 document.body.appendChild(button);
};*/



ReactDOM.render(React.createElement('div', null, 'Test'), document.getElementById('app'))

