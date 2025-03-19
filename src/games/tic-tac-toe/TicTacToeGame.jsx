import React, { useState } from "react";
import TicTacToeBoard from "./TicTacToeBoard";
import TicTacToeSetup from "./TicTacToeSetup";
import "./tic-tac-toe.css";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  // ✅ Load sounds
  const xSound = new Audio("/assets/sounds/tic-tac-toe/x.mp3");
  const oSound = new Audio("/assets/sounds/tic-tac-toe/o.mp3");
  const victorySound = new Audio("/assets/sounds/tic-tac-toe/victory.mp3");

  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return X or O as winner
      }
    }
    return board.includes(null) ? null : "Draw";
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return; // Ignore if cell is taken or game is over

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // ✅ Play sound when X or O is placed
    if (currentPlayer === "X") {
      xSound.play();
    } else {
      oSound.play();
    }

    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);

      // ✅ Play victory sound if there is a winner
      if (result !== "Draw") {
        victorySound.play();
      }
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  return (
    <div className="tic-tac-toe-game">
      <h2>Tic-Tac-Toe</h2>
      {winner ? <p className="winner-text">{winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}</p> : <p>Current Player: {currentPlayer}</p>}
      <TicTacToeBoard board={board} onCellClick={handleCellClick} />
      <TicTacToeSetup onRestart={restartGame} />
    </div>
  );
};

export default TicTacToeGame;

