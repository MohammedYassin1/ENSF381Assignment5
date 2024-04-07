import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import ProductPage from './component/Productpage';
import LoginPage from './component/LoginPage'; // Import LoginPage
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add login route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;