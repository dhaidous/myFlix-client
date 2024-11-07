import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { ProfileView } from '../profile-view/profile-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const MainView = ({ user, token, onLogout }) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            fetch('https://get-all-movies-70de933db6be.herokuapp.com/movies', {
                headers: { Authorization: `Bearer ${token}` },
            })
                .then(response => response.json())
                .then(data => setMovies(data))
                .catch(error => console.error('Error fetching movies:', error));
        }
    }, [token]);

    if (!user) return <Navigate to="/" />;

    return (
        <>
            <NavigationBar isAuthenticated={!!user} onLogout={onLogout} />
            <div className="container">
                <Routes>
                    <Route
                        path="/profile"
                        element={
                            <ProfileView user={user} token={token} movies={movies} onLogout={onLogout} />
                        }
                    />
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
                    <Route path="/movies/:id" element={<MovieView movies={movies} />} />
                    <Route path="*" element={<Navigate to="/movies" />} />
                </Routes>
            </div>
        </>
    );
};
