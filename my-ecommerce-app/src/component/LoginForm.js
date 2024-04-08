import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm = ({ onSwitch }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Create a navigate object

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            axios.post('http://127.0.0.1:5000/login', { username, password })
                .then(response => {
                    setMessage(response.data.message);
                    if (response.data.message === 'Login successful') {
                        localStorage.setItem('token', response.data.token); // Store the token in local storage
                        navigate('/products'); // Redirect to the products page
                    }
                })
                .catch(error => {
                    console.error('Error logging in: ', error);
                    setMessage('Failure: Could not log in');
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={onSwitch}>Switch to Signup</button>
            {message && <div>{message}</div>}
        </form>
    );
};

export default LoginForm;