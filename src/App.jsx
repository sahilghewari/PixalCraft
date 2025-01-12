// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/navbar';
import Home from './pages/Home';
import GrapeJSEditor from "./components/GrapeJSEditor";
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import ContactUs from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="font-jersey text-2xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<GrapeJSEditor />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
\          </Routes>
            <Footer />
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
