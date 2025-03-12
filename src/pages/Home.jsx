import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Placeholder for Footer
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* Content can go here if needed */}
      <Footer /> {/* Placeholder for Footer, can be filled later */}
    </div>
  );
};

export default Home;
