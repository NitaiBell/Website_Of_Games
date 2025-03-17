import React, { useState, useEffect } from "react";
import MemorySetup from "./MemorySetup";
import MemoryCard from "./MemoryCard";
import "./memory.css";

// ✅ List of emoji pairs
const emojiList = ["👽", "☎️", "🌍", "🚀", "🍬", "🐧", "🧌", "🐨", "⛄", "🔥", "🎩", "🎸", "🎈", "🎃", "🦄", "🐍", "🚗", "🔮"];

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 70%, 60%)`; // Generates a random pastel color
}

function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [numPairs, setNumPairs] = useState(6); // Default number of pairs
  const [pairsFound, setPairsFound] = useState(0); // ✅ Track matched pairs
  const [gameOver, setGameOver] = useState(false); // ✅ Track game status

  useEffect(() => {
    if (gameStarted) shuffleCards();
  }, [gameStarted]);

  const shuffleCards = () => {
    const selectedEmojis = emojiList.slice(0, numPairs); // Select N pairs
    const colors = selectedEmojis.reduce((acc, emoji) => {
      acc[emoji] = getRandomColor(); // Assign a unique color for each emoji pair
      return acc;
    }, {});

    const shuffled = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map(emoji => ({ emoji, id: Math.random(), matched: false, isFlipped: false, color: colors[emoji] }));

    setCards(shuffled);
    setFlippedCards([]);
    setPairsFound(0);
    setGameOver(false);
  };

  const playSound = (type) => {
    const audio = new Audio(type === "correct" ? "/assets/sounds/memory/correct.mp3" : "/assets/sounds/memory/wronganswer.mp3");
    audio.play();
  };

  const handleCardClick = (card) => {
    if (flippedCards.length < 2 && !card.isFlipped && !card.matched) {
      const updatedCards = cards.map(c => 
        c.id === card.id ? { ...c, isFlipped: true } : c
      );
      setCards(updatedCards);
      setFlippedCards([...flippedCards, card]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setDisabled(true);
      setTimeout(checkMatch, 1000);
    }
  }, [flippedCards]);

  const checkMatch = () => {
    if (flippedCards[0].emoji === flippedCards[1].emoji) {
      playSound("correct"); // ✅ Play correct sound
      setCards(prevCards =>
        prevCards.map(card =>
          card.emoji === flippedCards[0].emoji ? { ...card, matched: true, isFlipped: true } : card
        )
      );
      setPairsFound(prev => prev + 1);
    } else {
      playSound("wrong"); // ❌ Play wrong sound
      setCards(prevCards =>
        prevCards.map(card =>
          flippedCards.some(f => f.id === card.id) ? { ...card, isFlipped: false } : card
        )
      );
    }
    setFlippedCards([]);
    setDisabled(false);
  };

  useEffect(() => {
    if (pairsFound === numPairs) {
      setGameOver(true);
    }
  }, [pairsFound, numPairs]);

  return (
    <div className="memory-game">
      {!gameStarted ? (
        <MemorySetup onStart={(pairs) => { setNumPairs(pairs); setGameStarted(true); }} />
      ) : (
        <>
          <h1>Memory Game</h1>
          <p className="game-status">
            {gameOver ? "🎉 You Win! 🎉" : `Pairs Found: ${pairsFound} / ${numPairs}`}
          </p>
          <div 
            className="card-grid" 
            style={{ gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(numPairs * 2))}, 1fr)` }}>
            {cards.map(card => (
              <MemoryCard
                key={card.id}
                emoji={card.emoji}
                isFlipped={card.isFlipped}
                isMatched={card.matched}
                color={card.color} // ✅ Pass random color to MemoryCard
                onClick={() => !disabled && handleCardClick(card)}
              />
            ))}
          </div>
          {gameOver && <button className="restart-button" onClick={() => setGameStarted(false)}>Restart Game</button>}
        </>
      )}
    </div>
  );
}

export default MemoryGame;



