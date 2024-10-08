import React, { useState, useEffect } from 'react';  // Added useEffect import
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import PropTypes from 'prop-types'; // Import PropTypes

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Fetching the movies from the API
    useEffect(() => {
        fetch('https://get-all-movies-70de933db6be.herokuapp.com/movies')
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Check this in the browser console
                setMovies(data);
            })
            .catch((error) => console.error('Error fetching movies:', error));
    }, []);


    // If a movie is selected, display the MovieView component
    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
    }

    return (
        <div>
            <h1>My Movies</h1>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => setSelectedMovie(movie)}  // Set the clicked movie as selected
                />
            ))}
        </div>
    );
};

// Define PropTypes for MainView (optional if you are passing props to MainView)
MainView.propTypes = {
    // If MainView receives props, define them here (currently, it doesn't, so you can skip this)
};
