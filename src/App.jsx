import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SimonGamePage from "./pages/SimonPage";
import MemoryGamePage from "./pages/MemoryPage";
import TicTacToePage from "./pages/TicTacToePage";
import WhackAMolePage from "./pages/WhackAMolePage";
import "./App.css";  // Global styles

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/simon" element={<SimonGamePage />} />
          <Route path="/memory" element={<MemoryGamePage />} />
          <Route path="/tic-tac-toe" element={<TicTacToePage />} />
          <Route path="/whack-a-mole" element={<WhackAMolePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

