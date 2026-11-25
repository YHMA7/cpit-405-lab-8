import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LinkShrinker from "./LinkShrinker";
import About from "./About";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        {/* Navigation Bar */}
        <nav className="top-nav">
          <Link to="/" className="nav-btn">
            Home
          </Link>
          <Link to="/about" className="nav-btn">
            About us
          </Link>
        </nav>

        {/* Routes Configuration */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<LinkShrinker />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
