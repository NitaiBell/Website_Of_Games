import React from "react";
import Navbar from "../components/Navbar"; // Include Navbar
import Footer from "../components/Footer"; // Include Footer
import "./About.css"; // Ensure this file exists for styling

const About = () => {
  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <div className="about">
        <h1>About Us</h1>
        <p>Welcome to Website of Games! Here you can play and enjoy interactive games.</p>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
};

export default About;

