import React, { useState } from "react";
import "./whack-a-mole.css"; // ✅ Import the CSS file for styling


const WhackAMoleSetup = ({ onStart }) => {
  const [numHoles, setNumHoles] = useState(6);
  const [numRounds, setNumRounds] = useState(10);

  return (
    <div className="setup">
      <h2>Whack-a-Mole Setup</h2>
      <label>
        Holes:
        <input type="number" value={numHoles} onChange={(e) => setNumHoles(Number(e.target.value))} min="1" max="12" />
      </label>
      <label>
        Rounds:
        <input type="number" value={numRounds} onChange={(e) => setNumRounds(Number(e.target.value))} min="1" max="50" />
      </label>
      <button onClick={() => onStart(numHoles, numRounds)}>Start Game</button>
    </div>
  );
};

export default WhackAMoleSetup;


