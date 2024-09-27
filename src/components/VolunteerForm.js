// src/components/VolunteerForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../App.css'; // Import the CSS file for styles

const VolunteerForm = () => {
    const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation

    const handleAboutUsClick = () => {
        navigate('/about-us'); // Navigate to the "About Us" page
    };

    return (
        <div className="volunteer-form-container">
            <h2>TO BE A VOLUNTEER</h2>
            <form className="volunteer-form">
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label>Profession:</label>
                    <input type="text" placeholder="Enter your profession" required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
            <button className="about-us-button" onClick={handleAboutUsClick}>
                TO KNOW MORE ABOUT US
            </button>
        </div>
    );
};

export default VolunteerForm;
