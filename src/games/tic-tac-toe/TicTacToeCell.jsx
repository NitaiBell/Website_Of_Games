import React from "react";

const TicTacToeCell = ({ value, onClick, isWinning }) => {
  return (
    <button 
      className={`tic-tac-toe-cell ${value === "X" ? "x" : ""} ${value === "O" ? "o" : ""} ${isWinning ? "winning" : ""}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default TicTacToeCell;


