import React from "react";
import "../games/whack-a-mole/whack-a-mole.css"; // ✅ Correct path

const WhackAMoleGame = () => {
  return (
    <div className="whack-a-mole-game">
      <h1>Whack-A-Mole</h1>
      <p>Hit as many moles as you can before time runs out!</p>
      {/* Add game logic here */}
    </div>
  );
};

export default WhackAMoleGame;
