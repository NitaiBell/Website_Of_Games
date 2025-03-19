import React from "react";
import TicTacToeCell from "./TicTacToeCell";

const TicTacToeBoard = ({ board, onCellClick }) => {
  return (
    <div className="tic-tac-toe-board">
      {board.map((cell, index) => (
        <TicTacToeCell key={index} value={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default TicTacToeBoard;
