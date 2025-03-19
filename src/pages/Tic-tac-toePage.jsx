import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TicTacToeGame from "../games/tic-tac-toe/TicTacToeGame";
import "../games/tic-tac-toe/tic-tac-toe.css"; // Ensure styling is included

const TicTacToePage = () => {
  return (
    <>
      <Navbar />
      <div className="tic-tac-toe-page">
        <TicTacToeGame />
      </div>
      <Footer />
    </>
  );
};

export default TicTacToePage;

