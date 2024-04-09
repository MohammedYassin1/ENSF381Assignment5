import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Homepage from './component/Homepage';
import ProductPage from './component/Productpage';
import LoginPage from './component/LoginPage';

const AuthHandler = () => {
    const isAuthenticated = !!localStorage.getItem('token');
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        if (!isAuthenticated && location.pathname === '/products') {
            navigate('/login');
        }
    }, [isAuthenticated, navigate, location]);

    return null;
};

const App = () => {
    return (
        <Router>
            <div className="App">
                <AuthHandler />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;