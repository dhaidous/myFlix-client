import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from "react-router-dom";

export const MovieView = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((m) => m._id === id);
    const navigate = useNavigate();  // Hook to navigate programmatically


    if (!movie) return <div>Loading...</div>; // Shows "Loading..." if movie data is not yet available

    return (
        <div>
            <img src={movie.image_url} alt={`${movie.title} Poster`} />
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>Genre: {movie.genre?.name}</p>
            <p>Director: {movie.director?.name}</p>
            <button onClick={() => navigate(-1)}>Back</button> {/* Go back to previous view */}
        </div>
    );
};

MovieView.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            genre: PropTypes.shape({
                name: PropTypes.string
            }),
            director: PropTypes.shape({
                name: PropTypes.string
            }),
            image_url: PropTypes.string.isRequired
        })
    ).isRequired
};
