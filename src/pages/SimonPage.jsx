import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SimonGame from "../games/simon/SimonGame";
import "../games/simon/simon.css"; // Import only for this page

const SimonPage = () => {
  return (
    <>
      <Navbar />
      <div className="simon-page"> {/* New wrapper class */}
        <SimonGame />
      </div>
      <Footer />
    </>
  );
};

export default SimonPage;



