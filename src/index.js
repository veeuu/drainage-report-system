import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App';
import './index.css'; // Import your CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router> {/* Single Router wrapping the App */}
        <App />
    </Router>
);
