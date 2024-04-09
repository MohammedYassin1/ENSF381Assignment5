import React from 'react';
import { Link, useNavigate, } from "react-router-dom";
import './Header.css'; 

const Header = () => {
    const navigate = useNavigate();
    const isAuthenticated = !!localStorage.getItem('token')

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <header className="header">
            <div className="top-header">
                <div className="logo-container">
                    <img src={"/logo192.png"} alt="Logo" className="logo" />
                </div>
                <div className="company-name">
                    {"Company"}
                </div>
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                {isAuthenticated ? <button onClick={logout}>Logout</button> : <Link to="/login">Login</Link>}
            </nav>
        </header>
    );
};

export default Header;