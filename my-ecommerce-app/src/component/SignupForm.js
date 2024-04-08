import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onSwitch }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // Add this line

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password && confirmPassword && email && password === confirmPassword) {
            axios.post('http://127.0.0.1:5000/register', { username, password, email })
                .then(response => {
                    setMessage(response.data.message); // Update the message
                })
                .catch(error => {
                    console.error('Error registering: ', error.response.data);
                    setMessage('Failure: Could not register'); // Update the message
                });
        }
        else if (password !== confirmPassword) {
            setMessage('Passwords do not match'); // Update the message
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
            <div>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <div>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onSwitch}>Switch to Login</button>
            {message && <div>{message}</div>} {/* Display the message */}
        </form>
    );
};

export default SignupForm;