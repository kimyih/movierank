// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Megabox from './pages/Megabox';
import Moviechart from './pages/Moviechart';
import Serieson from './pages/Serieson';
import CineQ from './pages/CineQ';
import CGV from './pages/CGV';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cgv" element={<CGV />} />
                <Route path="/cineq" element={<CineQ />} />
                <Route path="/megabox" element={<Megabox />} />
                <Route path="/moviechart" element={<Moviechart />} />
                <Route path="/serieson" element={<Serieson />} />
            </Routes>
        </Router>
    );
}

export default App;
