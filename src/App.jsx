// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
\          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
