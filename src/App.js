import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.afterClick = this.afterClick.bind(this);
  }

  afterClick(i) {
    const squares = this.props.squares.slice();
    if (checkIfWon(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xTurn ? 'X' : 'O';
    this.props.onXTurnToggle();
    this.props.onSquaresChange(squares);
  }

  renderSquare(i) {
    return (
      <button className="square" onClick={() => this.afterClick(i)}>
        {this.props.squares[i]}
      </button>
    );
  }

  render() {
    const winner = checkIfWon(this.props.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.xTurn ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
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

export default App;
