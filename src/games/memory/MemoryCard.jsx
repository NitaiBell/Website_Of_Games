import React from "react";
import "./memory.css";

function MemoryCard({ emoji, isFlipped, isMatched, color, onClick }) {
  return (
    <div 
      className={`memory-card ${isFlipped ? "flipped" : ""} ${isMatched ? "matched" : ""}`} 
      onClick={onClick}
    >
      <div className="card-inner">
        {isFlipped || isMatched ? (
          <span className="card-front" style={{ backgroundColor: isMatched ? color : "white" }}>
            {emoji}
          </span>
        ) : (
          <span className="card-back">❓</span>
        )}
      </div>
    </div>
  );
}

export default MemoryCard;


