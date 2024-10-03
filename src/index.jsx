import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

import './index.scss'; // Assuming you have styles here

const MyFlixApplication = () => {
    return (
        <MainView />
    );
};

ReactDOM.render(<MyFlixApplication />, document.getElementById('root'));
