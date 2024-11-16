import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, userFavorites = [], toggleFavorite }) => {
    // Determine if this movie is a favorite
    const isFavorite = userFavorites.includes(movie._id);

    return (
        <Card>
            <Card.Img variant="top" src={movie.image_url} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.director?.name}</Card.Text>

                {/* Favorites button */}
                <span
                    onClick={() => toggleFavorite(movie._id)}
                    style={{ color: isFavorite ? 'yellow' : 'grey', cursor: 'pointer', fontSize: '1.5rem' }}
                    title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                >
                    ★
                </span>

                {/* Link to the movie's detail view */}
                <Link to={`/movies/${movie._id}`} className="btn btn-primary" style={{ marginLeft: '10px' }}>
                    Open
                </Link>
            </Card.Body>
        </Card>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        image_url: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired,
    userFavorites: PropTypes.arrayOf(PropTypes.string), // Not required, with default fallback
    toggleFavorite: PropTypes.func.isRequired
};
