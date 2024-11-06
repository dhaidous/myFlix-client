import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const NavigationBar = ({ isAuthenticated, onLogout }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">myFlix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {isAuthenticated ? (
                        <>
                            <Nav.Link as={Link} to="/movies">Home</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired
};
