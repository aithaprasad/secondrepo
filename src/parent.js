import React, { useState } from 'react';
import App from './App';
import TicTacToe1 from './FuncAppCopy';
import './App.css';

const ParentClass = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const toggle = (i) => {
    setXTurn(!i);
  };
  const changeSquares = (squares) => {
    setSquares(squares);
  };
  const [squares1, setSquares1] = useState(Array(9).fill(null));
  const [xTurn1, setXTurn1] = useState(true);
  const toggle1 = (i) => {
    setXTurn1(!i);
  };
  const changeSquares1 = (squares) => {
    setSquares1(squares);
  };

  return (
    <div className="row">
      <TicTacToe1
        xTurn={xTurn}
        onXTurnToggle={() => toggle(xTurn)}
        squares={squares}
        onSquaresChange={(squares) => changeSquares(squares)}
      />
      . ---- .
      <App
        xTurn={xTurn1}
        onXTurnToggle={() => toggle1(xTurn1)}
        squares={squares1}
        onSquaresChange={(squares) => changeSquares1(squares)}
      />
    </div>
  );
};

export default ParentClass;
