import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import TicTacToe from './FuncApp';
//import parentClass from './parent.js';
import * as serviceWorker from './serviceWorker';
import parentClass from './parent';

ReactDOM.render(
  <React.StrictMode>
    <div className="row">
      <parentClass />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
