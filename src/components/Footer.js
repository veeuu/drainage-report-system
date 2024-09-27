// src/components/Footer.js
import React from 'react';
import '../App.css'; // Import Footer CSS

function Footer() {
    return (
        <footer className="footer">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
            </a>
            <a href="mailto:info@example.com">Email</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
            </a>
        </footer>
    );
}

export default Footer;
