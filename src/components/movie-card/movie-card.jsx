import React from 'react';

export const MovieCard = ({ movie, onClick }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer' }}>  {/* Ensure it's clickable */}
            <h2>{movie.title}</h2>
        </div>
    );
};
