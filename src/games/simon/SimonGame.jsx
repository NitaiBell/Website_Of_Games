import React, { useState, useEffect } from "react";
import SimonButton from "./SimonButton"; // No need to go outside simon folder
import "./simon.css";  // All styling in one file

function SimonGame() {
  const colors = ["red", "blue", "green", "yellow"];
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserTurn, setIsUserTurn] = useState(false);
  const [flash, setFlash] = useState("");
  const [message, setMessage] = useState("Click 'Start' to play!");

  function startGame() {
    setIsPlaying(true);
    setSequence([]);
    setUserSequence([]);
    setLevel(1);
    setMessage("Watch the sequence!");
    nextRound();
  }

  function nextRound() {
    setIsUserTurn(false);
    setMessage("Watch the sequence!");
  
    const nextColor = colors[Math.floor(Math.random() * 4)];
    const newSequence = [...sequence, nextColor];

    setSequence(newSequence);
  
    let i = 0;
    function playFlashes(seq) {
      if (i < seq.length) {
        setFlash(seq[i]); 
        playSound(seq[i]);
        setTimeout(() => {
          setFlash("");
          i++;
          setTimeout(() => playFlashes(seq), 500);
        }, 600);
      } else {
        setTimeout(() => {
          setIsUserTurn(true);
          setUserSequence([]);
          setMessage("Your Turn!");
        }, 1000);
      }
    }
  
    setTimeout(() => playFlashes(newSequence), 500);
  }

  function playSound(color) {
    const audio = new Audio(`/assets/sounds/simon/${color}.mp3`);
    audio.play();
  }

  function handleUserClick(color) {
    if (!isUserTurn) return;

    setFlash(color);
    playSound(color);
    setTimeout(() => {
      setFlash("");
    }, 300);

    setUserSequence(prev => [...prev, color]);

    if (color !== sequence[userSequence.length]) {
      setMessage("Game Over! Click Start to retry.");
      setIsPlaying(false);
      setSequence([]);
      setUserSequence([]);
      setIsUserTurn(false);
      return;
    }

    if (userSequence.length + 1 === sequence.length) {
      setTimeout(() => {
        setLevel(prev => prev + 1);
        setMessage("Good Job! Next Round...");
        nextRound();
      }, 1000);
    }
  }

  return (
    <div className="simon-game">
      <h1 className="game-title">Simon Game</h1>
      <p className="game-message">{message}</p>
      <button className="start-button" onClick={startGame} disabled={isPlaying}>
        {isPlaying ? "Game In Progress..." : "Start Game"}
      </button>
      <div className="game-board">
        <div className="row">
          <SimonButton color="red" flash={flash} onClick={handleUserClick} isUserTurn={isUserTurn} />
          <SimonButton color="blue" flash={flash} onClick={handleUserClick} isUserTurn={isUserTurn} />
        </div>
        <div className="row">
          <SimonButton color="green" flash={flash} onClick={handleUserClick} isUserTurn={isUserTurn} />
          <SimonButton color="yellow" flash={flash} onClick={handleUserClick} isUserTurn={isUserTurn} />
        </div>
      </div>
      <p className="game-level">Level: {level}</p>
    </div>
  );
}

export default SimonGame;
