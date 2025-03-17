import React, { useState } from "react";
import "./memory.css"; // ✅ Import the CSS file for styling

function MemorySetup({ onStart }) {
  const [numPairs, setNumPairs] = useState(6); // Default 6 pairs

  return (
    <div className="memory-setup">
      <h2>Choose Number of Pairs</h2>
      <input
        type="number"
        min="3"
        max="18"
        value={numPairs}
        onChange={(e) => setNumPairs(Math.min(18, Math.max(3, Number(e.target.value))))}
      />
      <button onClick={() => onStart(numPairs)}>Start Game</button>
    </div>
  );
}

export default MemorySetup;

