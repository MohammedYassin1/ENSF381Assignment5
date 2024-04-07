import React, { useState } from 'react';

const LoginForm = ({ onSwitch }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            // Handle login logic here
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
        </form>
    );
};

export default LoginForm;