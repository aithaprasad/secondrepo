import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function TicTacToe(){

    function Square(props){

        return (
    
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>
      
      
            
          );
      }
      
    
    
    

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xTurn, setXturn] = useState(true);
    const winner = checkIfWon(squares);
    let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (xTurn ? 'X' : 'O');
      };
    const afterClick = (i) => {
        const squares_copy = [...squares];
        if (winner || squares_copy[i]){
            return;
        }
        squares_copy[i] = xTurn ? 'X' : 'O';
        setSquares(squares_copy);
        setXturn(!xTurn);
    }

    function renderSquare(i) {
      return (
  
      <Square value={squares[i]} onClick={() => afterClick(i)} />
  
  
        
      );
    }

 

    
    function checkIfWon(squares) {
        const winPath = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < winPath.length; i++) {
          const [a, b, c] = winPath[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
    
    
      }
    
    
      
        
    
    
return (
  <div>
    <div className="status">{status}</div>
    <div>
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    
    <div>
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>

    <div>
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>
) ;
}

export default TicTacToe;




