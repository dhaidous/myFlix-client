import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainView } from './components/main-view/main-view';
import { LoginView } from './components/login-view/login-view';
import { SignupView } from './components/signup-view/signup-view';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.scss';

const MyFlixApplication = () => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const handleLogin = (userData, token) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        setToken(null);
        localStorage.clear();
    };

    return (
        <Router>
            <div className="container" style={{ padding: '20px' }}>
                {user ? (
                    <MainView user={user} token={token} onLogout={handleLogout} />
                ) : (
                    <>
                        <Routes>
                            <Route path="/signup" element={<SignupView />} />
                            <Route path="*" element={<LoginView onLoggedIn={handleLogin} />} />
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyFlixApplication />);
