import React, { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
    const [movies] = useState([
        { id: 1, title: 'Inception', description: 'A mind-bending thriller', genre: 'Sci-Fi', director: 'Christopher Nolan', imagePath: 'https://via.placeholder.com/200' },
        { id: 2, title: 'The Matrix', description: 'A hacker discovers reality', genre: 'Sci-Fi', director: 'The Wachowskis', imagePath: 'https://via.placeholder.com/200' },
        { id: 3, title: 'Interstellar', description: 'A journey to save Earth', genre: 'Sci-Fi', director: 'Christopher Nolan', imagePath: 'https://via.placeholder.com/200' }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
    }

    return (
        <div>
            <h1>My Movies</h1>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => {
                        console.log(movie);  // Log the clicked movie to ensure it's being passed correctly
                        setSelectedMovie(movie);  // Update the selected movie state
                    }}
                />
            ))}
        </div>
    );
};
