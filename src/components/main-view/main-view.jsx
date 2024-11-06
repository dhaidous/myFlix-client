import React, { useState, useEffect } from 'react';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export const MainView = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));
    const [movies, setMovies] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    useEffect(() => {
        fetch('https://get-all-movies-70de933db6be.herokuapp.com/movies')
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error('Error fetching movies:', error));
    }, []);

    return (
        <Router>
            <NavigationBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <div className="container">
                <h1>My Movies</h1>
                <Routes>
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
                    {/* Route to handle individual movie view */}
                    <Route path="/movies/:id" element={<MovieView movies={movies} />} />
                    <Route path="*" element={<Navigate to="/movies" />} />
                </Routes>
            </div>
        </Router>
    );
};
