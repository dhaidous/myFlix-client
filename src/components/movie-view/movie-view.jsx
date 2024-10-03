import React from 'react';

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
