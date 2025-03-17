import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import MemoryPage from "./pages/MemoryPage";
import SimonPage from "./pages/SimonPage"; // ✅ Now correctly points to pages/
import TicTacToePage from "./pages/Tic-tac-toePage";
import WhackAMolePage from "./pages/Whack-a-molePage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/memory" element={<MemoryPage />} />
          <Route path="/simon" element={<SimonPage />} /> {/* ✅ Stays in pages/ */}
          <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          <Route path="/whack-a-mole" element={<WhackAMolePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

