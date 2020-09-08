import React from 'react';
import App from './App';
import TicTacToe from './FuncApp';

function parentClass() {
  return (<App />)(<TicTacToe />);
}

export default parentClass;
