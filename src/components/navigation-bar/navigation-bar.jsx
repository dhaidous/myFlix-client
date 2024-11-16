import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavigationBar = ({ isAuthenticated, onLogout }) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">myFlix</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
                {isAuthenticated ? (
                    <>
                        <li className="nav-item">
                            <Link to="/movies" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={onLogout} className="nav-link btn btn-link">Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    </nav>
);

NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
};
