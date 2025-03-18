import React, { useState, useEffect, useRef } from "react";
import WhackAMoleSetup from "./WhackAMoleSetup";
import Hole from "./Hole";
import "./whack-a-mole.css";

const WhackAMoleGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [numHoles, setNumHoles] = useState(6);
  const [numRounds, setNumRounds] = useState(10);
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [activeHole, setActiveHole] = useState(null);

  // ✅ Track active mole
  const activeHoleRef = useRef(null);

  // ✅ Load sounds
  const correctSound = new Audio("/assets/sounds/whack-a-mole/correct.mp3");
  const wrongSound = new Audio("/assets/sounds/whack-a-mole/wronganswer.mp3");

  useEffect(() => {
    if (gameStarted && currentRound < numRounds) {
      const randomHole = Math.floor(Math.random() * numHoles);
      setActiveHole(randomHole);
      activeHoleRef.current = randomHole;

      const disappearTimer = setTimeout(() => {
        if (activeHoleRef.current !== null) {
          setMissed((prev) => prev + 1);
          wrongSound.play(); // ❌ Play miss sound
        }
        setActiveHole(null);
        activeHoleRef.current = null;
        setCurrentRound((prev) => prev + 1);
      }, 700); // Mole stays for 1.2 sec

      return () => clearTimeout(disappearTimer);
    } else if (currentRound >= numRounds) {
      setGameOver(true);
    }
  }, [currentRound, gameStarted]);

  const handleClick = (index) => {
    if (index === activeHoleRef.current) {
      setScore((prev) => prev + 1);
      setActiveHole(null);
      activeHoleRef.current = null;
      correctSound.play(); // ✅ Play correct sound
    } else {
      wrongSound.play(); // ❌ Play wrong sound
    }
  };

  const restartGame = () => {
    setGameStarted(false);
    setCurrentRound(0);
    setScore(0);
    setMissed(0);
    setGameOver(false);
    setActiveHole(null);
    activeHoleRef.current = null;
  };

  return (
    <div className="whack-a-mole-game">
      {!gameStarted ? (
        <WhackAMoleSetup 
          onStart={(holes, rounds) => {
            setNumHoles(holes);
            setNumRounds(rounds);
            setGameStarted(true);
          }} 
        />
      ) : (
        <>
          <h2>Whack-a-Mole</h2>
          <p>Round {currentRound} / {numRounds}</p>
          <p>Score: {score} | Missed: {missed}</p>

          <div 
            className="hole-container"
            style={{ gridTemplateColumns: `repeat(${Math.min(numHoles, 4)}, 1fr)` }}
          >
            {Array.from({ length: numHoles }).map((_, index) => (
              <Hole key={index} index={index} active={index === activeHole} onClick={handleClick} />
            ))}
          </div>

          {gameOver && <button className="restart-button" onClick={restartGame}>Restart Game</button>}
        </>
      )}
    </div>
  );
};

export default WhackAMoleGame;





