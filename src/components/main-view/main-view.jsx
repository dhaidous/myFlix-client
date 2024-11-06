import React, { useState, useEffect } from 'react';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { ProfileView } from '../profile-view/profile-view';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export const MainView = ({ user }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [movies, setMovies] = useState([]);
    const token = localStorage.getItem("token");

    // Logout function to clear storage and update authentication state
    const handleLogout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
    };

    // Fetch movies when token changes (i.e., when user logs in)
    useEffect(() => {
        if (token) {
            fetch('https://get-all-movies-70de933db6be.herokuapp.com/movies', {
                headers: { Authorization: `Bearer ${token}` }
            })
                .then(response => response.json())
                .then(data => setMovies(data))
                .catch(error => console.error('Error fetching movies:', error));
        }
    }, [token]);

    return (
        <Router>
            <NavigationBar user={user} isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <div className="container">
                <Routes>
                    {/* Profile Route */}
                    <Route
                        path="/profile"
                        element={
                            user ? (
                                <ProfileView
                                    user={user}
                                    movies={movies}
                                />
                            ) : (
                                <Navigate to="/" />
                            )
                        }
                    />
                    {/* Main Movie List Route */}
                    <Route
                        path="/movies"
                        element={
                            <Row>
                                {movies.map((movie) => (
                                    <Col className="mb-5" key={movie._id} md={3}>
                                        <MovieCard movie={movie} />
                                    </Col>
                                ))}
                            </Row>
                        }
                    />
                    {/* Individual Movie View */}
                    <Route path="/movies/:id" element={<MovieView movies={movies} />} />
                    <Route path="*" element={<Navigate to="/movies" />} />
                </Routes>
            </div>
        </Router>
    );
};
