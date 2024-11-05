import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import { LoginView } from "./components/login-view/login-view";
import { SignupView } from "./components/signup-view/signup-view";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';
import Container from 'react-bootstrap/Container';

const MyFlixApplication = () => {
    const [user, setUser] = useState(null); // Add state to track user authentication
    const [showSignup, setShowSignup] = useState(false); // Add state to toggle between login and signup

    return (
        <Container style={{ border: "1px solid red", padding: "20px" }}>
            {!user ? (
                <>
                    {showSignup ? (
                        <SignupView onSignedUp={() => setShowSignup(false)} />
                    ) : (
                        <LoginView onLoggedIn={(user) => setUser(user)} />
                    )}
                </>
            ) : (
                <MainView user={user} />
            )}
        </Container>
    );
};

// Create root for React 18 compatibility
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyFlixApplication />);
