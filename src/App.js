import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './pages/HomePage'; // Correct file name
import CryptoConverterPage from './pages/CryptoConverterPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/converter" element={<CryptoConverterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
