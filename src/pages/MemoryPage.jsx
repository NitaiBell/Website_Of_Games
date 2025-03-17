import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MemoryGame from "../games/memory/MemoryGame";
import "../games/memory/memory.css"; // Ensure this file exists for styling

const MemoryPage = () => {
  return (
    <>
      <Navbar />
      <div className="memory-page">
        <MemoryGame />
      </div>
      <Footer />
    </>
  );
};

export default MemoryPage;

