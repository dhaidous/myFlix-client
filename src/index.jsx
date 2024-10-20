import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';
import { LoginView } from "./components/login-view/login-view";
import { SignupView } from "./components/signup-view/signup-view";
import './index.scss'; // Assuming you have styles here

const MyFlixApplication = () => {
    return (
        <div>
            <MainView />
            <LoginView />
            <SignupView />
        </div>
    );
};

ReactDOM.render(<MyFlixApplication />, document.getElementById('root'));
