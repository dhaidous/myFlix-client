import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import { LoginView } from "./components/login-view/login-view";
import { SignupView } from "./components/signup-view/signup-view";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import Container from 'react-bootstrap/Container';

const MyFlixApplication = () => {
    const [user, setUser] = useState(null);
    const [showSignup, setShowSignup] = useState(false);

    const handleLogout = () => {
        setUser(null);
        localStorage.clear();
    };

    return (
        <Container style={{ padding: "20px" }}>
            {!user ? (
                <>
                    {showSignup ? (
                        <SignupView onSignedUp={() => setShowSignup(false)} />
                    ) : (
                        <LoginView onLoggedIn={(userData) => setUser({ Username: userData })} />
                    )}
                    <button onClick={() => setShowSignup(!showSignup)}>
                        {showSignup ? "Back to Login" : "Go to Signup"}
                    </button>
                </>
            ) : (
                <MainView user={user} onLogout={handleLogout} />
            )}
        </Container>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyFlixApplication />);
