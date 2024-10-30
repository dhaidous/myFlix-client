import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://get-all-movies-70de933db6be.herokuapp.com/movies')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => console.error('Error fetching movies:', error));
    }, []);

    return (
        <Router>
            <div className="container">
                <h1>My Movies</h1>
                <Routes>
                    {/* Movie list route */}
                    <Route
                        path="/movies"
                        element={
                            <Row>
                                {movies.map((movie) => (
                                    <Col className="mb-5" key={movie.id} md={3}>
                                        <MovieCard movie={movie} />
                                    </Col>
                                ))}
                            </Row>
                        }
                    />
                    {/* Individual movie view */}
                    <Route
                        path="/movies/:id"
                        element={<MovieView movie={movies.find(m => m.id === window.location.pathname.split("/")[2])} />}
                    />
                    {/* Default route redirects to /movies */}
                    <Route path="*" element={<Navigate to="/movies" />} />
                </Routes>
            </div>
        </Router>
    );
};
