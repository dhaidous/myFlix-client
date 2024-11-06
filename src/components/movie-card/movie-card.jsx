import React from 'react';
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Card>
            <Card.Img variant="top" src={movie.image_url} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.director?.name}</Card.Text>
                {/* Link to the movie's detail view */}
                <Link to={`/movies/${movie._id}`} className="btn btn-primary">
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
    }).isRequired
};
