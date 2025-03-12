import React from "react";
import "../games/memory/memory.css"; // ✅ Correct path

const MemoryGame = () => {
  return (
    <div className="memory-game">
      <h1>Memory Game</h1>
      <p>Match the pairs and test your memory skills!</p>
      {/* Add game logic here */}
    </div>
  );
};

export default MemoryGame;
