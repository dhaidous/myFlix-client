import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from "react-router-dom";

export const MovieView = ({ movies }) => {
    const { id } = useParams();  // Get movie ID from URL parameters
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (movies && Array.isArray(movies)) {
            const selectedMovie = movies.find(m => m._id === id);
            setMovie(selectedMovie);
        }
    }, [id, movies]);

    if (!movie) return <p>Loading...</p>;

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
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            image_url: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            genre: PropTypes.shape({
                name: PropTypes.string,
            }),
            director: PropTypes.shape({
                name: PropTypes.string,
            }),
        })
    ),
};
