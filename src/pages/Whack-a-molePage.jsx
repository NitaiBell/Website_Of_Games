import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhackAMoleGame from "../games/whack-a-mole/WhackAMoleGame";
import "../games/whack-a-mole/whack-a-mole.css"; // Ensure this file exists for styling

const WhackAMolePage = () => {
  return (
    <>
      <Navbar />
      <div className="whack-a-mole-page">
        <WhackAMoleGame />
      </div>
      <Footer />
    </>
  );
};

export default WhackAMolePage;


