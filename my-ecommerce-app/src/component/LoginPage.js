import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <Header />
            {showLogin ? <LoginForm onSwitch={() => setShowLogin(false)} /> : <SignupForm onSwitch={() => setShowLogin(true)} />}
            <Footer />
        </div>
    );
};

export default LoginPage;