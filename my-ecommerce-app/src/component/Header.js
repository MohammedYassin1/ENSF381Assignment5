import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'; 

const Header = () => {
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
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;