import React, { useState } from 'react';
import ReactDOM from 'react-dom';
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
                    <p>
                        {showSignup ? (
                            <span>Already have an account? <button onClick={() => setShowSignup(false)}>Log In</button></span>
                        ) : (
                            <span>Don't have an account? <button onClick={() => setShowSignup(true)}>Sign Up</button></span>
                        )}
                    </p>
                </>
            ) : (
                <MainView />
            )}
        </Container>
    );
};

ReactDOM.render(<MyFlixApplication />, document.getElementById('root'));
