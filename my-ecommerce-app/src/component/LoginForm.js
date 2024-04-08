import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onSwitch }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Add this line

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            axios.post('http://127.0.0.1:5000/login', { username, password })
                .then(response => {
                    setMessage(response.data.message); // Update the message
                })
                .catch(error => {
                    console.error('Error logging in: ', error);
                    setMessage('Failure: Could not log in'); // Update the message
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
            {message && <div>{message}</div>} {/* Display the message */}
        </form>
    );
};

export default LoginForm;