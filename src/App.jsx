// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Navbar from './components/navbar';
import Home from './pages/Home';
import GrapeJSEditor from "./components/GrapeJSEditor";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className="font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<GrapeJSEditor />} />
\          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;
