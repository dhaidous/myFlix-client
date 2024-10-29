import React, { useState, useEffect } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import PropTypes from 'prop-types';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch('https://get-all-movies-70de933db6be.herokuapp.com/movies')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
            })
            .catch((error) => console.error('Error fetching movies:', error));
    }, []);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
    }

    return (
        <div className="container">
            <h1>My Movies</h1>
            <Row>
                {movies.map((movie) => ( // Change 'book' to 'movie' and pass individual movie data
                    <Col className="mb-5" key={movie.id} md={3}>
                        <MovieCard
                            movie={movie} // Correct prop name to 'movie'
                            onMovieClick={(newSelectedMovie) => {
                                setSelectedMovie(newSelectedMovie);
                            }}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
