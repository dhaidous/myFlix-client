import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../movie-card/movie-card';

export const ProfileView = ({ user, token, movies, onLogout }) => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        setFavoriteMovies(movies.filter(m => user.FavoriteMovies.includes(m._id)));
    }, [movies, user.FavoriteMovies]);

    const handleUserUpdate = async (updatedData) => {
        try {
            const response = await fetch(`https://get-all-movies-70de933db6be.herokuapp.com/users/${user.Username}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            const updatedUser = await response.json();
            console.log('User updated:', updatedUser);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleDeregister = async () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            try {
                await fetch(`https://get-all-movies-70de933db6be.herokuapp.com/users/${user.Username}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` },
                });
                onLogout();
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        }
    };

    return (
        <div>
            <h2>User Profile</h2>
            <p>Username: {user.Username}</p>
            <p>Email: {user.Email}</p>
            <button onClick={handleDeregister} className="btn btn-danger">Delete Account</button>

            <h3>Favorite Movies</h3>
            <div className="favorite-movies">
                {favoriteMovies.length > 0 ? (
                    favoriteMovies.map(movie => <MovieCard key={movie._id} movie={movie} />)
                ) : (
                    <p>No favorite movies added.</p>
                )}
            </div>
        </div>
    );
};

ProfileView.propTypes = {
    user: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
        FavoriteMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    token: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    onLogout: PropTypes.func.isRequired,
};
