import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from "react-router-dom";

export const MovieView = ({ movie }) => {
    const { id } = useParams();  // Get movie ID from URL parameters

    return (
        <div>
            <Link to="/movies" className="btn btn-secondary mb-3">Back</Link>
            <img src={movie.image_url} alt={`${movie.title} Poster`} />
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>Genre: {movie.genre?.name}</p>
            <p>Director: {movie.director?.name}</p>
        </div>
    );
};

MovieView.propTypes = {
    movie: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        director: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired
};
