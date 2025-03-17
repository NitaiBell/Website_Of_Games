import React from "react";
import "./simon.css"; // Use the same CSS file for all styling

function SimonButton({ color, flash, onClick, isUserTurn }) {
  return (
    <button
      className={`simon-button ${color} ${flash === color ? "flash" : ""} ${!isUserTurn ? "disabled" : ""}`}
      onClick={() => onClick(color)}
      disabled={!isUserTurn}
    />
  );
}

export default SimonButton;
