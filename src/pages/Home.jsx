import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css"; // Ensure this is imported

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;

