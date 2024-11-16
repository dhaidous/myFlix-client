import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password,
        };

        fetch('https://get-all-movies-70de933db6be.herokuapp.com/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                if (data.token) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    console.log("Login successful, token and user set.");
                    onLoggedIn(data.user);
                } else {
                    console.log("Login failed, no token returned.");
                    alert("Login failed");
                }
            })
            .catch(error => {
                console.error("Error during login:", error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Login</button>
            </form>
            <button onClick={() => navigate('/signup')} style={{ marginTop: '10px' }}>
                Sign Up
            </button>
        </div>
    );
};
