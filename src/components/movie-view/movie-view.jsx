import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <button onClick={onBackClick}>Back</button> {/* This button navigates back */}
            <div>
                <img src={movie.imagePath} alt={`${movie.title} Poster`} />
                <h1>{movie.title}</h1>
                <p>{movie.description}</p>
                <p>Genre: {movie.genre}</p>
                <p>Director: {movie.director}</p>
            </div>
        </div>
    );
};

// Add PropTypes for MovieView
MovieView.propTypes = {
    movie: PropTypes.shape({
        imagePath: PropTypes.string.isRequired,  // Ensure imagePath is a string
        title: PropTypes.string.isRequired,      // Ensure title is a string
        description: PropTypes.string.isRequired, // Ensure description is a string
        genre: PropTypes.string.isRequired,      // Ensure genre is a string
        director: PropTypes.string.isRequired,   // Ensure director is a string
    }).isRequired,  // The 'movie' prop is required
    onBackClick: PropTypes.func.isRequired,     // The 'onBackClick' function is required
};
