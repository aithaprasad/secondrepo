import React, { useState } from 'react';
import App from './App';
//import TicTacToe1 from "./FuncAppCopy";
import './App.css';
import { ThemeContext } from './thingsContexts.js';
//export const ThemeContext = React.createContext({});
const Parent1Class = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const toggle = (i) => {
    setXTurn(!i);
  };
  const changeSquares = (squares) => {
    setSquares(squares);
  };
  return (
    <div className="row">
      <ThemeContext.Provider
        value={{
          xTurn: xTurn,
          onXTurnToggle: () => toggle(xTurn),
          squares: squares,
          onSquaresChange: (squares) => changeSquares(squares),
        }}
      >
        <App />
      </ThemeContext.Provider>
    </div>
  );
};

export default Parent1Class;
