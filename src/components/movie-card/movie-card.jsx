import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card>
            <Card.Img variant="top" src={movie.image_url} /> {/* Update image field to match your data */}
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.director?.name}</Card.Text> {/* Access 'name' within 'director' */}
                <Button onClick={() => onMovieClick(movie)} variant="link">
                    Open
                </Button>
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
        image_url: PropTypes.string.isRequired
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired, // Ensure this prop is required
};
