
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-green-800 font-sans">
        <nav className="bg-green-600 text-white p-4 flex gap-4 text-lg">
          <Link to="/">Home</Link>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
