import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

export const MovieCard = ({ movie, onClick }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer' }}>  {/* Ensure it's clickable */}
            <h2>{movie.title}</h2>
        </div>
    );
};

// Add PropTypes validation for the props
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,  // Validate that 'title' is a string and is required
        director: PropTypes.string.isRequired,
    }).isRequired, // The 'movie' prop is required
    onClick: PropTypes.func.isRequired,  // The 'onClick' prop is required and should be a function
};
