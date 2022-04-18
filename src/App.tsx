import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import PageA from './pages/PageA'
import PageB from './pages/PageB'
import PageC from './pages/PageC'
import PageD from './pages/PageD'
import PageE from './pages/PageE'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<PageA />} />
        <Route path="/b" element={<PageB />} />
        <Route path="/c" element={<PageC />} />
        <Route path="/d" element={<PageD />} />
        <Route path="/e" element={<PageE />} />
      </Routes>
    </div>
  );
}

export default App;
