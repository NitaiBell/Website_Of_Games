import React from "react";

const TicTacToeSetup = ({ onRestart }) => {
  return (
    <div className="tic-tac-toe-setup">
      <button className="restart-button" onClick={onRestart}>Restart Game</button>
    </div>
  );
};

export default TicTacToeSetup;
