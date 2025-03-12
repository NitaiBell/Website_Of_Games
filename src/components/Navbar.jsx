import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this file exists for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎮 GameZone</Link> {/* You can replace text with an actual logo */}
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/memory">Memory Game</Link>
        <Link to="/simon">Simon Game</Link>
        <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        <Link to="/whack-a-mole">Whack-a-Mole</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
